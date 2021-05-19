const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE", "USER", "REACTION"]});
const enmap = require('enmap');
const {prefix} = require('../config.json');
const db = require('quick.db');

const settings = new enmap({
    name: "settings",
    autoFetch: true,
    cloneLevel: "deep",
    fetchAll: true
});

client.on('ready', () => {
    console.log('Ticket ativado!')
});

client.on('message', async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(prefix) !== 0) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command == "ticketconfig") {
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Você não pode usar esse comando!!`).then(msg => msg.delete({ timeout: 5000 }))

        let channel = message.mentions.channels.first();
        if(!channel) return message.reply("Use: `k!ticketconfig #channel`");

        let sent = await channel.send(new Discord.MessageEmbed()
            .setTitle("Kuriyama Ticket")
            .setDescription("Reaja com :ticket: para abrir um ticket!")
            .setFooter("Kuriyama Ticket")
            .setColor([255, 182, 193])
        );

        sent.react('🎫');
        settings.set(`${message.guild.id}-ticket`, sent.id);

        message.channel.send(`Sistema de ticket ativado em ${channel}!`)
    }
    if(command == "close") {
        if(!message.channel.name.includes("ticket-")) return message.channel.send("Voce so pode utilizar esse comando em uma aba de ticket que foi aberta!!")
        message.channel.delete();
    }
});

client.on('messageReactionAdd', async (reaction, user) => {
    if(user.partial) await user.fetch();
    if(reaction.partial) await reaction.fetch();
    if(reaction.message.partial) await reaction.message.fetch();

    if(user.bot) return;

    let ticketid = await settings.get(`${reaction.message.guild.id}-ticket`);
    let delet = await settings.get(`${reaction.message.guild.id}-delet`);

    if(!ticketid) return;

    if(reaction.message.id == ticketid && reaction.emoji.name == '🎫') {
        reaction.users.remove(user);

        reaction.message.guild.channels.create(`ticket-${user.username}`, {
            permissionOverwrites: [
                {
                    id: user.id,
                    allow: ["SEND_MESSAGES", "VIEW_CHANNEL"]
                },
                {
                    id: reaction.message.guild.roles.everyone,
                    deny: ["VIEW_CHANNEL"]
                }
            ],
            type: 'text'
        }).then(async channel => {
            channel.send(`<@${user.id}>`, new Discord.MessageEmbed().setTitle("Bem-vindo ao ticket").setDescription("Algum Staff ira lhe atender em breve!\nUse k!close para encerrar o atendimento!!").setColor([255, 182, 193]))
});
}

client.login(process.env.TOKEN);