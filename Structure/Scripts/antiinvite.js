module.exports = (client) => {
client.on("message", async message => {
  const db = require('quick.db');
  const regex = /(https?:\/\/)?(www\.)?(discord\.(gg|io|me|li|club)|discordapp\.com\/invite|discord\.com\/invite)\/.+[a-z]/gi;
  if (regex.exec(message.content)) {
  let ativo = db.get(`AntiInv_${message.guild.id}`, true)
  if (ativo === true) {
    await message.delete({timeout: 1000});
    await message.channel.send(
        `${message.author} o sistema de anti invites está ativado nesse servidor, se você continuar divulgando a Administração irá tomar previdencias!`
      );
  } else {
    return
  }
}
	});
}