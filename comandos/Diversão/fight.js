const Discord = require('discord.js');

module.exports = {
    name: "fight",
    aliases: ["luta", "briga"],
    description: "Inicia uma briga com alguém",
    run: async(client, message) => {

var list = [
  'https://imgur.com/QqVqK3i.gif',
  'https://imgur.com/aJyo5XJ.gif',
  'https://imgur.com/O0j3wWi.gif',
  'https://imgur.com/VwYKclu.gif',
  'https://imgur.com/1Nu5pzx.gif',
  'https://imgur.com/5nKPZK1.gif',
  'https://imgur.com/UPkfu1Y.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para lutar!');
}
/*
message.channel.send(`${message.author.username} **acaba começar um luta com** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('fight🥊')
        .setColor([255,182,193])
        .setDescription(`${message.author} acaba de começar uma luta com ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Qem ganha sera?')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
    }
}