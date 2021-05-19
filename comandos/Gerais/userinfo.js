const Discord = require('discord.js');
module.exports = {
    name: "userinfo",
    aliases: ["user", "infouser"],
    description: "Exibe as informações de um usuario",
    run: async(client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    const moment = require('moment');

    
    moment.locale('pt-BR');
    function duration(ms) {
        const sec = Math.floor((ms / 1000) % 60).toString();
        const min = Math.floor((ms / (1000 * 60)) % 60).toString();
        const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString();
        const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString();
        return `${days.padStart(1, '0')} dias, ${hrs.padStart(
            2,
            '0'
        )} horas, ${min.padStart(2, '0')} min, ${sec.padStart(2, '0')} sec`;
    }
    if (user.presence.status == 'dnd') {
        user.presence.status = ':ocupado:  Não pertube';
    } else if (user.presence.status === 'idle') {
        user.presence.status = ':ausente:  Ausente';
    } else if ((user.presence.status = 'ofline')) {
        user.presence.status = ':offline:  Ofline';
    } else if (user.presence.status === 'online') {
        user.presence.status = ':online: Online';
    }
    const userinfo = new Discord.MessageEmbed()
        .setTitle(`*Informações do Usuario*`)
        .addField(
            '**Nome:**',
            `**${user.username}**`,
            true
        )
        .addField('**🖥️ ID:**', `**${user.id}**`, true)
        .addField('**📌 Tag:**', `**${user.tag}**`, true)
        .addField(
            '**📆 Conta criada em**',
            `**${moment(user.createdAt).format('DD/MM/YYYY')}**`,
            true
        )
        .addField('**📌 Cargos:**', user.guild.roles.cache.map(a => a.name).join(", "), false)
        .setThumbnail(user.displayAvatarURL())
        .setColor([255, 182, 193])
        .setFooter(message.guild.name, message.guild.iconURL());
    message.channel.send(userinfo);
    }
};