const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('ping del bot'),
	category: 'utility',
	async execute(interaction) {
        const sent = await interaction.reply({content: 'pinging...', fetchReply: true});
        interaction.editReply(`Roundtrip latency: ${sent.createdTimestamp - interaction.createdTimestamp}ms`);
	},
};