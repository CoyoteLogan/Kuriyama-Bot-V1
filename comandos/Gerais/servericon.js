const discord = require('discord.js')
 
module.exports = {
    name: "servericon",
    aliases: ["iconserver", "sicon"],
    description: "Exibe a imagem do servidor!",
    run: async(client, message, args) => {
 
        const ft = message.guild.iconURL({format:'jpeg', size:1024})
 
        const embed = new discord.MessageEmbed()
        .setDescription(`[Baixe a foto clicando aqui](${ft})`)
        .setImage(ft)
        .setColor([255,182,193])
        .setFooter(`Comando solicitado por ${message.author.tag}`)
        message.channel.send(embed)

    }
}