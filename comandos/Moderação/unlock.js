const Discord = require("discord.js");
 
module.exports = {
    name: "unlock",
    aliases: ["desbloquear", "destrancar"],
    description: "Destranca um canal!",
    run: async(client, message, args) => {
 
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
        SEND_MESSAGES: true
    })
    const embed = new Discord.MessageEmbed()
    .setTitle('CHAT DESTRANCADO')
    .setDescription(`Este chat foi destrancado.`)
    .addField('Trancar:', 'k!lock', true)
    .addField('Trancado por:', `${message.author}`, true)
    .addField('Motivo:', motivo)
    .setTimestamp()
    .setThumbnail(avatar)
    .setColor([255,182,193])
    message.channel.send(embed);
    }
}
