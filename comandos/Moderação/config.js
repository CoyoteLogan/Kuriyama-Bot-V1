const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: "config",
    aliases: ["configurar", "configuraçao", "configuração", "menuconfig"],
    description: "Exibe o menu de configuração do Bot",
    run: async(client, message, args) => {
    const prefix = db.get(`prefix_${message.guild.id}`) || "k!"
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.inlineReply(`Você não pode usar esse comando.`)

    let avatar = message.author.avatarURL({ dynamic: true, format: "gif", size: 1024 });
    const { guild } = message
    const icon = guild.iconURL()
    const pag1 = new Discord.MessageEmbed()
      .setColor([255, 182, 193])
      .setAuthor(`${message.guild.name} Config`, 'https://cdn.discordapp.com/attachments/834585308971794433/839692503937974332/settings.png')
      .setThumbnail(avatar)
      .setDescription(`**Página 1**\n> Para poder configurar você devera clicar no emoji da determinada categoria!\n
      > Welcome
      <a:number1:798745387909251082> <a:Setap:808909487007989760> Canal
      <a:number2:798745502895046707> <a:Setap:808909487007989760> Mensagem\n
      > Saida
      <a:number3:798745579484086295> <a:Setap:808909487007989760> Canal
      <a:number4:798745654591619082> <a:Setap:808909487007989760> Mensagem\n
      > Gerenciamento
      <a:number5:798745700695408690> <a:Setap:808909487007989760> Log
      <a:number6:798745732966383616> <a:Setap:808909487007989760> Punições
      <a:number7:798745756709945414> <a:Setap:808909487007989760> Canal de Sugestão
	  <a:number8:798745779745456148> <a:Setap:808909487007989760> AutoRole\n
      > Reaja em <:setadir:798744455737376789> para ver a próxima página!

      `)
      .setTimestamp()
      .setFooter(`Autor do comando: ${message.author.tag}`, message.author.displayAvatarURL({ Size: 32 }))

    message.inlineReply(pag1).then(msg => {
      msg.react('798745387909251082').then(r => {
        msg.react('798745502895046707').then(r => {
          msg.react('798745579484086295').then(r => {
              msg.react('798745654591619082').then(r => {
                  msg.react('798745700695408690').then(r => {
                    msg.react('798745732966383616').then(r => {
                      msg.react('798745756709945414').then(r => {
                        msg.react('798745779745456148').then(r => {
                          msg.react('798744455737376789').then(r => {
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        const WelCanalFilter = (reaction, user) => reaction.emoji.name === 'number1' && user.id === message.author.id;//ok
        const WelMensagemFilter = (reaction, user) => reaction.emoji.name === 'number2' && user.id === message.author.id;//ok
        const VolCanalFilter = (reaction, user) => reaction.emoji.name === 'number3' && user.id === message.author.id;//ok
        const VolMensagemFilter = (reaction, user) => reaction.emoji.name === 'number4' && user.id === message.author.id;//ok
        const LogFilter = (reaction, user) => reaction.emoji.name === 'number5' && user.id === message.author.id;//ok
        const PuniçõesFilter = (reaction, user) => reaction.emoji.name === 'number6' && user.id === message.author.id;//ok
        const SugesFilter = (reaction, user) => reaction.emoji.name === 'number7' && user.id === message.author.id;//
        const AutoRoleFilter = (reaction, user) => reaction.emoji.name === 'number8' && user.id === message.author.id//ok
        const ProxFilter = (reaction, user) => reaction.emoji.name === 'setadir' && user.id === message.author.id//ok

        const WelCanal = msg.createReactionCollector(WelCanalFilter);//ok
        const WelMensagem = msg.createReactionCollector(WelMensagemFilter);//ok
        const VolCanal = msg.createReactionCollector(VolCanalFilter);//ok
        const VolMensagem = msg.createReactionCollector(VolMensagemFilter);//ok
        const Log = msg.createReactionCollector(LogFilter);//ok
        const Punições = msg.createReactionCollector(PuniçõesFilter);//ok
        const Suges = msg.createReactionCollector(SugesFilter);//ok
        const AutoRole = msg.createReactionCollector(AutoRoleFilter);//ok
        const Prox = msg.createReactionCollector(ProxFilter);//ok

       
          //Canal de Boas Vindas
          WelCanal.on("collect", (reaction, user) => {
          switch (reaction.emoji.name) {
          case "number1":
          message.channel.send({embed: {
              description: 'Qual será o chat que eu irei enviar Boas-Vindas?',
              color: "#FFB6C1"
          }}).then(msg => {
          message.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
          .on("collect", message => {
          let channel = message.mentions.channels.first()
          if(!channel) return message.channel.send("**Você não mencionou um chat de Boas-Vindas, tente novamente!**")
          db.set(`cWel_${message.guild.id}`, channel.id)
          let CanalBoasSetado = new Discord.MessageEmbed()
          .setColor([255, 182, 193])
          .setAuthor(`${message.guild.name} Config`, 'https://cdn.discordapp.com/attachments/834585308971794433/839692503937974332/settings.png')
          .setThumbnail(avatar)
          .setDescription(`<a:app_verify:798743375774744596> **Novo canal de Boas vindas setado em ${channel}**`)
          .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL())
          message.channel.send(CanalBoasSetado) 
          })
          })
          break;
          }
          })
        
          //Mensagem de Boas Vindas
          WelMensagem.on("collect", (reaction, user) => {
          switch (reaction.emoji.name) {
          case "number2":
         message.channel.send({embed: {
              description: 'Qual será a sua Mensagem de Boas-Vindas?\n\nEstes as configurações da mensagem!\n*{member:mention}* - Menciona o usuario que entrar.\n*{member:username}* - Fala o nome do usuario 				que entrou\n*{member:count}* - Fala quantos membros o servidor tem!',
              color: "#FFB6C1"
          }}).then(msg => {
          message.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
          .on("collect", message => {
          msgwelcome = message.content
          db.set(`mWel_${message.guild.id}`, msgwelcome)
              
          let MensagemBoasSetado = new Discord.MessageEmbed()
          .setColor([255, 182, 193])
          .setAuthor(`${message.guild.name} Config`, 'https://cdn.discordapp.com/attachments/834585308971794433/839692503937974332/settings.png')
          .setThumbnail(avatar)
          .setDescription(`<a:app_verify:798743375774744596> **Nova mensagem setada com sucesso!**\nNova mensagem: ${msgwelcome}`)
          .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL())
          message.channel.send(MensagemBoasSetado)
          })
          })
          break;
          }
          })


        //Canal de Saida
        VolCanal.on("collect", (reaction, user) => {
        switch (reaction.emoji.name) {
        case "number3":
        message.channel.send({embed: {
            description: 'Qual será o chat que eu irei enviar Saida?',
            color: "#FFB6C1"
        }}).then(msg => {
        message.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
        .on("collect", message => {
        let channel = message.mentions.channels.first()
        if(!channel) return message.channel.send("**Você não mencionou um chat de Saida, tente novamente!**")
        db.set(`cLev_${message.guild.id}`, channel.id)
        let CanalSaidaSetado = new Discord.MessageEmbed()
        .setColor([255, 182, 193])
        .setAuthor(`${message.guild.name} Config`, 'https://cdn.discordapp.com/attachments/834585308971794433/839692503937974332/settings.png')
        .setThumbnail(avatar)
        .setDescription(`<a:app_verify:798743375774744596> **Novo canal de Saida setado em ${channel}**`)
        .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL())
        message.channel.send(CanalSaidaSetado)
        })
        })
        break;
        }
        })  

            //Mensagem de Saida
            VolMensagem.on("collect", (reaction, user) => {
            switch (reaction.emoji.name) {
            case "number4":
           message.channel.send({embed: {
                description: 'Qual será a sua Mensagem de Saida?\n\nEstes as configurações da mensagem!\n*{member:mention}* - Menciona o usuario que entrar.\n*{member:username}* - Fala o nome do usuario 				que entrou\n*{member:count}* - Fala quantos membros o servidor tem!',
                color: "#FFB6C1"
            }}).then(msg => {
            message.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
            .on("collect", message => {
            msgwelcome = message.content
            db.set(`mLev_${message.guild.id}`, msgwelcome)
                
            let MensagemSaidaSetado = new Discord.MessageEmbed()
            .setColor([255, 182, 193])
            .setAuthor(`${message.guild.name} Config`, 'https://cdn.discordapp.com/attachments/834585308971794433/839692503937974332/settings.png')
            .setThumbnail(avatar)
            .setDescription(`<a:app_verify:798743375774744596> **Nova mensagem de Saida setada com sucesso!**\nNova mensagem: ${msgwelcome}`)
            .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL())
            message.channel.send(MensagemSaidaSetado)
            })
            })
            break;
            }
            })

           //Log
          Log.on("collect", (reaction, user) => {
          switch (reaction.emoji.name) {
          case "number5":
          message.channel.send({embed: {
              description: 'Qual será o chat que eu irei enviar as logs?',
              color: "#FFB6C1"
          }}).then(msg => {
          message.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
          .on("collect", message => {
          let channel = message.mentions.channels.first()
          if(!channel) return message.channel.send("**Você não mencionou um chat de logs, tente novamente!**")
          db.set(`Log_${message.guild.id}`, channel.id)
          let LogSetado = new Discord.MessageEmbed()
          .setColor([255, 182, 193])
          .setAuthor(`${message.guild.name} Config`, 'https://cdn.discordapp.com/attachments/834585308971794433/839692503937974332/settings.png')
          .setThumbnail(avatar)
          .setDescription(`<a:app_verify:798743375774744596> **Novo canal de logs setado em ${channel}**`)
          .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL())
          message.channel.send(LogSetado)
          })
          })
          break;
          }
          })


          //Punições
          Punições.on("collect", (reaction, user) => {
          switch (reaction.emoji.name) {
          case "number6":
          message.channel.send({embed: {
              description: 'Qual chat será enviado a Punições?',
              color: "#FFB6C1"
          }}).then(msg => {
          message.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
          .on("collect", message => {
          let channel = message.mentions.channels.first()
          if(!channel) return message.channel.send("**Você não mencionou um chat!**")
          db.set(`cMod_${message.guild.id}`, channel.id);
          let PuniçõesSetado = new Discord.MessageEmbed()
          .setColor([255, 182, 193])
          .setAuthor(`${message.guild.name} Config`, 'https://cdn.discordapp.com/attachments/834585308971794433/839692503937974332/settings.png')
          .setThumbnail(avatar)
          .setDescription(`<a:app_verify:798743375774744596> **Novo canal para Punições setado em ${channel}**`)
          .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL())
          message.channel.send(PuniçõesSetado)
          })
          })
          break;
          }
          })

            
          //Sugestão
          Suges.on("collect", (reaction, user) => {
          switch (reaction.emoji.name) {
          case "number7":
          message.channel.send({embed: {
              description: 'Qual chat será enviado as sugestões?',
              color: "#FFB6C1"
          }}).then(msg => {
          message.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
          .on("collect", message => {
          let channel = message.mentions.channels.first()
          if(!channel) return message.channel.send("**Você não mencionou um chat!**")
          db.set(`suggestchan_${message.guild.id}`, channel.id)
          let SugestaoSetado = new Discord.MessageEmbed()
          .setColor([255, 182, 193])
          .setAuthor(`${message.guild.name} Config`, 'https://cdn.discordapp.com/attachments/834585308971794433/839692503937974332/settings.png')
          .setThumbnail(avatar)
          .setDescription(`<a:app_verify:798743375774744596> **Novo chat para Sugestão setado em ${channel}**`)
          .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL())
          message.channel.send(SugestaoSetado)
          })
          })
          break;
          }
          })


          //AutoRole
          AutoRole.on("collect", (reaction, user) => {
          switch (reaction.emoji.name) {
          case "number8":
          message.channel.send({embed: {
              description: 'Qual cargo sera dando quando alguem entrar no servidor?',
              color: "#FFB6C1"
          }}).then(msg => {
          message.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
          .on("collect", message => {
          let role =
          message.mentions.roles.first() 
  
          if (!role)
          return message.inlineReply({embed: {
            description: "**❌ Mencione um Cargo, tente novamente!**",
            color: "#FFB6C1"
          }});
          db.set(`autorole_${message.guild.id}`, role.id);
                
          let AutoRoleSetado = new Discord.MessageEmbed()
          .setColor([255, 182, 193])
          .setAuthor(`${message.guild.name} Config`, 'https://cdn.discordapp.com/attachments/834585308971794433/839692503937974332/settings.png')
          .setThumbnail(avatar)
          .setDescription(`<a:app_verify:798743375774744596> **Sistema de Autorole ativado com sucesso no cargo ${role}**`)
          .setFooter(`Comando solicitado por ${message.author.tag}`, message.author.displayAvatarURL())
          message.channel.send(AutoRoleSetado)
          })
          })
          break;
          }
          })
        
        
          Prox.on("collect", (reaction, user) => {
          const pag2 = new Discord.MessageEmbed()
          .setColor([255, 182, 193])
          .setAuthor(`${message.guild.name} Config`, 'https://cdn.discordapp.com/attachments/834585308971794433/839692503937974332/settings.png')
          .setThumbnail(avatar)
          .setDescription(`**Página 2**\n> Para poder configurar você devera clicar no emoji da determinada categoria!\n
          > Defesa
          <a:number1:798745387909251082> <a:Setap:808909487007989760> Anti Invite
          <a:number2:798745502895046707> <a:Setap:808909487007989760> Anti Bot\n

          `)
          .setTimestamp()
          .setFooter(`Autor do comando: ${message.author.tag}`, message.author.displayAvatarURL({ Size: 32 }))

        message.channel.send(pag2).then(msg => {
          msg.react('798745387909251082').then(r => {
            msg.react('798745502895046707').then(r => {
                              })
                            })
            const AntiInviteFilter = (reaction, user) => reaction.emoji.name === 'number1' && user.id === message.author.id;//ok
            const AntiBotFilter = (reaction, user) => reaction.emoji.name === 'number2' && user.id === message.author.id;//ok

            const AntiInvite = msg.createReactionCollector(AntiInviteFilter);//ok
            const AntiBot = msg.createReactionCollector(AntiBotFilter);//ok
            
            ///Anti Invite
            AntiInvite.on("collect", (reaction, user) => {
              switch (reaction.emoji.name) {
              case "number1":
             message.channel.send({embed: {
                   description: '<a:app_verify:798743375774744596> **Sistema de Anti-Invite ativado com sucesso!**',
                   color: "#FFB6C1"
             }}).then(msg => {
               message.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
               .on("collect", message => {
               db.set(`AntiInv_${message.guild.id}`, true)
               })
               })
               break;
               }
               })

			//Anti Bot
            AntiBot.on("collect", (reaction, user) => {
              switch (reaction.emoji.name) {
              case "number2":
             message.channel.send({embed: {
                   description: '<a:app_verify:798743375774744596> **Sistema de Anti Bot ativado com sucesso!**',
                   color: "#FFB6C1"
             }}).then(msg => {
               message.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
               .on("collect", message => {
               db.set(`AntiBot_${message.guild.id}`)
               })
               })
               break;
               }
               })
          
      })
     })
    })
  }
}

/*//Anti Invite
AntiInvite.on("collect", (reaction, user) => {
  switch (reaction.emoji.name) {
  case "number6":
 message.channel.send({embed: {
       description: '<a:app_verify:798743375774744596> **Sistema de Anti-Invite ativado com sucesso!**',
       color: "#FFB6C1"
 }}).then(msg => {
   message.channel.createMessageCollector(m => m.author.id === message.author.id, {max: 1})
   .on("collect", message => {
   db.set(`AntiInv_${message.guild.id}`, true)
   })
   })
   break;
   }
   })*/