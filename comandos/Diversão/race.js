const Discord = require("discord.js");
module.exports = {
    name: "race",
    aliases: ["corrida"],
    description: "Aposta uma corrida",
    run: async(client, message, args) => {
        
let user = message.mentions.users.first();
          if (!user) return message.reply('**Você não mencionou o usuario que você quer jogar!**').catch(console.error);
          const Corrida = "<@" + message.author.id + ">" 
          const corrida2 =  " <@" + user.id + ">"
          var falas = [" fez **200** metros....."," fez **500** metros..........."," fez **800** metros.............."," fez **1000** metros................."," fez **1500** metros ............................","Teve uma pane no sistema e uma explosão ocorreu","Bateu e pegou fogo" ]
          message.channel.send({
              "embed": {
                  "title": "Corrida em andamento...",
                  "description": " O " + Corrida + " e" +  corrida2 + " **estao disputando uma corrida**" ,
                  "color": "BLACK",
                  
                  "fields": [
                      {
                          "name":"Sobre a corrida:",
                          "value":  " " + Corrida +  " " + falas[Math.floor(Math.random() * falas.length)]  + "\n" +  "" + corrida2 +  " " + falas[Math.floor(Math.random() * falas.length)],
                          "inline": false
                        }
                    ]
                }
            })
        } 
}