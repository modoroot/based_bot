const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
        .setName('adachisupremacy')
        .setDescription('adachi ass goofball'),
    async execute(interaction) {
        await interaction.reply({
            files: ['images/adachisupremacy.mp4']
        });
    }
};