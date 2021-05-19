const Discord = require("discord.js");
const db = require("quick.db");
 
module.exports = {
    name: "lock",
    aliases: ["trancar", "bloquear"],
    description: "Tranca um canal!",
    run: async(client, message, args) => {
        
  let prefix = db.get(`prefix_${message.guild.id}`) || "k!"
  let motivo = args.slice(" ").join(" ")
  if(!motivo) motivo = "Motivo não Informado"
      let avatar = message.author.avatarURL({ dynamic: true, format: "gif", size: 1024 });
            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author}, Você não tem permissão para usar este comando.`)
        return message.channel.send(embed);
      }
    message.delete();
    message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: false
    })
    const embed = new Discord.MessageEmbed()
    .setTitle('CHAT TRANCADO!')
    .setDescription(`Este chat foi trancado.`)
    .addField('Destrancar:', `${prefix}unlock`, true)
    .addField('Trancado Por:', `${message.author}`, true)
    .addField('Motivo:', motivo)
    .setTimestamp()
    .setThumbnail(avatar)
    .setColor('#6400b6')
    message.channel.send(embed);
    }     
}