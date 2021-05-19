const Discord = require("discord.js");

module.exports = {
    name: "anunciar",
    aliases: ["anuncio", "fazeranuncio"],
    description: "Faz um anuncio no servidor",
    run: async(client, message, args) => {
  //message.delete().catch(O_o => { });

  const { guild } = message

  const icon = guild.iconURL()

  let avatar = message.author.displayAvatarURL({ format: 'png' });

  if (!message.member.hasPermission("ADMINISTRATOR")) return message.inlineReply(`Você não pode usar esse comando.`)//.then(msg => msg.delete({ timeout: 5000 }))


  const embed = new Discord.MessageEmbed()
    .setColor([255, 182, 193])
    .addFields(
      {
        name: `CHAT`,
        value: `${message.author}, Mencione o **chat** que você quer mandar o anúncio.`
      }
    )
    .setTimestamp()
    .setThumbnail(icon)
  message.inlineReply(embed).then(msg => {
    let cp = message.channel.createMessageCollector(x => x.author.id == message.author.id, { max: 1 })
      .on('collect', c => {
        canal = c.mentions.channels.first()
        if (!canal) {
          const embed = new Discord.MessageEmbed()
            .setColor([255, 182, 193])
            .setTimestamp()
            .addFields(
              {
                name: `ERRO`,
                value: `  ${message.author}, Você não **mencionou** um chat, tente outra vez.`
              }
            )
            .setThumbnail(icon)
          return message.channel.send(embed);

        } else {
          //message.delete().catch(O_o => { });
          const embed = new Discord.MessageEmbed()
            .setColor([255, 182, 193])
            .addFields(
              {
                name: `TITULO`,
                value: `${message.author}, \nFale pra mim, o **titulo**, para eu colocar no anúncio`
              }
            )
            .setTimestamp()
            .setThumbnail(icon)
          message.inlineReply(embed).then(msg2 => {
            let cl = message.channel.createMessageCollector(x => x.author.id == message.author.id, { max: 1 })
              .on('collect', c => {
                desc = c.content

                const embed = new Discord.MessageEmbed()
                  .setColor([255, 182, 193])
                  .addFields(
                    {
                      name: `DESCRIÇÃO`,
                      value: `${message.author}, \nQual vai ser a **descriçao** do seu anúncio?`
                    }
                  )
                  .setTimestamp()
                  .setThumbnail(icon)
                message.inlineReply(embed).then(msg3 => {
                  let ck = message.channel.createMessageCollector(x => x.author.id == message.author.id, { max: 1 })
                    .on('collect', c => {
                      title = c.content

                      const embed1 = new Discord.MessageEmbed()
                        .setColor([255, 182, 193])
                        .addFields(
                          {
                            name: `ENVIADO COM SUCESSO <:pp_check:798743340128010250> `,
                            value: `${message.author}, \nSeu **anúncio** foi enviado ao canal ${canal}.`
                          }
                        )
                        .setTimestamp()
                        .setThumbnail(icon)
                      message.inlineReply(embed1)

                      let embed = new Discord.MessageEmbed()

                        .setColor([255, 182, 193])
                        /*.setFooter(`${message.author.username}`, avatar)*/
                        .setTitle(desc)
                        /*.setThumbnail(icon)*/
                        .setTimestamp()
                        .setDescription(title)
                        .setFooter(`Anucio feito por ${message.author.tag}`)

                      canal.send(embed);



                      //Log do comando
                      let server = client.channels.cache.get("817650939225440286")
                      let log = new Discord.MessageEmbed()
                        .setTitle("Comando de anuncio utilizado")
                        .addField("Utilizado por: ", `${message.author.tag}`)
                        .addField("ID do usuario: ", `${message.author.id}`)
                        .addField("Servidor utilizado: ", `${message.guild.name}`)
                        .addField("ID do servidor: ", `${message.guild.id}`)
                        .addField("Titulo: ", `\`${desc}\``)
                        .addField("Descriçao: ", `\`${title}\``)
                        .setColor([255, 182, 193])
                      server.send(log)

                    })
                })
              })
          })
        }
      })
  })
  }
}