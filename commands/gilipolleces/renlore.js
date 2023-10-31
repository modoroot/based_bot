const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
        .setName('renlore')
        .setDescription('2nd best persona twink'),
    async execute(interaction) {
        await interaction.reply({
            files: ['images/renlore.mp4']
        });
    }
};