const Discord = require('discord.js');

module.exports = {
    name: "kiss",
    aliases: ["beijo", "beijar"],
    description: "Da um beijo em alguém",
    run: async(client, message, args) => {

  message.delete().catch(O_o => {});

var list = [
  'https://imgur.com/iclUiUN.gif',
  'https://imgur.com/lYQt9rx.gif',
  'https://imgur.com/w1TU5mR.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para beijar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Beijo')
        .setColor([255,182,193])
        .setDescription(`${message.author} acabou de dar um beijo em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Namoro?')
        .setAuthor(message.author.tag, avatar);
  message.channel.send(embed).then(msg => {
    msg.react('798743676497952798')
})
   const devolverFilter = (reaction, user) => reaction.emoji.name === 'app_heartspin3' && user.id === message.author.id;

    const devolver = msg.createReactionCollector(devolverFilter);

    devolver.on('collect', r2 => {
      const dev = new Discord.MessageEmbed()
        .setTitle('Beijo')
        .setColor('#FFB6C1')
        .setDescription(`${user} acabou de devolver o beijo de ${message.author}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Namoro?')
        .setAuthor(message.author.tag, avatar);
        msg.edit(dev)
    })
	}
}