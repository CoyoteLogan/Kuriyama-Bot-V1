const Discord = require("discord.js");
const moment = require("moment");
moment.locale("pt-BR");
const ms = require("ms");

module.exports = {
    name: "serverinfo",
    aliases: ["infoserver", "server"],
    description: "Exibe as informações do servidor!",
    run: async(client, message, args) => {
        
  message.delete();
  let humans = message.guild.members.cache.filter(m => !m.user.bot).size;
  let bots = message.guild.members.cache.filter(m => m.user.bot).size;
  let icon = message.guild.iconURL;
  const sinfoembed = new Discord.MessageEmbed()
  .setTitle(`Server info ${message.guild.name}`)
  .setColor([255, 182, 193])
  .setThumbnail(message.guild.iconURL())
  .setTimestamp()
  .setFooter(`Requisitado Por ${message.author.tag}`, message.author.displayAvatarURL())
  .addField(`Dono:`, `**User** ${message.guild.owner}\n**ID** ${message.guild.ownerID}`, true)
  .addField(`Região`, message.guild.region.toUpperCase())
  .addField(`Criado dia:`, `${moment.utc(message.guild.createdAt).format("DD/MM/YYYY")} (${ms(Date.now()- message.guild.createdAt, {long: true})})`)
  .addField("Contador", `**Cargos** ${message.guild.roles.cache.size -1}\n**Emojis** ${message.guild.emojis.cache.size}\n**Canais** ${message.guild.channels.cache.size}`)
  .addField(`Contador de Membros`, `**Total** ${message.guild.memberCount}\n**Humanos** ${humans}\n**Bots** ${bots}`, true)
  message.channel.send(sinfoembed)
	}
}
