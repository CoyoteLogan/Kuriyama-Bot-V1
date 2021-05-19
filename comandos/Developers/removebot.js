const Discord = require("discord.js")
const db = require("quick.db")
const ownerID = '580416011472338957';

module.exports = {
    name: "removebot",
    aliases: ["remover", "sairservidor"],
    description: "Remove o Bot de um servidor!",
    run: async(client, message) => {

    console.log(`Comando de removerbot ${message.guild.name} ${message.guild.id} ${message.author.tag}`)

    let user = message.mentions.users.first() || message.author;
    if (message.author.id !== ownerID) return message.channel.send(new Discord.MessageEmbed()
        .setColor("0x36393e")
        .setTimestamp()
        .setDescription(":alerta: - Você não tem permissão para executar este comando.")).then(m => m.delete(5000))
    var error17 = new Discord.MessageEmbed().setColor("36393e")
        .setTimestamp()
        .setDescription(':alerta: - Por favor, digite um \`ID\` **válido**.')
        .setColor("#00BFFF")

    if (isNaN(args[0])) return message.channel.send(error17).then(msg => {
        msg.delete(9000)
    });

    scott.guilds.cache.get(args[0]).leave();
    const embed = new Discord.MessageEmbed()
        .setColor("#00BFFF")
        .setTimestamp()
        .setDescription(`:sim:
 - Bot foi **removido** do servidor: \`ID\` **[${args[0]}]**`)
    message.reply(embed);
	}
}