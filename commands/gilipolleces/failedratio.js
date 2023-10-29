const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
    .setName('failedratio')
    .setDescription('h.e'),
    async execute(interaction) {
        await interaction.reply({
            files: ['images/failedratio.mp4']
        });
    }
};