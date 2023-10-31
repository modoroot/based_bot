const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
        .setName('akechilore')
        .setDescription('pancakes enjoyer'),
    async execute(interaction) {
        await interaction.reply({
            content: `<:adachi:1162882028509872259>`,
            files: ['images/akechilore.mp4']
        });
    }
};