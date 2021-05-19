module.exports = (client) => {
    const fs = require('fs');
    const { Collection, Client, MessageEmbed } = require("discord.js");
    
    client.commands = new Collection();
    client.aliases = new Collection();
    client.categories = fs.readdirSync("./comandos/");
    ["command"].forEach(handler => {
        require(`../handlers/${handler}`)(client); 
    });
    
	require("../Extras/ExtendedMessage");
    
	client.command = fs.readdirSync("./Structure/");
    ["command"].forEach(command => {
       require(`../Structure/Scripts/command.js`)(client);
       console.log('Sistema de Detectar comandos carregado com sucesso!');
    });
	client.afk = fs.readdirSync("./Structure/");
    ["afk"].forEach(afk => {
       require(`../Structure/Scripts/afk.js`)(client);
       console.log('Sistema de AFK carregado com sucesso!');
    });
	client.adicionado = fs.readdirSync("./Structure/");
    ["adicionado"].forEach(adicionado => {
       require(`../Structure/Scripts/adicionado.js`)(client);
       console.log('Sistema de Avisar Add carregado com sucesso!');
    });
	client.antibot = fs.readdirSync("./Structure/");
    ["antibot"].forEach(antibot => {
       require(`../Structure/Scripts/antibot.js`)(client);
       console.log('Sistema de AntiBot carregado com sucesso!');
    });
	client.antiinvite = fs.readdirSync("./Structure/");
    ["antiinvite"].forEach(antiinvite => {
       require(`../Structure/Scripts/antiinvite.js`)(client);
       console.log('Sistema de AntiInvite carregado com sucesso!');
    });
	client.autorole = fs.readdirSync("./Structure/");
    ["autorole"].forEach(autorole => {
       require(`../Structure/Scripts/autorole.js`)(client);
       console.log('Sistema de AutoRole carregado com sucesso!');
    });
	client.leave = fs.readdirSync("./Structure/");
    ["leave"].forEach(leave => {
       require(`../Structure/Scripts/leave.js`)(client);
       console.log('Sistema de leave carregado com sucesso!');
    });
	client.welcome = fs.readdirSync("./Structure/");
    ["welcome"].forEach(welcome => {
       require(`../Structure/Scripts/welcome.js`)(client);
       console.log('Sistema de Welcome carregado com sucesso!');
    });
    client.messagelog = fs.readdirSync("./Structure/");
    ["messagelog"].forEach(messagelog => {
       require(`../Structure/Scripts/messagelog.js`)(client);
       console.log('Sistema de Messagelog carregado com sucesso!');
    });
    client.mensão = fs.readdirSync("./Structure/");
    ["mensão"].forEach(mensão => {
       require(`../Structure/Scripts/mensão.js`)(client);
       console.log('Sistema de mensão carregado com sucesso!');
    });
}