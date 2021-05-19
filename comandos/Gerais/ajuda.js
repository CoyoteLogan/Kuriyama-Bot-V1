  const Discord = require('discord.js');

//exports.run = async (client, message, argumentos, arg_teste, chat) => {
  module.exports = {
    name: "ajuda",
    aliases: ["help", "comandos"],
    description: "Exibe os comandos do Bot",
    run: async(client, message, args) => {
  let avatar = message.author.avatarURL({ dynamic: true, format: "gif", size: 1024 });
  //message.delete().catch(O_o => { });
  const { guild } = message
  const icon = guild.iconURL()
  const comandos = new Discord.MessageEmbed()
    .setColor([255, 182, 193])
    .setAuthor(`Kuriyama Ajuda`, 'https://cdn.discordapp.com/avatars/798733541672222771/bc34797134427538e0506e3d14de6592.png?size=1024')
    .setThumbnail(avatar)
    /*.setTitle(`Kuriyama Ajuda`)*/
    .addField(`Links Importantes:`, `<a:Setap:808909487007989760> [Me adicione no seu servidor](https://discord.com/oauth2/authorize?client_id=798733541672222771&scope=bot&permissions=268840062)\n<a:Setap:808909487007989760> [Vote em mim no top.gg](https://top.gg/bot/798733541672222771)\n<a:Setap:808909487007989760> [Meu servidor de Suporte](https://discord.gg/Rs62r6kfjV)`)
    .addField(`Meus comandos:`, `Clique no emoji de acordo com suas funções. \n\n <a:number1:798745387909251082> <a:Setap:808909487007989760> **Comandos Gerais.**\n\n <a:number2:798745502895046707> <a:Setap:808909487007989760> **Comandos Staff.**\n\n <a:number3:798745579484086295> <a:Setap:808909487007989760> **Comandos de Diversão**.
`)
    .setImage("https://cdn.discordapp.com/attachments/814175739321516062/819864104142503946/Kuriyama.Mirai.full.1702952.jpg")
    .setTimestamp()
    .setFooter(`Autor do comando: ${message.author.username}`, message.author.displayAvatarURL({ Size: 32 }))

  message.inlineReply(comandos).then(msg => {
    msg.react('798745387909251082').then(r => {
      msg.react('798745502895046707').then(r => {
        msg.react('798745579484086295').then(r => {
            msg.react('798744524989005874').then(r => {
          })
        })
      })
    })

    const geralFilter = (reaction, user) => reaction.emoji.name === 'number1' && user.id === message.author.id;
    const staffFilter = (reaction, user) => reaction.emoji.name === 'number2' && user.id === message.author.id;
    const diverFilter = (reaction, user) => reaction.emoji.name === 'number3' && user.id === message.author.id;
    const voltarFilter = (reaction, user) => reaction.emoji.name === 'setaesq' && user.id === message.author.id

    const geral = msg.createReactionCollector(geralFilter);
    const staff = msg.createReactionCollector(staffFilter);
    const diver = msg.createReactionCollector(diverFilter);
    const voltar = msg.createReactionCollector(voltarFilter);


    geral.on('collect', r2 => {
      
      const embed = new Discord.MessageEmbed()
        .setTitle('COMANDOS - GERAIS')
        .setThumbnail(icon)
        .setDescription('Caso queira voltar clique em <:setaesq:798744524989005874>')
        .addFields(
          {
            name: '<a:Setap:808909487007989760> advs <@user>',
            value: 'Ve quantas advertencias o usuario tem'
          },
          {
            name: '<a:Setap:808909487007989760> afk Motivo',
            value: 'Voce entra no modo afk no Bot'
          },
          {
            name: '<a:Setap:808909487007989760> avatar <@user>',
            value: 'Exibe o avatar do usuario marcado'
          },
          {
            name: '<a:Setap:808909487007989760> bot',
            value: 'Exibe as informaçoes do Bot'
          },
          {
            name: '<a:Setap:808909487007989760> bug (bug)',
            value: 'Reporta um bug aos nossos desenvolvedores'
          },
          {
            name: '<a:Setap:808909487007989760> clima (cidade)',
            value: 'Mostra o clima da cidade'
          },
          {
            name: '<a:Setap:808909487007989760> discord',
            value: 'Exibe o Discord do Bot'
          },
          {
            name: '<a:Setap:808909487007989760> ping',
            value: 'Exibe o ping do Bot'
          },
          {
            name: '<a:Setap:808909487007989760> servericon',
            value: 'Exibe a foto do servidor'
          },
          {
            name: '<a:Setap:808909487007989760> serverinfo',
            value: 'Exiber as informaçoes do servidor'
          },
          {
            name: '<a:Setap:808909487007989760> sobremim',
            value: 'Fala um pouco sobre o Bot'
          },
          {
            name: '<a:Setap:808909487007989760> suges (Sugestao)',
            value: 'Envia uma sugestao para o servidor'
          },
          {
            name: '<a:Setap:808909487007989760> suporte Motivo',
            value: 'Manda um ticket de suporte para meus desenvolvedores'
          },
          {
            name: '<a:Setap:808909487007989760> uptime',
            value: 'Exibe o tempo que o Bot esta online'
          },
          {
            name: '<a:Setap:808909487007989760> userinfo <@user>',
            value: 'Exiber as informaçoes do usuario'
          }
        )
        .setImage("https://cdn.discordapp.com/attachments/814175739321516062/819864104142503946/Kuriyama.Mirai.full.1702952.jpg")
        .setTimestamp()
        .setFooter(`Autor do comando: ${message.author.username}`, message.author.displayAvatarURL({ Size: 32 }))
        .setColor([255, 182, 193])
      msg.edit(embed);
    })

    staff.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
        .setTitle('COMANDOS - STAFF')
        .setThumbnail(icon)
        .setDescription('Caso queira voltar clique em <:setaesq:798744524989005874>')
        .addFields(
          {
            name: '<a:Setap:808909487007989760> adv <@user> motivo',
            value: 'Da uma advertencia no usuario'
          },
          {
            name: '<a:Setap:808909487007989760> autorole <@cargo>',
            value: 'Define cargo para dar automaticamente quando o usuario entrar'
          },
          {
            name: '<a:Setap:808909487007989760> addemoji <emoji>',
            value: 'Adiciona um emoji no servidor'
          },
          {
            name: '<a:Setap:808909487007989760> addrole <@user> <@cargo>',
            value: 'Adiciona o cargo marcado no usuario mencionado'
          },
          {
            name: '<a:Setap:808909487007989760> anunciar',
            value: 'Faz um anuncio em embed'
          },
          {
            name: '<a:Setap:808909487007989760> ban <@user> motivo',
            value: 'Bane o usuario marcado'
          },
          {
            name: '<a:Setap:808909487007989760> canalsuges <#canal>',
            value: 'Seleciona um canal para ser enviado as sugestoes'
          },
          {
            name: '<a:Setap:808909487007989760> clear (0 a 80)',
            value: 'Limpa o numero de mensagens escolhida'
          },
          {
            name: '<a:Setap:808909487007989760> kick <@user> motivo',
            value: 'Expulsa o usuario marcado'
          },
          {
            name: '<a:Setap:808909487007989760> leavechannel on <#canal',
            value: 'Define um canal de volte-sempre'
          },
          {
            name: '<a:Setap:808909487007989760> leavemessage on mensagem',
            value: 'Define uma mensagem de volte-sempre'
          },
          {
            name: '<a:Setap:808909487007989760> lock',
            value: 'Bloqueia o canal'
          },
          {
            name: '<a:Setap:808909487007989760> modlog on canal',
            value: 'Define um canal de log'
          },
          {
            name: '<a:Setap:808909487007989760> mute <@user> motivo',
            value: 'Silencia o usuario marcado'
          },
          {
            name: '<a:Setap:808909487007989760> radv <@user> quantidade',
            value: 'Remove uma quantidade de advertencias do usuario'
          },
          {
            name: '<a:Setap:808909487007989760> removerole <@user> <@cargo>',
            value: 'Remove o cargo marcado do usuario mencionado'
          },
          {
            name: '<a:Setap:808909487007989760> say (Mensagem)',
            value: 'Faz o Bot mandar uma mensagem no Chat'
          },
          {
            name: '<a:Setap:808909487007989760> slowmode tempo',
            value: 'Altera o tempo que pode ser enviadas mensagens no canal'
          },
          {
            name: '<a:Setap:808909487007989760> sorteio tempo premio',
            value: 'Faz um sorteio no servidor'
          },
          {
            name: '<a:Setap:808909487007989760> unlock',
            value: 'Desbloqueia o canal'
          },
          {
            name: '<a:Setap:808909487007989760> unmute <@user>',
            value: 'Desmuta o usuario'
          },
          {
            name: '<a:Setap:808909487007989760> welcome on mensagem',
            value: 'Define uma mensagem de boas-vindas'
          },
          {
            name: '<a:Setap:808909487007989760> welcomechannel on canal',
            value: 'Define um canal para dar boas-vindas'
          }
        )
        .setImage("https://cdn.discordapp.com/attachments/814175739321516062/819864104142503946/Kuriyama.Mirai.full.1702952.jpg")
        .setColor([255, 182, 193])
        .setTimestamp()
        .setFooter(`Autor do comando: ${message.author.username}`, message.author.displayAvatarURL({ Size: 32 }))
      msg.edit(embed);
    })

    diver.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
        .setTitle('COMANDOS - DIVERSÃO')
        .setThumbnail(icon)
        .setDescription('Caso queira voltar clique em <:setaesq:798744524989005874>')
        .addFields(
          {
            name: '<a:Setap:808909487007989760> 8ball pergunta',
            value: 'O Bot ira responder sua pergunta'
          },
          {
            name: '<a:Setap:808909487007989760> bolsonaro mensagem',
            value: 'Faz o bolsonaro falar alguma coisa'
          },
          {
            name: '<a:Setap:808909487007989760> kiss <@user>',
            value: 'Da um beijo virtual no usuario'
          },
          {
            name: '<a:Setap:808909487007989760> notstonks <@user>',
            value: 'Manda um notstonks com a foto do usuario'
          },
          {
            name: '<a:Setap:808909487007989760> ship <@user> <@user>',
            value: 'Shipa 2 usuarios'
          },{
            name: '<a:Setap:808909487007989760> stonks <@user>',
            value: 'Manda um stonks com a foto do usuario'
          },
          {
            name: '<a:Setap:808909487007989760> tapa <@user>',
            value: 'Da um tapa virtual no usuario'
          },
          {
            name: '<a:Setap:808909487007989760> trump mensagem>',
            value: 'Faz o Trump twittar algo'
          }
        )
        .setImage("https://cdn.discordapp.com/attachments/814175739321516062/819864104142503946/Kuriyama.Mirai.full.1702952.jpg")
        .setTimestamp()
        .setFooter(`Autor do comando: ${message.author.username}`, message.author.displayAvatarURL({ Size: 32 }))
        .setColor([255, 182, 193])
      msg.edit(embed);
    })


    voltar.on('collect', r2 => {
      const embed = new Discord.MessageEmbed()
        .setColor([255, 182, 193])
        .setAuthor(`${message.guild.name}`, message.guild.iconURL({ dynamic: true }))
        .setThumbnail(avatar)
        .setTitle(`Kuriyama Ajuda`)
        .addField(`Links Importantes:`, `<a:Setap:808909487007989760> [Me adicione no seu servidor](https://discord.com/oauth2/authorize?client_id=798733541672222771&scope=bot&permissions=268840062)\n<a:Setap:808909487007989760> [Vote em mim no top.gg](https://top.gg/bot/798733541672222771)\n<a:Setap:808909487007989760> [Meu servidor de Suporte](https://discord.gg/Rs62r6kfjV)`)
        .addField(`Meus comandos:`, `Clique no emoji de acordo com suas funções. \n\n <a:number1:798745387909251082> <a:Setap:808909487007989760> **Comandos Gerais.**\n\n <a:number2:798745502895046707> <a:Setap:808909487007989760> **Comandos Staff.**\n\n <a:number3:798745579484086295> <a:Setap:808909487007989760> **Comandos de Diversão**.
      `)
        .setImage("https://cdn.discordapp.com/attachments/814175739321516062/819864104142503946/Kuriyama.Mirai.full.1702952.jpg")
        .setTimestamp()
        .setFooter(`Autor do comando: ${message.author.username}`, message.author.displayAvatarURL({ Size: 32 }))
      msg.edit(embed);
    })




  })
 }
}