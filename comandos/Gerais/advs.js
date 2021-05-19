const Discord = require("discord.js");
const db = require("quick.db");

module.exports = {
name: "warns",
aliases: ["userwarns"],
run: async (client, message, args) => {

let user = message.mentions.members.first() || message.author;
if(!user) {
return message.inlineReply("Mencione um user")
}

let warns = await db.get(`advCount_${message.guild.id}-${user.id}`) || 0;

message.inlineReply(`${user} tem ${warns} Advertencias`)
}
}