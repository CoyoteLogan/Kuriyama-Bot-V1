const db = require('quick.db')
const {MessageEmbed, discord} = require('discord.js')

module.exports = {
    name: "suges",
    aliases: ["sugestão", "sugestao", "sug"],
    description: "Faz uma sugestão para o servidor!",
    run: async(client, message, args) => {
        
        let avatar = message.author.avatarURL({ dynamic: true, format: "gif", size: 1024 });

        const content = args.join(" ");
        
        const { guild } = message
        
    	const icon = guild.iconURL()

        var channel = message.guild.channels.cache.get(db.fetch(`suggestchan_${message.guild.id}`))//Gets the channel
        if(channel==null){
            return message.channel.send(`Me desculpe, mas eu não encontrei um canal de sugestões para este servidor, peça para que algum responsavel configure ou caso você possua a permissão utilize o comando **k!config**!`)
        }
        const webhooks = await channel.fetchWebhooks()
        
        var webhook = webhooks.first();
         
        var embed = new MessageEmbed()
            
            .setTitle(`Nova Sugestão!`)
        	.setAuthor(`${message.author.tag}`, icon)
            .setThumbnail(avatar)
            .addField(`Sugestão:`, `${content}`, false)
            .setColor([255, 182, 193])
            .setFooter(`ID: ${message.author.id}.`)
            channel.send(embed)
           
        
        /*let m = await webhook.send({
            username: message.author.username,
            avatarURL: message.author.displayAvatarURL({dynamic: true}),
            embeds: [embed]
        })*/
        channel.messages.fetch(embed.id).then(msg => {
        msg.react('798743375774744596').then(r => {
        msg.react('808927275437129769').then(r => {
            })
          })  
        })
        message.channel.send(`✅ | Sua sugestão foi enviada para o canal <#${channel.id}>.`)
        message.delete()
        
        .catch((err)=>{
            console.log(err)
        })


    }
}