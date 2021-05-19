const Discord = require('discord.js');
const kuriyamabot  = new Discord.Client();
const config = require('../config.json');
const logger = require('../Structure/logger.js');
const fs = require('fs');
Discord.Constants.DefaultOptions.ws.properties.$browser = "Discord Android"
const db = require("quick.db");

const firebase = require('firebase');  
var firebaseConfig = {
    apiKey: "AIzaSyAXe19Jj7U40FTfk9mBlWGrdspE8dFghJk",
    authDomain: "kuriyama-d54ad.firebaseapp.com",
    projectId: "kuriyama-d54ad",
    storageBucket: "kuriyama-d54ad.appspot.com",
    messagingSenderId: "458294511085",
    appId: "1:458294511085:web:7cdd4eda8760d35a6d53e4"
  };
  firebase.initializeApp(firebaseConfig);


kuriyamabot.on('ready', () => {
    kuriyamabot.ready = fs.readdirSync("./Structure/");
    ["ready"].forEach(ready => {
        require(`../Structure/Scripts/ready.js`)(kuriyamabot);
    });
});

kuriyamabot.carregar = fs.readdirSync("./Structure/");
   ["carregar"].forEach(carregar => {
      require(`../Structure/Carregar.js`)(kuriyamabot);
   });

kuriyamabot.login(config.token);