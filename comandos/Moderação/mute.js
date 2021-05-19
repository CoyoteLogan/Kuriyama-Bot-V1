const Discord = require("discord.js");
const ms = require("ms");
const db = require("quick.db");

module.exports = {
    name: "mute",
    aliases: ["silenciar", "calado", "calaaboca", "silencio", "mutar", "mutado"],
    description: "Silencia alguém",
    run: async(client, message, args) => {
        
  if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) {
    return message.channel.send({embed: {
      description: "**❌ Você não possui a permissão de `Gerenciar Cargos` para executar este comando**",
      color: "#FFB6C1"
    }})
  }
if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) {
  return message.channel.send({embed: {
    description: "**❌ Eu não possuo a permissão de `Gerenciar Cargos` para executar este comando**",
    color: "#FFB6C1"
  }})
}
  let role = message.guild.roles.cache.find(ch => ch.name === "⭐| Kuriyama Mute 🔇")
  if(!role) {
    let criarrole = message.guild.roles.create({data: { name: "⭐| Kuriyama Mute 🔇", permissions: []}})
    return message.channel.send({embed: {
      description: "**❌ Não foi possível encontrar o cargo `⭐| Kuriyama Mute 🔇` por isso criei um para você**",
      color: "#FFB6C1"
    }})
  }
  let member = message.mentions.members.first()
  /*let member = message.mentions.users.first() || client.users.cache.get(args[0]);*/
  if(!member) {
    return message.channel.send({embed: {
      description: "**❌ Não foi possível encontrar o user mencionado**",
      color: "#FFB6C1"
    }})
  }
  let user = message.mentions.users.first()
  if(member.roles.highest.position >= message.member.roles.highest.position) {
    return message.channel.send({embed: {
      description: "**❌ Você não pode mutar este usuario, ele possui o mesmo cargo ou um cargo superior ao seu!**",
      color: "#FFB6C1"
    }})
  }
  if(member.id === message.author.id) {
    return message.channel.send({embed: {
      description: "**❌ Você não pode se mutar**",
      color: "#FFB6C1"
    }})
  }
  
  let tempo = args[1]
  if(!tempo) {
    return message.channel.send({embed: {
      description: "**❌ Você não especificou o tempo\n> `h = horas, m = minutos, s = segundos`",
      color: "#FFB6C1"
    }})
  }
  let motivo = args.slice(2).join(" ")
  if(!motivo) {
    return message.channel.send({embed: {
      description: "**❌ Não especificou um motivo**",
      color: "#FFB6C1"
    }})
} 
member.roles.add(role.id)
 let comotivo = new Discord.MessageEmbed()
 .setAuthor("🚨 Sistema de Puniçao | Kuriyama")
 .addField(":pencil: Usuario Mutado:", `• Usuario: \`${user.tag}\`\n• ID: \`${user.id}\``)
 .addField(":pencil: Mutado por:", `• Usuario: \`${message.author.tag}\`\n• ID: \`${message.author.id}\``)
 .addField("• Tempo:", `\`${tempo}\``)
 .addField(":pencil: Motivo:", `\`${motivo}\``)
 .setColor([255, 182, 193])
 .setFooter(`Comando solicitado por: ${message.author.tag}`, message.author.displayAvatarURL())
 .setTimestamp()
 .setThumbnail(user.displayAvatarURL())
message.channel.send(comotivo)


let channel = await message.guild.channels.cache.get(db.get(`cMod_${message.guild.id}`))
const modl = new Discord.MessageEmbed()
  .setAuthor("🚨 Sistema de Puniçao | Kuriyama")
  .addField(":pencil: Usuario Mutado:", `• Usuario: \`${user.tag}\`\n• ID: \`${user.id}\``)
  .addField(":pencil: Mutado por:", `• Usuario: \`${message.author.tag}\`\n• ID: \`${message.author.id}\``)
  .addField("• Tempo:", `\`${tempo}\``)
  .addField(":pencil: Motivo:", `\`${motivo}\``)
  .setTimestamp()
  .setThumbnail(user.displayAvatarURL())
  .setColor([255, 182, 193])
channel.send(modl)  

const pv = new Discord.MessageEmbed()
  .setAuthor("🚨 Sistema de Puniçao | Kuriyama")
  .setDescripton(":pencil: Voce foi Mutado")
  .addField(":pencil: Servidor:", `• Nome: \`${message.guild.name}\`\n• ID: \`${message.guild.id}\``)
  .addField(":pencil: Mutado por:", `• Usuario: \`${message.author.tag}\`\n• ID: \`${message.author.id}\``)
  .addField("• Tempo:", `\`${tempo}\``)
  .addField(":pencil: Motivo:", `\`${motivo}\``)
  .setTimestamp()
  .setThumbnail(user.displayAvatarURL())
  .setColor([255, 182, 193])
user.send(pv)



setTimeout(function() {
member.roles.remove(role.id)
  let unmute = new Discord.MessageEmbed()
  .setAuthor("🚨 Sistema de Puniçao | Kuriyama")
  .addField("<a:Setap:808909487007989760> Usuario desmutado:", `\`${user.tag}\``)
  .addField(":pencil: Motivo:", `\`Tempo de Mute Esgotado\``)
  .setThumbnail(user.displayAvatarURL())
  .setFooter(`Comando solicitado por: ${message.author.tag}`, message.author.displayAvatarURL())
  .setTimestamp()
  .setThumbnail(user.displayAvatarURL())
  .setColor("#ff0000")
  message.channel.send(unmute)
  

  const mod = new Discord.MessageEmbed()
  .setAuthor("🚨 Sistema de Puniçao | Kuriyama")
  .addField("<a:Setap:808909487007989760> Usuario desmutado:", `\`${user.tag}\``)
  .addField(":pencil: Motivo:", `\`Tempo de Mute Esgotado\``)
  .setTimestamp()
  .setThumbnail(user.displayAvatarURL())
  .setColor("#FF0000")
  .setFooter(`Comando solicitado por: ${message.author.tag}`, client.user.displayAvatarURL())
  channel.send(mod)
  }, ms(tempo))
    }
}