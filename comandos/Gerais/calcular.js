const Discord = require("discord.js");
const math = require("mathjs");

module.exports = {
    name: "calcular",
    aliases: ["cal", "calculator", "matematica"],
    description: "Faz um calculo matematico!",
    run: async(client, message, args) => {

    message.delete()

    if (!args[0]) return message.reply(`Porfavor me de uma equação`)

    let rsp;
    try {
      resp = math.evaluate(args.join(" ").replace(`x`, `*`))
    } catch (e) {
      return message.reply('Porfavor me de uma equação **VÁLIDA**')
    }
    const embed = new Discord.MessageEmbed()
      .setColor([255, 182, 193])
      .setTitle(`CALCULADORA`)
      .addField(`Equação`, `\`\`\`css\n${args.join(' ')}\`\`\``)
      .addField(`Resposta`, `\`\`\`css\n${resp}\`\`\``)
    message.channel.send(embed)

  }
}