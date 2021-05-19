const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
name: "warn", 
aliases: ["warnuser"],
run: async (client, message, args) => {

if(!message.member.hasPermission("MANAGE_ROLES", "ADMINISTRATOR")) {
let per = new Discord.MessageEmbed()
.setDescription("**❌ Você não possue a permissão de `Garenciar cargos` para executar este comando**")
.setColor([255, 182, 193])

return message.inlineReply(per)
}

let member = message.mentions.members.first()
  if(!member) {
    return message.inlineReply({embed: {
      description: "**❌ Não foi possível encontrar o user mencionado**",
      color: "#FFB6C1"
    }})
  }

  let user = message.mentions.users.first()
  if(member.roles.highest.position >= message.member.roles.highest.position) {
    return message.inlineReply({embed: {
      description: "**❌ Você não pode dar uma advertencia neste usuario, ele possui o mesmo cargo ou um cargo superior ao seu!**",
      color: "#FFB6C1"
    }})
  }

let motivo = args.join(" ").slice(22)
  if(!motivo) {
    return message.inlineReply({embed: {
      description: "**❌ Não especificou um motivo**",
      color: "#FFB6C1"
    }})
  }

const ebd = new Discord.MessageEmbed()
.setAuthor("🚨 Sistema de Puniçao | Kuriyama")
.addField("<:IconMembers:821008766618566706>  Usuario Advertido:", `• Usuario: \`${user.tag}\`\n• ID: \`${user.id}\``)
.addField("📛 Advertido por:", `• Usuario: \`${message.author.tag}\`\n• ID: \`${message.author.id}\``)
.addField(":pencil: Motivo:", `\`${motivo}\``)
.setFooter(`Advertido por ${message.author.tag}`)
.setColor([255, 182, 193])
message.inlineReply(ebd)
await db.add(`advCount_${message.guild.id}-${user.id}`, 1)

let warns = await db.get(`advCount_${message.guild.id}-${user.id}`) || 0;

let channel = await message.guild.channels.cache.get(db.get(`cMod_${message.guild.id}`))

const modl = new Discord.MessageEmbed()
.setAuthor("🚨 Sistema de Puniçao | Kuriyama")
.addField("<:IconMembers:821008766618566706>  Usuario Advertido:", `• Usuario: \`${user.tag}\`\n• ID: \`${user.id}\``)
.addField("📛 Advertido por:", `• Usuario: \`${message.author.tag}\`\n• ID: \`${message.author.id}\``)
.addField(":pencil: Motivo:", `\`${motivo}\``)
.addField(":pencil: O usuario possui:", `\`${warns} avisos\``)
.setFooter(`Advertido por ${message.author.tag}`)
.setColor([255, 182, 193])
channel.send(modl)

const pv = new Discord.MessageEmbed()
.setAuthor("🚨 Voce foi advertido | Kuriyama")
.addField("📛 Advertido por:", `• Usuario: \`${message.author.tag}\`\n• ID: \`${message.author.id}\``)
.addField(":pencil: Motivo:", `\`${motivo}\``)
.addField(":pencil: Servidor:", `\`${message.guild.name}\``)
.setFooter(`Voce possui ${warns} advertencias`)
.setColor([255, 182, 193])
user.send(pv)
}
}