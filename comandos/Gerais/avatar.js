const Discord = require("discord.js");

module.exports = {
    name: "avatar",
    aliases: ["icon", "usericon"],
    description: "Exibe o avatar de um usuario!",
    run: async(client, message, args) => {
  //message.delete().catch(O_o => { });

  let user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author;

  let avatar = user.avatarURL({ dynamic: true, format: "png", size: 1024 });

  let embed = new Discord.MessageEmbed()
    .setColor([255, 182, 193])
    .setTitle(`Avatar de ${user.username}`)
    .setImage(avatar)
    .setFooter(`• Autor: ${message.author.tag}`, message.author.displayAvatarURL({ format: "png" }));
  await message.inlineReply(embed);
    }
};