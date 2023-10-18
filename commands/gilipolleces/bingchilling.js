const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
    .setName('bingchilling')
    .setDescription('kiryu bing chilleando 🙏'),
    async execute(interaction) {
        await interaction.reply({
            content: `bing chillin 冰冷 ‼‼ :flag_cn:`,
            files: ['images/bingchillin.mp4']
        });
    }
};