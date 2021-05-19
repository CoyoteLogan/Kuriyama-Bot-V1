module.exports = (client) => {
 const Discord = require('discord.js');
 const db = require('quick.db');
 
 //const Guild = require('../../Structure/DataBase/Guild.js');
 //const Users = require('../../Structure/DataBase/Users.js');
 
 client.on("message", function(message){
  let canal = message.guild.channels.cache.get(db.get(`Log_${message.guild.id}`))
  if(canal) {
  }
});

client.on("messageDelete", function(message){
  let canal = message.guild.channels.cache.get(db.get(`Log_${message.guild.id}`))
  let avatar = message.author.avatarURL({ dynamic: true, format: "gif", size: 1024 });
  if(canal) {
    if(message.author.bot)
    {
    }
    else
    {
    const messagelog = new Discord.MessageEmbed()
    .setTitle('📝 Mensagem apagada!')
    .setAuthor(`Escrita por: ${message.author.tag}`, avatar)
    .setThumbnail(avatar)
    .setDescription(`**Canal da Mensagem:** ${message.channel.name}`)
    .addField(`Mensagem apagada!`, `\`${message}\``, false)
    .setFooter(`ID do usuario: ${message.author.id}`)
    .setColor([255, 182, 193])
    canal.send(messagelog)
    }
  }
});

client.on("messageUpdate", function(oldMessage, newMessage){
  	let canal = oldMessage.guild.channels.cache.get(db.get(`Log_${oldMessage.guild.id}`))
  	let avatar = oldMessage.author.avatarURL({ dynamic: true, format: "gif", size: 1024 });
  	if(canal) {
    if(oldMessage.author.bot)
    {
    }
    else
    {
    const messagelog = new Discord.MessageEmbed()
    .setTitle('📝 Mensagem editada!')
    .setAuthor(`Editada por: ${oldMessage.author.tag}`, avatar)
    .setThumbnail(avatar)
    .setDescription(`**Canal da Mensagem:** ${oldMessage.channel.name}`)
    .addField(`Mensagem antiga!`, `\`${oldMessage}\``, false)
    .addField(`Mensagem Nova!`, `\`${newMessage}\``, false)
    .setFooter(`ID do usuario: ${oldMessage.author.id}`)
    .setColor([255, 182, 193])
    canal.send(messagelog)
    }
  }
});
}