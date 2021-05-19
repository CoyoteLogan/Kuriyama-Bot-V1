module.exports = (client) => {
    client.on("message", async message => {
     const db = require('quick.db');

 let afk = new db.table("AFKs"),
        authorStatus = await afk.fetch(message.author.id),
        mentioned = message.mentions.members.first();
    
    if (mentioned) {
      let status = await afk.fetch(mentioned.id);
      
      if (status) {
        message.channel.send(`O Usúario **${mentioned.user.tag}** está AFK \nMotivo: **${status}**`);//.then(i => i.delete({timeout: 0}));
      }
    }
    
    if (authorStatus) {
      message.channel.send(`**${message.author.tag}** não está mais AFK.`);//.then(i => i.delete({timeout: 0}));
      afk.delete(message.author.id)
    }
	});
}