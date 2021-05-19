const { MessageEmbed } = require("discord.js");

module.exports = {
    name: "invites",
    aliases: ["verinvites", "convites"],
    description: "Exibe os invites do usuario",
    run: async(client, message, args) => {
        const member = message.mentions.members.first() || message.member;

        const invites = await message.guild.fetchInvites()
        let i = 0;
        const userInv = invites.filter(u => u.inviter && u.inviter.id === member.user.id)

        if (userInv.size <= 0) {
            return message.channel.send(`O usuario ${member} nao possui nenhum invite`)
        }
        const invitecodes = userInv.map(x => x.code).join('\n')

        userInv.forEach(inv2 => {
            i += inv2.uses
        });

        const embed = new MessageEmbed()
            .setTitle(`Invites de ${member.user.username}`)
            .addField("Possui", `${i} invites`)
            .setFooter(`Comando solicitado por: ${message.author.tag}`)
            .setColor([255, 182, 193])
            .setTimestamp()
        message.channel.send(embed)
    }
}