const Discord = require('discord.js');

module.exports = {
    name: "tapa",
    aliases: ["porrada", "soco"],
    description: "Da um tapa em um usuario",
    run: async(client, message, args) => {

  message.delete().catch(O_o => {});

var list = [
  'http://1.bp.blogspot.com/-ZDIBdFJ7YPc/UWNMn5368pI/AAAAAAAAA0E/7V9WmGbJoiU/s1600/dando+tapa+na+cara.gif',
  'http://1.bp.blogspot.com/-aZgiDUWgeBc/UF5ZhjIh_mI/AAAAAAAAAgk/qTQ5FIBYPmk/s1600/tapa+na+cara.gif',
  'https://profanos.com/wp-content/uploads/2012/06/tapa-na-cara.gif',
  'http://3.bp.blogspot.com/-_2O0LR14kpo/Ut6EunUxJ8I/AAAAAAAABu4/Cd60-RSRTEw/s1600/%23susan+dando+um+tapa+em+Justin.gif',
  'https://media1.tenor.com/images/612e257ab87f30568a9449998d978a22/tenor.gif?itemid=16057834.gif',
  'https://media1.tenor.com/images/74db8b0b64e8d539aebebfbb2094ae84/tenor.gif?itemid=15144612.gif',
  'https://media.tenor.com/images/7706cab57a467d057e1c9ac8ff62aac2/tenor.gif',
  'https://media1.tenor.com/images/d14969a21a96ec46f61770c50fccf24f/tenor.gif?itemid=5509136.gif',
  'https://media1.tenor.com/images/4a6b15b8d111255c77da57c735c79b44/tenor.gif?itemid=10937039.gif',
  'https://media1.tenor.com/images/7437caf9fb0bea289a5bb163b90163c7/tenor.gif?itemid=13595529.gif',
  'https://media.tenor.com/images/2b70de5670e82725449e68d156c271bf/tenor.gif',
  'https://media.tenor.com/images/3ee6c279dd97a1e97409a54dd90a1972/tenor.gif',
  'https://media.tenor.com/images/e14256c1ee92459d00c28e0400cac8ec/tenor.gif',
  'https://media.tenor.com/images/37da66c7611cdbecabba722cbd7bc564/tenor.gif',
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para dar um tapa!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Tapa')
        .setColor([255,182,193])
        .setDescription(`${message.author} acabou de dar um tapa em ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Briga?')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
    }
}