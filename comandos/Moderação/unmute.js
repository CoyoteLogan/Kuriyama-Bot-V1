const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "unmute",
    aliases: ["desmutar", "desmute"],
    description: "Desmuta um usuario mutado!",
    run: async(client, message, args) => {
        
  if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {
      description: "**❌ Você não possui permissão de `Gerenciar Cargos` para executar este comando**",
      color: "#FFB6C1"
    }})
  }
  if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {
      description: "**❌ Eu não possuo a permissão de `Gerenciar Cargo` para executar este comando**",
      color: "#FFB6C1"
    }})
  }
  
  let member = message.mentions.members.first()
  if(!member) {
    return message.channel.send({embed: {
      description: "**❌ Não encontrei o membro informado**",
      color: "#FFB6C1"
    }})
  }
  if(member.id === message.author.id) {
    return message.channel.send({embed: {
      description: "**❌ Você não pode se desmutar**",
      color: "#FFB6C1"
    }})
  }
  let user = message.mentions.users.first()
  
  let role = message.guild.roles.cache.find(ch => ch.name === "⭐| Kuriyama Mute 🔇")
  if(!role) {
    return message.channel.send({embed: {
      description: "**❌ Não encontrei o cargo `⭐| Kuriyama Mute 🔇` para executar este comando**",
      color: "#FFB6C1"
    }})
  }
  
const ute = new Discord.MessageEmbed()
  .setAuthor("🚨 Sistema de Puniçao | Kuriyama")
  .addField("<a:Setap:808909487007989760> Usuario desmutado:", `\`${user.tag}\``)
  .addField("<a:Setap:808909487007989760> Desmutado por", `\`${message.author.tag}\``)
  .setFooter(`Comando solicitado por: ${message.author.tag}`, client.user.displayAvatarURL())
  .setThumbnail(user.displayAvatarURL())
  .setColor([255, 182, 193])
  .setTimestamp()
  message.channel.send(ute)
  member.roles.remove(role.id)
  
let channel = await message.guild.channels.cache.get(db.get(`cMod_${message.guild.id}`))

const modl = new Discord.MessageEmbed()
  .setAuthor("🚨 Sistema de Puniçao | Kuriyama")
  .addField("<a:Setap:808909487007989760> Usuario desmutado:", `\`${user.tag}\``)
  .addField("<a:Setap:808909487007989760> Desmutado por", `\`${message.author.tag}\``)
  .setFooter(`Comando solicitado por: ${message.author.tag}`, client.user.displayAvatarURL())
  .setThumbnail(user.displayAvatarURL())
  .setColor([255, 182, 193])
  .setTimestamp()
channel.send(modl)
  
  
    }
}