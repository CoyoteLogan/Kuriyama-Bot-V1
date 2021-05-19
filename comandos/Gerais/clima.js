const weather = require('weather-js');

const Discord = require('discord.js');

module.exports = {
    name: "clima",
    aliases: ["tempo", "temperatura", "previsão", "previsao"],
    description: "Vê a previsão do tempo na cidade expecidicada!",
    run: async(client, message, args) => {

    weather.find({ search: args.join(" "), degreeType: 'C' }, function(error, result) {
      // 'C' can be changed to 'F' for farneheit results
      if (error) return message.channel.send(error);
      if (!args[0]) return message.channel.send('Por favor expecifique o local!')

      if (result === undefined || result.length === 0) return message.channel.send('Local **invalido**');

      var current = result[0].current;
      var location = result[0].location;

      const weatherinfo = new Discord.MessageEmbed()
        .setAuthor(`Clima pesquisado em: ${current.observationpoint}`)
        .setThumbnail(current.imageUrl)
        .setColor([255, 182, 193])
        .addField('Fuso Horario', `UTC${location.timezone}`, true)
        .addField('Tipo de temperatura', 'Celsius', true)
        .addField('Temperatura', `${current.temperature}°`, true)
        .addField('Ventos', current.winddisplay, true)
        .addField('Sensaçao termica', `${current.feelslike}°`, true)
        .addField('Humidade', `${current.humidity}%`, true)


      message.channel.send(weatherinfo)
    })
  }
}