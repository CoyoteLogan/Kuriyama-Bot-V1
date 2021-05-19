module.exports = {
    name: "reload",
    aliases: ["rec", "reiniciar"],
    description: "Reiniciar um comando",
    run: async(client, message) => {
  if (!['580416011472338957'].includes(message.author.id))
    return message.reply(
      "Apenas meu criador pode usar esse comando! Desculpa! 💖"
    );
  if (!args || args.length < 1)
    return message.reply("⚠️ Escreva o comando que deseja dar reload!");

  const command = args[0];

  /*if (!client.commands.has(command)) {
    return message.reply("⚠️ Comando inexistente!");
  }*/

  delete require.cache[require.resolve(`./commands/${command}.js`)];

  client.commands.delete(command);
  const props = require(`./commands/${command}.js`);
  client.commands.set(command, props);
  message.reply(`✔️ O comando ${command} foi recarregado com sucesso!`);

    }
}