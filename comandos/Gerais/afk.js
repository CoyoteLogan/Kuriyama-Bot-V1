const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
    name: "afk",
    aliases: ["ativarafk"],
    description: "O usuario entra no modo AFK",
    run: async(client, message, args) => {
  
const status = new db.table("AFKs");
let afk = await status.fetch(message.author.id);
    
let embed1 = new Discord.MessageEmbed()
.setColor([255, 182, 193])
.setDescription(`**${message.author.tag}** entrou em AFK.
Lembrando quando você falar no chat seu afk será automaticamente desativado!!
**Motivo:** \`${args.join(" ") ? args.join(" ") : "AFK"}\``)

status.set(message.author.id, args.join(" ") || `AFK`);
if (!afk) return message.channel.send(embed1);

else {

    status.delete(message.author.id);
  }
    
  message.channel.send(embed)
    }
}
