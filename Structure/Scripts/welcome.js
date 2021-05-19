module.exports = (client) => {
const db = require('quick.db');
client.on("guildMemberAdd", async function (member) {
    let canal = await member.guild.channels.cache(db.get(`cWel_${member.guild.id}`)) 
    if (canal) {
        let msg2 = await db.get(`mWel_${member.guild.id}`) || "{member:mention} entrou no servidor! | Sete uma mensagem com k!config"
        canal.send(
            msg2.replace("{member:mention}", `${member}`).replace("{member:username}", `${member.user.username}`).replace("{member:count}", `${member.guild.memberCount}`
        ))
    } else {
        return;
    }
	})
}