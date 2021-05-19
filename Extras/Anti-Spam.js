/*const Discord = require('discord.js');
const config = require('../config.json')
const client = new Discord.Client();
const AntiSpam = require('discord-anti-spam');
const antiSpam = new AntiSpam({
	warnThreshold: 3, 
	muteThreshold: 4, 
	kickThreshold: 7, 
	banThreshold: 7, 
	maxInterval: 2000, 
	warnMessage: '{@user}, por favor pare de floodar ou irei tomar providencias!.', 
	kickMessage: '**{user_tag}** foi kickado por flood.', 
	muteMessage: '**{user_tag}** foi mutado por flood.',
	maxDuplicatesWarning: 6,
	maxDuplicatesKick: 10,
	maxDuplicatesBan: 12, 
	maxDuplicatesMute: 8,
	ignoredPermissions: [ 'ADMINISTRATOR'], 
	ignoreBots: true, 
	verbose: true, 
	ignoredMembers: [], 
	muteRoleName: "Muted", 
	removeMessages: true 
});

client.on('ready', () => console.log(`Sistema de Anti-Raid ativado no Bot ${client.user.tag}.`));

client.on('message', (message) => antiSpam.message(message)); */

client.on('ready', () => console.log(`Bot ${client.user.tag} iniciando.`));
client.login(config.token);