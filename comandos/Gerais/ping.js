const Discord = require("discord.js");

module.exports = {
    name: "ping",
    aliases: ["dados", "net", "ms"],
    description: "Exibe o ping do Bot",
    run: async(client, message, args) => {
  
  const embed = new Discord.MessageEmbed()
  .setDescription("🌐 **Calculando o meu ping**")
  .setColor([255, 182, 193])
  message.channel.send(embed).then(msg => {
    setTimeout(() => {
      let ping = new Discord.MessageEmbed()
      .setDescription(`**🛰️ Meu Ping** \`${Math.round(client.ws.ping)}ms\`\n**📡 Ping do servidor** \`${msg.createdTimestamp - message.createdTimestamp}ms\``)
    .setColor([255, 182, 193])
    msg.edit(ping)
    }, 5000)
  });
    }
}