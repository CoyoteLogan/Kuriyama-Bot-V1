  module.exports = (client) => {
     client.on('message', async (message, guild) => {
     const db = require("quick.db");
     const Discord = require('discord.js');
     //let prefix = "k!"
	 let prefix = db.get(`prefix_${message.guild.id}`) || "k!"
     if(message.author.bot || message.channel.type === "dm") return;
     if (!message.content.startsWith(prefix)) return;
     if (!message.guild) return;
     if (!message.member) message.member = message.guild.fetchMember(message);
     const args = message.content.slice(prefix.length).trim().split(/ +/g);
     const cmd = args.shift().toLowerCase();
     if (cmd.length == 0) return;
     let command = client.commands.get(cmd)
     if (!command) command = client.commands.get(client.aliases.get(cmd));
     if (command) command.run(client, message, args)
     })
  }