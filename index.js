const fs = require('node:fs');
const path = require('node:path');
const cron = require('node-cron');
const { Client, Collection, Events, GatewayIntentBits, IntentsBitField, ActivityType } = require('discord.js');
require('dotenv').config();
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		IntentsBitField.Flags.GuildMembers,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.MessageContent
	]
});

client.cooldowns = new Collection();
client.commands = new Collection();
const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);
let i = 0;


for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

client.once(Events.ClientReady, () => {
	console.log('joyita')
	client.user.setActivity("aigis x yukari hot steamy sex", {
		type: ActivityType.Watching
	});
});

client.on('messageCreate', async message => {
	if (!message.content.match(/rub[eé]n/i)) return;
	message.channel.send('<@536135621438078978> juega persona');
});

client.on('messageCreate', function (message) {
	if (message.content === "persona 5 ruben") {
		console.log('ruben nemesis initialized 🔥');
		var interval = setInterval(function () {
			message.channel.send('<@536135621438078978> juega persona').catch(console.error);
			i++;
			if (i == 5){
				message.channel.send('DISELO BIEN CLARO :speaking_head: :bangbang: <:jacksexohd:1169059557616660561> ').catch(console.error);
				i = 0;
			}
		}, 1 * 1800000);
	}
});


const nombres = ['alva', 'ernesto', 'alex', 'maicro', 'ruben', 'lucia', 'manuel'];

cron.schedule('0 19 * * *', () => {
	const channel = client.channels.cache.get('976807836661202987');
	if (channel) {
		const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
		channel.send(`🗣️ 📢 ${nombreAleatorio} masón`);
	}
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isChatInputCommand()) return;
	const user = await client.users.fetch(interaction.user.id);

	if (user.id === '536135621438078978')
		return interaction.reply({ content: '✋ COCKBLOCKED ‼️. 🗣️ juega persona 5 strikers ', ephemeral: false });

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	const { cooldowns } = client;

	if (!cooldowns.has(command.data.name)) {
		cooldowns.set(command.data.name, new Collection());
	}

	const now = Date.now();
	const timestamps = cooldowns.get(command.data.name);
	const defaultCooldownDuration = 3;
	const cooldownAmount = (command.cooldown ?? defaultCooldownDuration) * 1000;

	if (timestamps.has(interaction.user.id)) {
		const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;

		if (now < expirationTime) {
			const expiredTimestamp = Math.round(expirationTime / 1000);
			return interaction.reply({ content: `relaja notas unos <t:${expiredTimestamp}:R> para usar \`${command.data.name}\`.`, ephemeral: true });
		}
	}


	timestamps.set(interaction.user.id, now);
	setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);

	try {
		await command.execute(interaction);
	} catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}
});

client.login(process.env.TOKEN);