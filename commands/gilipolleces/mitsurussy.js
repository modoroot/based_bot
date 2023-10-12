const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
    .setName('mitsurussy')
    .setDescription('mitsurussy 🙏'),
    async execute(interaction) {
        await interaction.reply({
            content: ':kaaba: :place_of_worship: :pray: inshallah mitsurussy',
            files: ['images/mitsurussy.png']
        });
    }
};