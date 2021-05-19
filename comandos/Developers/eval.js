const Discord = require("discord.js");
const util = require("util");

module.exports = {
    name: "eval",
    aliases: ["cod", "e", "codigo", "script"],
    description: "Testa um código",
    run: async(client, message) => {

    if(msg.author.id !== "580416011472338957") return msg.channel.send("❌ Você não tem permissão para usar esse comando.");
        let code = args.join(" ")
        if (!code) return msg.channel.send("Especifique o code que você deseja executar.")
        try {
        let resultado = await eval(code)
        if (typeof resultado !== 'string') {resultado = require('util').inspect(resultado);}
        msg.channel.send(`**📥 Code:**\n \`\`\`js\n${resultado}\`\`\``)
        } catch (err) {
            msg.channel.send(`**📤 Erro:**\n \`\`\`js\n${err}\`\`\``)
        }
	}
}
