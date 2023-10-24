const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    cooldown: 10,
    data: new SlashCommandBuilder()
        .setName('persona1enjoyer')
        .setDescription('juega persona 1 alex 💣🔥'),
    async execute(interaction) {
        await interaction.reply({
            content: `
            KEEP RUNNING ON THE COLD TRACK <:nanjoass:1166481427827802243>
            THE HATE CRAZED THOUGHTS JUST DON'T STOP <:nanjoass:1166481427827802243>
            AS IF A DREAM AWAKE FROM THE DARK <:nanjoass:1166481427827802243>
            THE WORLD DELETES ALL I SAID TO YOU <:nanjoass:1166481427827802243>
            
            OVERWRITE THIS PAIN TEARING ME APART <:nanjoass:1166481427827802243>
            TOKE DE IKU <:nanjoass:1166481427827802243>
            FROZEN MIND <:nanjoass:1166481427827802243>
            RAY OF LIGHT <:nanjoass:1166481427827802243>
            READY FOR A TRIP TO NOWHERE <:nanjoass:1166481427827802243>
            
            OVERWRITE THIS PAIN TEARING ME APART <:nanjoass:1166481427827802243>
            YASURAI DA <:nanjoass:1166481427827802243>
            MY LAST PRAY WITH NO AIM <:nanjoass:1166481427827802243>
            MY LAST, LET ME FEEL ALIVE <:nanjoass:1166481427827802243>`,
            files: ['images/persona1enjoyer.mp4']
        });
    }
};