const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
        .setName('fuukasupremacy')
        .setDescription('FUUKA 🙏'),
    async execute(interaction) {
        await interaction.reply({
            content: `YOU GOTTA TELL NOW, YOUR LOVE CAME ALL OVER ME <a:fuuka_spin:1162868528236466302>
             WHEN STARS'RE SMILLING MOON <a:fuuka_spin:1162868528236466302>
             WONDER HOW LOOK IN YOUR EYES <a:fuuka_spin:1162868528236466302> 
             JUST DIALING YOUR NUMBER <a:fuuka_spin:1162868528236466302>`,
            files: ['images/fuukasupremacy.mp4']
        });
    }
};