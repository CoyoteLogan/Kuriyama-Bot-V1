const Discord = require('discord.js');

module.exports = {
    name: "bot",
    aliases: ["botinfo", "infobot"],
    description: "",
    run: async(client, message, args) => {

  //message.delete().catch(O_o => { });
  let embed = new Discord.MessageEmbed()
    .setColor([255, 182, 193])
    .setDescription("🔰 Minhas informaçoes")
    .addField("🗺️ Servidores", client.guilds.cache.size, true)
    .addField("💻 Versao", "Beta 1.0", true)
    .addField("👥 Me adicione", "[Meu link](https://discord.com/oauth2/authorize?client_id=798733541672222771&scope=bot&permissions=268840062)")
    /*.addField("Discord", "Entre no meu Discord de Suporte e Entretenimento clicando [aqui](https://discord.gg/e9CYt4emDB)")*/
    .setFooter(`Comando solicitado por: ${message.author.tag}`)
    .setTimestamp();

  message.inlineReply(embed)
	}
}
