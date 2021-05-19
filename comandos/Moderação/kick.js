const Discord = require("discord.js")
const db = require("quick.db");

module.exports = {
    name: "kick",
    aliases: ["expulsar", "retirar", "ejetar"],
    description: "Expulsa alguém do servidor!",
    run: async(client, message, args) => {
if(!message.member.hasPermission(["KICK_MEMBERS", "ADMINISTRATOR"])) return message.channel.send({embed: {
  description: "**❌ Você precisa da permissão de `Kikar Membros` para executar este comando**",
  color: "#FFB6C1"
}})
if(!message.guild.me.hasPermission(["KICK.MEMBERS", "AMINISTRATOR"])) return message.channel.send({embed: {
  description: "**❌ Eu preciso da permissão de `Kikar Membros` para executar este comando**",
  color: "#FFB6C1"
}})

let member = message.mentions.users.first()
let user = message.mentions.users.first()
if(!member) return message.channel.send({embed: {
  description: "**❌ Mencione um usuario para eu poder kicka-lo**",
  color: "#FFB6C1"
}})

let motivo = args.slice(1).join(" ")
if(!motivo) return message.channel.send({embed: {
  description: "**❌ Dê um motivo para kickar o user**",
  color: "#FFB6C1"
}})

message.guild.member(member).kick(`Expulso por: ${message.author.tag} | Motivo: ${motivo}`)

const kick = new Discord.MessageEmbed()
.setAuthor("🚨 Sistema de Puniçao | Kuriyama")
.addField("<:IconMembers:821008766618566706>  Usuario Expulso:", `• Usuario: \`${user.tag}\`\n• ID: \`${user.id}\``)
.addField("📛 Expulso por:", `• Usuario: \`${message.author.tag}\`\n• ID: \`${message.author.id}\``)
.addField(":pencil: Motivo:", `\`${motivo}\``)
.setTimestamp()
.setColor("#FFB6C1")
.setFooter("Sistema de puniçao <:pp_check:798743340128010250> ", message.author.displayAvatarURL())
message.channel.send(kick)

let channel = await message.guild.channels.cache.get(db.get(`cMod_${message.guild.id}`))

const modl = new Discord.MessageEmbed()
.setAuthor("🚨 Sistema de Puniçao | Kuriyama")
.addField("<:IconMembers:821008766618566706>  Usuario Expulso:", `• Usuario: \`${user.tag}\`\n• ID: \`${user.id}\``)
.addField("📛 Expulso por:", `• Usuario: \`${message.author.tag}\`\n• ID: \`${message.author.id}\``)
.addField(":pencil: Motivo:", `\`${motivo}\``)
.setTimestamp()
.setColor("#FFB6C1")
.setFooter("Sistema de Puniçao <:pp_check:798743340128010250> ", message.author.displayAvatarURL())
channel.send(modl)

const pv = new Discord.MessageEmbed()
.setAuthor("🚨 Sistema de Puniçao | Kuriyama")
.setDescription("<:IconMembers:821008766618566706>  Voce foi expulso")
.addField(`:pencil: Expulso do Servidor:`, `• Nome: \`${message.guild.name}\`\n• ID: \`${message.guild.id}\``)
.addField("📛 Expulso por:", `• Usuario: \`${message.author.tag}\`\n• ID: \`${message.author.id}\``)
.addField(":pencil: Motivo:", `\`${motivo}\``)
.setTimestamp()
.setColor("#FFB6C1")
.setFooter("Sistema de puniçao <:pp_check:798743340128010250> ", message.author.displayAvatarURL())
member.send(pv)



    }
}
