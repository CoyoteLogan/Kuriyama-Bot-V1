const Discord = require('discord.js');

module.exports = {
    name: "embed",
    aliases: ["falarembed", "dizerembed", "embed"],
    description: "Faz o Bot falar algo em embed",
    run: async(client, message, args) => {
        
  message.delete().catch(O_o => {});
  let avatar = message.author.displayAvatarURL({format: 'png'});
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "você não esta autorizado a utilizar esse comando. Você precisa ter a permissao de **Gerenciar Mensagens**!"
    );
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  
  const embed = new Discord.MessageEmbed()
  .setColor([255,182,193])
  .setThumbnail(avatar)
  .setDescription(`${sayMessage}`)
  .setFooter(`Comando solicitado por ${message.author.tag}`)
  .setTimestamp()
  message.channel.send(embed);
    //Log do comando
let canal = client.channels.cache.get("817650939225440286")
let log = new Discord.MessageEmbed()
.setTitle("Comando de say em embed utilizado")
.addField("Utilizado por: ", `${message.author.tag}`)
.addField("ID do usuario: ", `${message.author.id}`)
.addField("Servidor utilizado: ", `${message.guild.name}`)
.addField("ID do servidor: ", `${message.guild.id}`)
.addField("Mensagem falada: ", `\`${sayMessage}\``)
.setColor([255,182,193])
canal.send(log)
	}
}