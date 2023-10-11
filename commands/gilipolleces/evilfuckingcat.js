const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
    .setName('evilfuckingwizardcat')
    .setDescription('malvado jodiendo mago gato'),
    async execute(interaction) {
        await interaction.reply({
            files: ['images/evilfuckingcat.mp4']
        });
    }
};