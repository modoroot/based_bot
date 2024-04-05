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
	client.user.setActivity("aigis beats the shit out of you ASMR [F4A]", {
		type: ActivityType.Watching
	});
});

client.on('messageCreate', async message => {
	if (!message.content.match(/rub[eé]n/i)) return;
	message.channel.send('<@536135621438078978> juega persona');
});

client.on('messageCreate', async message => {
	if (!message.content.match("oh yagami")) return;
	message.channel.send(`[oh](https://cdn.discordapp.com/attachments/287266770816073728/1224821034364964995/Yagami_sucks_off_Kaito.mp4?ex=661ee27a&is=660c6d7a&hm=003eabab3504ec8e142d5a3317fb7c203d1ae73300a3be08b795e28778ec56c0&)`);
});

cron.schedule('30 6 * * *', () => {
    const channel = client.channels.cache.get('976807836661202987');
    if (channel) {
		channel.send(`[aigis pq no existes](https://cdn.discordapp.com/attachments/287266770816073728/1204024362114617344/good_morning_aigussy.mov?ex=65d33a11&is=65c0c511&hm=a3663aeb376a79f12597c53fc93c469cb8990f339d02f837fd3dae38b66650c2&)`);
    } else {
        console.error('no se pudo encontrar el canal de destino');
    }
});

cron.schedule('59 22 * * 7', () => {
    const channel = client.channels.cache.get('976807836661202987');
    if (channel) {
		channel.send(`[ahh](https://cdn.discordapp.com/attachments/287266770816073728/1204955090708996106/thecycle.mp4?ex=65d69ce0&is=65c427e0&hm=ad697e529ef4fc30363fe0b1cb07eb341656c6853260225fd656f9e5694dd46c&)`);
    } else {
        console.error('no se pudo encontrar el canal de destino');
    }
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

client.on('messageCreate', (message) => {
	  const random = Math.random();
	  if (random < 0.001) {
		console.log(random)
		message.reply('[boo-womp](https://cdn.discordapp.com/attachments/287266770816073728/1206739363246116874/x2mate.com-Spongebob_Boo-womp_Sound_Effect.mp4?ex=65dd1a9c&is=65caa59c&hm=02f74587bdec6f9c3d7fddf7e356a757d8ff8bd1272b5d9ef4ca8eb800e53675&)');
	  }
  });
  client.on('messageCreate', (message) => {
	const random = Math.random();
	if (random < 0.001) {
	  console.log(random)
	  message.reply('[weeee-wuuuu](https://cdn.discordapp.com/attachments/287266770816073728/1225538421632532480/SpongeBob_disappointed_sound_effect.mp4?ex=66217e99&is=660f0999&hm=ceaae3d398c8fe4f0939bdd3270e73d62cd2718e429269c8c6c65cf56acf2f3f&)');
	}
});

const nombres = ['alva', 'ernesto', 'alex', 'maicro', 'ruben', 'lucia', 'manuel'];

cron.schedule('0 18 * * *', () => {
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
		return interaction.reply({ content: '✋ COCKBLOCKED ‼️. 🗣️ juega persona 4 golden ', ephemeral: false });

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