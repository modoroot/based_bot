const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
    .setName('bingchilling')
    .setDescription('kiryu bing chilleando 🙏'),
    async execute(interaction) {
        await interaction.reply({
            content: `bing chilling :bangbang: :bangbang: :flag_cn:`,
            files: ['images/bingchilling.mp4']
        });
    }
};