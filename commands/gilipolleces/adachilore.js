const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
        .setName('adachilore')
        .setDescription('you are the dumbest CABBAGE!'),
    async execute(interaction) {
        await interaction.reply({
            content: `<:adachi:1162882028509872259>`,
            files: ['images/adachilore.mp4']
        });
    }
};