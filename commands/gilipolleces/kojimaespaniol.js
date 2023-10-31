const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
        .setName('kojimaoraamigos')
        .setDescription('🗣️ ora amigo'),
    async execute(interaction) {
        await interaction.reply({
            files: ['images/kojimaespañol.mp4']
        });
    }
};