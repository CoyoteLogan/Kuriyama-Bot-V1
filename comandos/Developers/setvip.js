const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "setvip",
    aliases: ["vip", "setarvip", "darvip", "addvip"],
    description: "Adiciona uma pessoa na lista de vips",
    run: async(client, message) => {
        if (message.author.id !== "580416011472338957") return message.reply('❌ Você não tem permissão para usar esse comando.')

        let user = message.mentions.users.first()
        if(!user) return message.inlineReply('Não encontrei o usuario mencionado!');

        db.set(`kurivip_${user.id}`, true)
        console.log(`AVISO: ${message.author.username} setou vip para ${user.username}`)

        message.inlineReply(`Você setou vip para ${user} com sucesso!`)  
	}	
}