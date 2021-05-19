module.exports = async (client) => {
  client.on("guildCreate", function(guild){
  const Discord = require('discord.js');

  var channel = client.channels.cache.get("837089771275681813");
  var owner = guild.owner;
  //Avisar no canal definido  
  const msg = new Discord.MessageEmbed()
    .setColor([255, 182, 193])

    .setTitle(`Fui adicionada em um novo servidor!`)

    .addField(`Nome do servidor:`, `\`${guild.name}\``, false)

    .addField(`ID:`, `\`${guild.id}\``, false)

    .addField(`Membros:`, `\`${guild.memberCount}\``, false)

    .addField(`Dono:`, `\`${owner}\``, false)

    .addField(`Total de servidores:`, `\`${client.guilds.cache.size}\``, false)

    .setTimestamp()

  channel.send(msg);
  //----
  });
}