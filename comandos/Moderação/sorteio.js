const { MessageEmbed } = require("discord.js");
const ms = require("ms");

module.exports = {
    name: "sorteio",
    aliases: ["giveaway", "sortear", "criarsorteio"],
    description: "Cria um sorteio no servidor!",
    run: async(client, message, args) => {
 
 message.delete().catch(() => null);
 
 if (!args[0]) return message.channel.send(`Você não específicou tempo!`);
 
 if (!args[0].endsWith("d") && !args[0].endsWith("h") && !args[0].endsWith("m")) return message.channel.send(
 `Você não usou a forma correta para a hora, Use Apenas Letras Minusculas Exemplo: 1s, 1m, 1h, 1d`
 );
 
 if (isNaN(args[0][0])) return message.channel.send(`Isso não é um número!`);
 
 let channel = message.mentions.channels.first();
 
 if (!channel) return message.channel.send(
 `Eu não consegui encontrar aquele canal do server!`
 );
 
 let prize = args.slice(2).join(" ");
 
 if (!prize) return message.channel.send(`Nenhum prêmio especificado!`);
 
 message.channel.send(`*Sorteio criado em ${channel}*`);
 
 let Embed = new MessageEmbed()
 .setTitle(`Novo sorteio!`)
 .setDescription(
 `O Usuário ${message.author} Esta Sorteando: **${prize}**
 Clique Em 🎉 Para Participar`
 )
 .setTimestamp(Date.now() + ms(args[0]))
 .setColor("#00FFFF");
 
 let m = await channel.send(Embed);
 
 m.react("🎉");
 
 setTimeout(() => {
 if (m.reactions.cache.get("🎉").count <= 1) {
 message.channel.send(`Reações: ${m.reactions.cache.get("🎉").count}`);
 return message.channel.send(`Poucas Pessoas Participaram Do Sorteio, Então Eu Posso Ficar Com O Premio?`);
 }

 let ganhador = m.reactions.cache.get("🎉").users.cache.filter((u) => !u.bot).random();
 channel.send(`Parabens ${ganhador} Por Ganhar O Sorteio De **${prize}**`);
 
 }, ms(args[0]));
 },
};