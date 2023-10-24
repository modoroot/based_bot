const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
        .setName('incelgrindset')
        .setDescription('vaya notas'),
    async execute(interaction) {
        await interaction.reply({
            files: ['images/sasel.mp4']
        });
    }
};