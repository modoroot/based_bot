const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
    .setName('gongyo')
    .setDescription('斯凯勒怀特 yo'),
    async execute(interaction) {
        await interaction.reply({
            files: ['images/yo.mp4']
        });
    }
};