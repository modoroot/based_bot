const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
    .setName('havedignity')
    .setDescription('gentle. have dignity. 🔥🙏'),
    async execute(interaction) {
        await interaction.reply({
            files: ['images/havedignity.mp4']
        });
    }
};