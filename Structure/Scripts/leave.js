module.exports = (client) => {
    client.on("guildMemberRemove", async (member) => {
      const db = require('quick.db');
      let canal = await member.guild.channels.cache.get(db.get(`cLev_${member.guild.id}`))
      if(canal) {
      let msg = await db.get(`mLev_${member.guild.id}`) || "{member:username} saiu do servidor! | Sete uma mensagem com k!config"

       canal.send(msg.replace("{member:username}", `${member.user.username}`).replace("{member:id}", `${member.id}`).replace("{member:count}", `${member.guild.memberCount}`).replace("{member:mention}", `${member}`))
      } else {
        return;
      }
	})
}