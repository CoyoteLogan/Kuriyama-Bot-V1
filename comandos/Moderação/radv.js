const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "radv",
    aliases: ["rwarn", "retiraradv"],
    description: "Retira uma adivertencia de um usuario!",
    run: async(client, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES", "ADMINISTRATOR")) {
  let per = new Discord.MessageEmbed()
.setDescription("**❌ Você não possue a permissão de `Garenciar cargos` para executar este comando**")
.setColor([255, 182, 193])

return message.channel.send(per)
}
  
  let member = message.mentions.users.first()
  if(!member) return message.channel.send({embed: {
    description: "**❌ Não mencionou um usuario para remover as warns**",
    color: "#FFB6C1"
  }})
  

  let warns = await db.get(`advCount_${message.guild.id}-${member.id}`)
  
  if(!args[1]) return message.channel.send({embed: {
    description: "**❌ Dê uma quantia de warns a ser removida**",
    color: "#FFB6C1"
  }})
  
  if(message.content.includes(" -")) return message.channel.send({embed: {
    description: "**❌ Você não pode retirar uma quantia negativa de warns**",
    color: "#FFB6C1"
  }})
  
  if(member.id === message.author.id) return message.channel.send({embed: {
    description: "**❌ Não podes retirar warns de você mesmo!**",
    color: "#FFB6C1"
  }})
  
  
  if(warns < args[1]) return message.channel.send({embed: {
    description: "**❌ Não podes retirar warns que o user não possui**",
    color: "#FFB6C1"
  }})
  
  const rwarns = new MessageEmbed()
  .setTitle("🚨 Sistema de Puniçao | Kuriyama")
  .setColor([255, 182, 193])
  .setFooter(`🚨 Avertencia removida`, message.author.displayAvatarURL())
  .addField("<:IconMembers:821008766618566706>  Removido de:", `• Usuario: \`${member.tag}\`\n• ID: \`${member.id}\``)
  .addField("📛 Removido por:", `• Usuario: \`${message.author.tag}\`\n• ID: \`${message.author.id}\``)
  .addField(":pencil: Quantia", `\`${args[1]}\``)
  message.channel.send(rwarns)
  
  db.subtract(`advCount_${message.guild.id}-${member.id}`, args[1])
  
 let channel = message.guild.channels.cache.get(db.get(`cMod_${message.guild.id}`))
if(!channel) {
  return
} else {

const arns = new MessageEmbed()
  .setTitle("🚨 Sistema de Puniçao | Kuriyama")
  .setColor([255, 182, 193])
  .setFooter(`🚨 Advertencia removida`, message.author.displayAvatarURL())
  .addField("<:IconMembers:821008766618566706>  Removido de:", `• Usuario: \`${member.tag}\`\n• ID: \`${member.id}\``)
  .addField("📛 Removido por:", `• Usuario: \`${message.author.tag}\`\n• ID: \`${message.author.id}\``)
  .addField(":pencil: Quantia", `\`${args[1]}\``)
  channel.send(arns)

}

	}
}

