const Discord = require("discord.js");

module.exports = {
    name: "slowmode",
    aliases: ["cooldown", "slow"],
    description: "Seta um tempo para poder falar no canal",
    run: async(client, message, args) => {
        
  if(!message.member.hasPermission(["MANAGE_CHANNELS", "ADMINISTRATOR"])) return message.channel.send({embed: {
    description: "**❌ Você não possui a permissão de `Gerenciar Canais` para executar este comando**",
    color: "#FFB6C1"
  }})
  if(!message.guild.me.hasPermission(["MANAGE_CHANNELS", "ADMINISTRATOR"])) return message.channel.send({embed: {
    description: "**❌ Eu não possuo a permissão de `Gerenciar Canais` para executar este comando**",
    color: "#FFB6C1"
  }})
  
if(!args[0]) return message.channel.send({embed: {
  description: "**❌ Dê um numero valido**",
  color: "#FFB6C1"
}})
if(args[0] > 2480) return message.channel.send({embed: {
  description: "**❌ Você só pode setar um numero de `0 a 2480`**",
  color: "#FFB6C1"
}})
if(message.content.includes(" -")) return message.channel.send({embed: {
  description: "**❌ Você não pode usar quantias negativas!**",
  color: "#FFB6C1"
}})
  
  message.channel.setRateLimitPerUser(args[0])
  
  const rate = new Discord.MessageEmbed()
  .setDescription(`**⏳ Cooldown do chat alterado para \`${args[0]}\` Segundos**`)
  .setColor([255, 182, 193])
  .setFooter(`Author do comando ${message.author.tag}`, message.author.displayAvatarURL())
  message.channel.send(rate)
    }
}