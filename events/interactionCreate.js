const { Collection } = require("discord.js");
const { Events } = require('discord.js');
const { cooldowns } = client;

if (!cooldowns.has(command.data.name)) {
	cooldowns.set(command.data.name, new Collection());
}

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction){
        if(!interaction.isChatInputCommand()) return;
        const command = interaction.client.commands.get(interaction.commandName);

		if (!command) {
			console.error(`No command matching ${interaction.commandName} was found.`);
			return;
		}

		try {
			await command.execute(interaction);
		} catch (error) {
			console.error(`Error executing ${interaction.commandName}`);
			console.error(error);
		}
    },

};