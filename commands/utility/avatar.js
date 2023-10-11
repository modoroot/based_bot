const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
        .setName('avatar')
        .setDescription('avatar y eso')
        .addUserOption(option => option.setName('target').setDescription('quien')),
    category: 'utility',
    async execute(interaction) {
        const user = interaction.options.getUser('target');
        if (user) return interaction.reply(`‎ [${user.username}'s avatar](${user.displayAvatarURL()})`);
        return interaction.reply(`‎ [avatar](${interaction.user.displayAvatarURL()})`);
    },
};