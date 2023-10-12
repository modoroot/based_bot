const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
    .setName('makotussy')
    .setDescription('makotussy 🙏'),
    async execute(interaction) {
        await interaction.reply({
            content: ':kaaba: :place_of_worship: :pray: inshallah makotussy',
            files: ['images/makotussy.jpeg']
        });
    }
};