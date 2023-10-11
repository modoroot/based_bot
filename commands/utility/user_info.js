const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('user')
		.setDescription('info del usuario'),
	category: 'utility',
	async execute(interaction) {
		await interaction.reply(`nombre: ${interaction.user.username}, fecha donde condenó su virginidad: ${interaction.member.joinedAt}.`);
	},
};