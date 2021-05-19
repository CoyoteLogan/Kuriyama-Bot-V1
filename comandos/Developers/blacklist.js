const db = require('quick.db');

module.exports = {
    name: "blacklist",
    aliases: ["listanegra"],
    description: "Coloca alguem na blacklist",
    run: async(client, message) => {
        if (message.author.id !== "580416011472338957") return message.reply('❌ Você não tem permissão para usar esse comando.')
        
        /*let user = message.mentions.users.first()
        if(!user) return message.channel.send({embed: {
            description: "**❌ Não mencionou um usuario para adicionar na BlackList**",
            color: "#FFB6C1"
        }})*/
        const user = message.mentions.users.first()
        if(!user) return message.inlineReply('Não encontrei o usuario mencionado!');

        //if(!args[1]) return message.channel.send('Voce nao inseriu um motivo!');

        db.set(`blacklist_${user.id}`, true)
        console.log(`AVISO: ${user.username} foi adicionado na Blacklist por ${message.author.username}.`)

        message.inlineReply(`${user} foi adicionado na BlackList com sucesso!`)
    }
}