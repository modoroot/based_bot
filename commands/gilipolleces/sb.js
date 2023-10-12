const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
    .setName('sb')
    .setDescription(':Sb ⁉💀☠🔥'),
    async execute(interaction) {
        await interaction.reply({
            content: 'Blud done walked 𒀱𒐫𒇫𒅌𒆜𒆙𒄆𖣘𖠄𖣁𖣘 miles😂😂😂🗣️🗣️🗣️🔥🔥🙏🙏🙏',
            files: ['images/sb.mp4']
        });
    }
};