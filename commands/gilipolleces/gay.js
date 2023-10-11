const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
    .setName('gay')
    .setDescription('my fucking god ❗⁉'),
    async execute(interaction) {
        await interaction.reply({
            files: ['images/thesebitchesgayfr.png']
        });
    }
};