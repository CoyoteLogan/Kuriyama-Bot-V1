module.exports = (client) => {
client.on("guildMemberAdd", async(member) => {
    const db = require('quick.db');
let role = member.guild.roles.cache.get(db.get(`autorole_${member.guild.id}`))
if(role) {
  member.roles.add(role.id)
} else {
  return;
}
	});
}