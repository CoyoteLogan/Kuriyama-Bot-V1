module.exports = (client) => {
    const db = require('quick.db');
    client.on("message", msg => {
      let prefix= db.get(`prefix_${msg.guild.id}`) || "k!"
      if (msg.content === `<@${client.user.id}>`)
        msg.inlineReply(`Olá ${msg.author}, meu nome é Kuriyama e meu prefixo nesse servidor é \`${prefix}\`, use **${prefix}ajuda** para ver meus comandos!`)
    })

    client.on("message", msg => {
      let prefix = db.get(`prefix_${msg.guild.id}`) || "k!"
      if (msg.content === `<@!${client.user.id}>`)
        msg.inlineReply(`Olá ${msg.author}, meu nome é Kuriyama e meu prefixo nesse servidor é \`${prefix}\`, use **${prefix}ajuda** para ver meus comandos!`)
    });
}