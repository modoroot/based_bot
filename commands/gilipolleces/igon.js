const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
    .setName('igon')
    .setDescription('alva no dropees ds1 por fa (solo va a leer esto alex seguramente)'),
    async execute(interaction) {
        await interaction.reply({
            content: `CURSE YOU, BAYLE!
I HEREBY VOW...YOU WILL RUE THIS DAY!
BEHOLD! A TRUE DRAKE WARRIOR! AND I, IGON! YOUR TERROR MADE FLESH!
SOLID OF SCALE YOU MIGHT BE, FOUL DRAGON...
...BUT I WILL RIDDLE WITH HOLES YOUR ROTTEN HIDE!
WITH A HAIL OF HARPOONS!
WITH EVERY LAST DROP OF MY BEING!
            `,
            files: ['images/igon.mp4']
        });
    }
};