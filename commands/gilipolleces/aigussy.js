const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
    .setName('aigussy')
    .setDescription('aigussy 🙏'),
    async execute(interaction) {
        await interaction.reply({
            content: ':kaaba: :place_of_worship: :pray: inshallah aigussy',
            files: ['images/aigussyfr.png']
        });
    }
};