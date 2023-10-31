const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
        .setName('fuukamac')
        .setDescription('big mac'),
    async execute(interaction) {
        await interaction.reply({
            files: ['images/fuukamac.mp4']
        });
    }
};