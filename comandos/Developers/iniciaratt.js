const Discord = require('discord.js');
module.exports = {
    name: "iniciaratt",
    aliases: ["att", "atualizar", "começaratt"],
    description: "Inicia a contagem para atualizar o Bot!",
    run: async(client, message) => {
    const channel = client.channels.cache.get("811292810752950360");
    //if(message.author.id !== "580416011472338957")  return message.reply('Desculpe, mas somente meus Desenvolvedores podem utilizar esse comando!!')
    if(!config.owners) return message.channel.send("❌ Você não tem permissão para usar esse comando.");
    
    const motivo = args.join(" ")
    if(!motivo) {
        return message.inlineReply({embed: {
        description: "**❌ Não especificou um motivo**",
        color: "#FFB6C1"
        }})
    }

    message.inlineReply('Temporizador para a atualização iniciado e em 1 hora irei atualizar!!')

    const msg = new Discord.MessageEmbed()
    .setColor([255, 182, 193])

    .setTitle(`<a:w_exclama:798745074657132584>**AVISO**<a:w_exclama:798745074657132584>`)

    .setDescription(`Olá, meu Desenvolvedor ${message.author} mandou avisa-los que em **1 hora** terei
    atualização, pode demorar um minuto ou pode demorar mais, avisarei quando retornar`)

    .addField(`Motivo:`, `${motivo}`, true)

    .setFooter(`Espero que não de nenhum erro`)

    .setTimestamp()

    channel.send("@everyone", msg);
    /*heroku logs channel.send('@everyone').then(menção => {
        menção.delete(5000)
    });*/

    const pv = new Discord.MessageEmbed()
    .setColor([255, 182, 193])

    .setTitle(`<a:w_exclama:798745074657132584>**AVISO**<a:w_exclama:798745074657132584>`)

    .setDescription(`Olá ${message.author} sua solicitação para desligar foi concluida
    e eu fui desligada com sucesso!`)

    .addField(`Motivo da atualização:`, `${motivo}`, true)

    .setFooter(`Espero que não demore muito <3`)

    .setTimestamp()

    message.author.send(pv);
    client.delete(5000);
    }
}