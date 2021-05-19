const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "servers",
    aliases: ["server", "verservers", "servidores"],
    description: "Ve os servidores que o Bot esta",
    run: async(client, message) => {
        
    if (message.author.id !== "580416011472338957") return message.reply('Voce nao e meu desenvolvedor -___-')
    message.delete().catch(O_o => { });
    const guilds = client.guilds.cache;
    let avatar = message.author.displayAvatarURL({ format: 'png' });

    const embed = new MessageEmbed()
      .setTitle(`Servidores que estou`)
      .setColor([255, 182, 193])

    let description = "";
    guilds.forEach((guild) => {
      description += `**NOME ${guild.name} ID ${guild.id}** --`;
    });

    embed.setDescription(description);

    message.channel.send(embed);
  },
};