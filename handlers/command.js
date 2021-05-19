const {readdirSync} = require('fs');
const ascii = require('ascii-table')
let table = new ascii("Commands");
table.setHeading('Comandos', 'Status Comando');
module.exports= (client) => {
    readdirSync('./comandos/').forEach(dir => {
        const commands = readdirSync(`./comandos/${dir}/`).filter(file => file.endsWith('.js'));
        for(let file of commands){
            let pull = require(`../comandos/${dir}/${file}`);
            if(pull.name){
                client.commands.set(pull.name, pull);
                table.addRow(file,'⭐ Carregado')
            } else {
                table.addRow(file, '❌ Erro')
                continue;
            }if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name))
        }
    });
    console.log(table.toString());
}