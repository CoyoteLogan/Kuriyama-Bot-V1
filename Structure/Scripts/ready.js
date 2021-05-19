module.exports = async (client) => {
  const hora = new Date();
  hora.setHours(hora.getHours() - 3);
  const os = require("os");
  const Discord = require('discord.js');
    
  let modelo = os.cpus().map((i) => `${i.model}`)[0]
  console.log(`
  =================================
  ✔️ Bot iniciado✔️
  Nome: ${client.user.tag}
  Comandos: ${client.commands.size}
  Usuários: ` + client.users.cache.size +
    `\n  Servidores: ${client.guilds.cache.size}
  Memória RAM: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}MB
  CPU: ${(process.cpuUsage().system / 1024 / 1024).toFixed(2)}% de CPU
  Processador: ${modelo}
  =================================`);
  //----


  //STATUS DO BOT
  var tabela = [
    { name: `Utilize k!ajuda para ver meus comandos`, type: 'PLAYING' },
    { name: `Utilize k!bug para reportar um bug a minha equipe`, type: 'PLAYING' },
    { name: `${client.users.cache.size} usuários`, type: 'WATCHING' },
    { name: `${client.channels.cache.size} canais`, type: 'WATCHING' },
    { name: `${client.guilds.cache.size} servidores`, type: 'WATCHING' },
  ];

  function setStatus() {
    var altstatus = tabela[Math.floor(Math.random() * tabela.length)]
    client.user.setActivity(altstatus)
  }
  setStatus("ONLINE")
  setInterval(() => setStatus(), 5000)
  //----

  
  //ALTERAR AVATAR DO BOT
  var avts = [
    'https://cdn.discordapp.com/attachments/736748357917212792/818821822849089536/th_1.jpg',
    'https://cdn.discordapp.com/attachments/736748357917212792/818821823495929926/th.jpg',
    'https://cdn.discordapp.com/attachments/736748357917212792/818821824083001374/Kuriyama.Mirai.full.1620730.jpg',
    'https://cdn.discordapp.com/attachments/736748357917212792/818830449056415764/th_2.jpg',
    'https://cdn.discordapp.com/attachments/736748357917212792/818830889311404102/Kuriyama.Mirai.full.1619650.jpg',
    'https://cdn.discordapp.com/attachments/736748357917212792/818831004608364574/th_3.jpg'
  ];

  setInterval(async function avatar() {
    await client.user
      .setAvatar(avts[Math.floor(Math.random() * avts.length)])
    console.log('Avatar alterado com sucesso!')
  }, 6000000)//6000000
  //----
  

//AVISAR QUANDO FICAR ON
  var channel = client.channels.cache.get("834973329550082088");
  const msg = new Discord.MessageEmbed()
    .setColor([255, 182, 193])

    .setTitle(`<a:app_pinkstar:798743785403056129>Estou online<a:app_pinkstar:798743785403056129>`)

    .setDescription(`Tive uma queda temporaria, mas já retornei, caso ocorra novamente minha equipe ira verificar!!!`)

    .setTimestamp()

  channel.send(msg);
}