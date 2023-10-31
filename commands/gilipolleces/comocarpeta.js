const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
        .setName('carpet')
        .setDescription('no tiene nada que ver pero ruben juega persona 5 o te meto 200 horas de mute mas las pajas que me he hecho en toda mi vida es decir te mueres antes de ser desmuteado de este discord'),
    async execute(interaction) {
        await interaction.reply({
            content: `CHECK IT OUT 💥 👊 IM IN THE HOUSE 🏠 :interrobang: LIKE CARPET :skull_crossbones: :bangbang:`,
            files: ['images/carpeta.mp4']
        });
    }
};