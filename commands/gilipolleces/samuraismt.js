const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
    .setName('samuraismt')
    .setDescription('mejor que sonic (ni lo he empezado)'),
    async execute(interaction) {
        await interaction.reply({
            content: `NOW COME, SAMURAI <:flynnsmirk:1164135792000647189>
            PUT ON A GOOD SHOW... <:flynnsmirk:1164135792000647189>
            `,
            files: ['images/samuraismt.mp4']
        });
    }
};