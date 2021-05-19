const Discord = require("discord.js")

module.exports = {
    name: "suporte",
    aliases: ["solicitar", "sup"],
    description: "Pede suporte para a equipe do Bot",
    run: async(client, message, args) => {
        
 message.delete().catch(O_o => {});
let canal = client.channels.cache.get("817146230278455346")
let motivo = args.join(' ');
if(!motivo) {
return message.channel.send({embed: {
description: "Descreva o que voce precisa!",
color: "#FFB6C1"
}
});
}
let embed = new Discord.MessageEmbed()
.setTitle("Alguem pediu um suporte")
.addField("Servidor que solicitou:", `${message.guild.name}`)
.addField("ID do servidor:", `${message.guild.id}`)
.addField("Solicitado por:", `${message.author.tag}`)
.addField("Mençao:", `${message.author}`)
.addField("ID de quem solicitou:", `${message.author.id}`)
.addField("Motivo:", `\`${motivo}\``)
.setColor([255,182,193])
canal.send(embed)

message.reply({embed: {
description: `🎟️ ${message.author}, seu pedido de suporte foi computado e enviado para minha equipe, muito obrigada!`,
color: "#FFB6C1"
}
});
	}
}