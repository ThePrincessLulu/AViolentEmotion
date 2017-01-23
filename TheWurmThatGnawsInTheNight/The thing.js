console.log("bacon");
const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
    msg.reply('Pong!');
}
});

client.login('MjcwOTk1MDA2NDE4ODQ1NzA2.C2fsFg.lkSpuTadQ-YzohpxSK60dhMFfEk');
