const Discord = require("discord.js");

module.exports = {
    name: "clear",
    aliases: ["limpar", "apagar", "limparchat", "apagarmensagem"],
    description: "Apaga mensagens do Chat",
    run: async(client, message, args) => {
  message.delete().catch(O_o => { });
  if (message.deleteTable) {
    message.delete();
  }

  // Member doesn't have permission
  if (!message.member.hasPermission("MANAGE_MESSAGES")) {
    return message.channel.send("Voce nao esta autorizado a limpar mensagens...") // .then(m => m.delete(5000));
  }

  // Check if args[0] is a number
  if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
    return message.channel.send("Ok... Isso nao e um numero? Entao eu nao apaguei nenhuma mensagem.")

  }

  // Maybe the bot can't delete messages
  if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
    return message.channel.send("Desculpe... Eu nao posso apagar mensagens.") // .then(m => m.delete(5000));
  }

  let deleteAmount;

  if (parseInt(args[0]) > 100) {
    deleteAmount = 100;
  } else {
    deleteAmount = parseInt(args[0]);
  }

  message.channel.bulkDelete(deleteAmount, true); {
    let embed = new Discord.MessageEmbed()
      .setDescription(`**♻️ O chat foi Limpo.**`)
      .setColor([255, 182, 193])
      .setTitle('`LIMPEZA`')
      .setThumbnail('https://imgur.com/Qxc4Lcr.gif')
      .setFooter(`• Comando solicitado por: ${message.author.username}`, message.author.displayAvatarURL({ format: "png" }));
    message.channel.send(embed)
  }
	}
}