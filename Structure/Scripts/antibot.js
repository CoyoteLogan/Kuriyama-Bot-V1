module.exports = (client) => {
client.on("guildMemberAdd", async function (member) {
  const db = require('quick.db');
  let ativo = await client.guilds.cache.get(db.get(`AntiBot_${member.guild.id}`))
  if (ativo) {
    if(member.user.bot) {
      member.guild.member(member).kick(`Motivo: Anti-Bot Ativado!`)
    }
    else
    {
    }
  }
	});
}