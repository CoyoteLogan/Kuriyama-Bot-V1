const db = require('quick.db');

module.exports = {
    name: "prefix",
    aliases: ["setprefix", "prefixset", "serverprefix"],
    description: "Seta o prefixo do Bot no servidor!",
    run: async(client, message, args) => {
        
        if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('Você não tem permissão para usar este comando!.');

        if(!args[0]) return message.channel.send('Por favor ensira o novo prefixo.');

        if(args[1]) return message.channel.send('O prefixo não pode ter dois espaços.');

        db.set(`prefix_${message.guild.id}`, args[0])

        message.channel.send(`Novo prefixo setado com sucesso : **${args[0]}**`)
    }
}