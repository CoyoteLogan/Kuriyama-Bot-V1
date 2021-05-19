const Discord = require("discord.js");
const { parse } = require("twemoji-parser");
const { MessageEmbed } = require("discord.js");
const Color = `#330066`;

module.exports = {
    name: "addemoji",
    aliases: ["adicionaremoji"],
    description: "Adiciona um emoji no servidor!",
    run: async(client, message, args) => {

    if (!message.member.hasPermission(`MANAGE_EMOJIS`)) {
      return message.inlineReply(`Voce nao possui permissao de gerenciar emojis`)
    }

    const emoji = args[0];
    if (!emoji) return message.inlineReply(`Voce precisa falar o emoji que deseja adicionar!`);

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
        }`;
      const name = args.slice(1).join(" ");
      message.guild.emojis.create(
        `${Link}`,
        `${name || `${customemoji.name}`}`
      );
      const Added = new MessageEmbed()
        .setTitle(`Emoji adicionado`)
        .setColor(`${Color}`)
        .setDescription(
          `Emoji adicionado com sucesso! | Emoji: ${customemoji}`
        );
      return message.inlineReply(Added);
    } else {
      let CheckEmoji = parse(emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        return message.inlineReply(`Por favor, me envie um emoji valido!`);
      message.inlineReply(
        `Você pode usar o emoji normal sem adicionar no servidor!`
      );
    }
  }
};