const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
        .setName('makotorollin')
        .setDescription('makoto sientate encima mia durante 50 horas seguidas (respirar opcional)'),
    async execute(interaction) {
        await interaction.reply({
            files: ['images/makotorollinit.mp4']
        });
    }
};