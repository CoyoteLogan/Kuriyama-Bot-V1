const Discord = require("discord.js");
const bot = new Discord.Client();
module.exports = {
    name: "conquista",
    aliases: ["mineconquista", "novaconquista"],
    description: "Adiquire uma conquista do Minecraft",
    run: async(client, message, args) => {
    try {
       const text = args.join(" ");
        if (text === null) return message.channel.send("Você precisa me falar uma conquista!");
            if (text.length > 25) return message.reply('O texto não pode passar de 25 letras!');
        const superagent = require('superagent')
        const { body } = await superagent
            .get('https://www.minecraftskinstealer.com/achievement/a.php')
            .query({
                i: 1,
                h: 'Nova Conquista!',
                t: text
            });
        message.channel.send({ files: [{ attachment: body, name: 'achievement.png' }] 
      });
    } catch (err) {
            console.log(err)
    }
	}
}