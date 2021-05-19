const Discord = require('discord.js');

module.exports = {
    name: "say",
    aliases: ["falar", "fale", "diga", "dizer"],
    description: "Faz o Bot falar algo!",
    run: async(client, message, args) => {
        
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "você não esta autorizado a utilizar esse comando. Você precisa ter a permissao de **Gerenciar Mensagens**!"
    );
  if(message.content.includes("@everyone")) return message.inlineReply('Você não pode marcar everyone!')
  message.delete().catch(O_o => {});
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  message.channel.send(`${sayMessage}\n\n\n Comando solicitado por: ${message.author}`);

    //Log do comando
  let canal = client.channels.cache.get("817650939225440286")
  let embed = new Discord.MessageEmbed()
  .setTitle("Comando de say utilizado")
  .addField("Utilizado por: ", `${message.author.tag}`)
  .addField("ID do usuario: ", `${message.author.id}`)
  .addField("Servidor utilizado: ", `${message.guild.name}`)
  .addField("ID do servidor: ", `${message.guild.id}`)
  .addField("Mensagem falada: ", `\`${sayMessage}\``)
  .setColor([255,182,193])
  canal.send(embed)
    }
}