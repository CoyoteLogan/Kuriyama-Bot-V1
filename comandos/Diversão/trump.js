const jimp = require("jimp")
const Discord = require('discord.js')
const cooldowns = {}
const ms = require("ms")

module.exports = {
    name: "trump",
    aliases: ["trum", "trumpp"],
    description: "Faz o trump twitar algo",
    run: async(client, message, args) => {

    if(!cooldowns[message.author.id]) cooldowns[message.author.id] = {
        lastCmd: null
      }
let ultimoCmd = cooldowns[message.author.id].lastCmd 
     let timeout = 10000
    if (ultimoCmd !== null && timeout- (Date.now() - ultimoCmd) > 0) {
let time = ms(timeout - (Date.now() - ultimoCmd)); 
let resta = [time.seconds, 'segundos']
 
if(resta[0] == 0) resta = ['alguns', 'millisegundos']
if(resta[0] == 1) resta = [time.seconds, 'segundo']
const aguarde = new Discord.MessageEmbed()
  .setTitle(':carregando: Muita Calma nessa hora amigão !!!')
  .setColor([255, 182, 193])
    .setThumbnail('https://cdn.discordapp.com/attachments/755506991019065425/765688678801604659/purple_load.gif')
  .setDescription(`**Por favor ${message.author}, espere **\`${time}\`** para executar outro comando**`)
        message.channel.send(` Espere um pouco para utilizar esse comando novamente`).then(msg=> {
    msg.delete({ timeout: 600000 });
        })
       return;
    } else {
cooldowns[message.author.id].lastCmd = Date.now() 
    }

        let img = jimp.read("https://cdn.discordapp.com/attachments/814601802703175771/817326604325879828/trump-1.png")
        if (!args[0]) return message.reply("Escreva algo para o trump falar.")
        img.then(image => {
            jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                image.resize(885, 494)
                image.print(font, 20, 120, args.join(" "), 600)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.channel.send({files: [{ attachment: i, name: "trump.png"}]})
                })
            })
        })
    }
}