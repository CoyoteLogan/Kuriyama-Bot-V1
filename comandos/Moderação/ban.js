const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
    name: "ban",
    aliases: ["hackban", "banir", "bane", "vazadaki"],
    description: "Bane um usuario de um servidor",
    run: async(client, message, args) => {
  if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) {
    return message.inlineReply({embed: {
      description: "**❌ Você precisa da permissão de `Banir Membros` para executar este comando**",
     color: "#FFB6C1"
    }})
  }
  if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) {
    return message.inlineReply({embed: {
      description: "**❌ Eu preciso da permissão de `Banir Membros` para executar este comando**",
      color: "#FFB6C1"
    }})
  }
  
  let target = message.mentions.users.first()
  if(!target) {
    return message.inlineReply({embed: {
      description: "**❌ User não encontrado ou não mencionado!**",
      color: "#ff0000"
    }})
  }
  if(target.bannable) {
    return message.inlineReply({embed: {
      description: "**❌ Você não pode banir este usuario**",
      color: "#ff0000"
    }})
  }

  if(target.id === message.author.id) {
    return message.inlineReply({embed: {
      description: "❌ **Você não pode se banir**",
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


  await db.add(`Baniu_${message.author.id}`, 1)

  let baniu = await db.get(`Baniu_${message.author.id}`) || 0;

  let ban = new MessageEmbed()
  .setAuthor("🚨 Sistema de Puniçao | Kuriyama")
  .addField("<:IconMembers:821008766618566706>  Usuario Banido:", `• Usuario: \`${target.tag}\`\n• ID: \`${target.id}\``)
  .addField("📛 Banido por:", `• Usuario: \`${message.author.tag}\`\n• ID: \`${message.author.id}\``)
  .addField(":pencil: Motivo:", `\`${motivo}\``)
  .setTimestamp()
  .setColor("#FFB6C1")
  .setThumbnail(message.author.displayAvatarURL())
  .setFooter(`${message.author.tag} ja baniu ${baniu} usuarios`, message.author.displayAvatarURL())
  message.inlineReply(ban)


  message.guild.member(target.id).ban(target)
  
  let channel = await message.guild.channels.cache.get(db.get(`cMod_${message.guild.id}`))

const modl = new MessageEmbed()
  .setAuthor("🚨 Sistema de Puniçao | Kuriyama")
  .addField("<:IconMembers:821008766618566706>  Usuario Banido:", `• Usuario: \`${target.tag}\`\n• ID: \`${target.id}\``)
  .addField("📛 Banido por:", `• Usuario: \`${message.author.tag}\`\n• ID: \`${message.author.id}\``)
  .addField(":pencil: Motivo:", `\`${motivo}\``)
  .setTimestamp()
  .setColor("#FFB6C1")
  .setThumbnail(target.displayAvatarURL())
  .setFooter(`${message.author.tag} ja baniu ${baniu} usuarios`, message.author.displayAvatarURL())
channel.send(modl)
  

  const pv = new MessageEmbed()
.setAuthor("🚨 Voce foi Banido | Kuriyama")
.addField("📛 Banido por:", `• Usuario: \`${message.author.tag}\`\n• ID: \`${message.author.id}\``)
.addField(":pencil: Servidor:", `\`${message.guild.name}\`\n• ID: \`${message.guild.id}\``)
.addField(":pencil: Motivo:", `\`${motivo}\``)
.setFooter(`${message.author.tag} ja baniu ${baniu} usuarios`, message.author.displayAvatarURL())
.setColor([255, 182, 193])
target.send(pv)
    }
}