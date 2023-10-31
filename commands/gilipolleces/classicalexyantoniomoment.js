const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
        .setName('classicalexyantoniomoment')
        .setDescription('esquizofrenia'),
    async execute(interaction) {
        await interaction.reply({
            files: ['images/classicalexyantoniomoment.mp4']
        });
    }
};