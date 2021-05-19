const db = require('quick.db');

module.exports = {
    name: "Revome um usuario na blacklist",
    description: "Lebera alguem para utilizar o Bot.",

    async run (client, message, args) {
        if (message.author.id !== "580416011472338957") return message.reply('❌ Você não tem permissão para usar esse comando.')

        let user = message.mentions.users.first()
        if(!user) return message.inlineReply('Não encontrei o usuario mencionado!');

        db.delete(`blacklist_${user.id}`, true)
        console.log(`AVISO: ${user.username} foi removido da Blacklist por ${message.author.username}.`)

        message.inlineReply(`${user} foi removido da BlackList com sucesso!`)
    }
}