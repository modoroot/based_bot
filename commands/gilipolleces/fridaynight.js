const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
        .setName('itsfriday')
        .setDescription('🗣️ majima friday (no rima pero me la suda callate)'),
    async execute(interaction) {
        await interaction.reply({
            files: ['images/fridaynight.mp4']
        });
    }
};