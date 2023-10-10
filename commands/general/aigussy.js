const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('aigussy')
    .setDescription('aigussy 🙏'),
    async execute(interaction) {
        await interaction.reply({
            files: ['images/aigussyfr.png']
        });
    }
};