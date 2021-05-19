const Discord = require("discord.js")

module.exports = {
    name: "8ball",
    aliases: ["pergunta", "querosaber"],
    description: "Pergunta uma coisa para o Bot",
    run: async(client, message) => {

  if (!args[0]) return message.inlineReply("<:pp_check:798743340128010250> Voce precisa fazer uma pergunta")
  if (args[0].length < 1) return message.inlineReply("<:pp_check:798743340128010250> Voce precisa fazer uma pergunta")


  let i = ["Sim", "Nao", "Talvez", "Talvez nao", "Meus contatos dizem que nao", "Nao acho que seja uma boa", "Se voce nao sabe eu muito menos.....", "Nunca nem vi, que dia foi isso"]

  let y = i[Math.floor(i.length * Math.random())]


  message.inlineReply(`:8ball: ${y}`)
  }
}