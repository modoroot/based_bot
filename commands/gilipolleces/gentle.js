const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
    .setName('gentle')
    .setDescription('gentle. have dignity. 🔥🙏'),
    async execute(interaction) {
        await interaction.reply({
            files: ['images/gentle.mp4']
        });
    }
};