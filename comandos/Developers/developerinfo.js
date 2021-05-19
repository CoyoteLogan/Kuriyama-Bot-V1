const Discord = require('discord.js');
const os = require("os");


module.exports = {
    name: "developerinfo",
    aliases: ["developer", "desenvolvedor", "devinfo"],
    description: "Mostra as informações de desenvolvedor!",
    run: async(client, message) => {
  if (message.author.id !== "580416011472338957") return message.reply('Somente meus desenvolvedores podem utilizar esse comando!')
  let modelo = os.cpus().map((i) => `${i.model}`)[0]


  const botinfo = new Discord.MessageEmbed()
  .addField(` :computer:┃Memória RAM`,`\`${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}MB\``)
  .addField(`💻┃CPU`, `\`${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}% de CPU\``)
  .addField(` :computer:┃Processador`, `\`${modelo}\``)
  .setImage('')
  message.channel.send(botinfo)
	}
}