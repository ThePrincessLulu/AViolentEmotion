console.log("bacon");
const Discord = require("discord.js");
const Bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`Logged in as ${client.user.username}!`);
});

bot.on(bot.triggers.react, /hey|hello/);
bot.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('Pong!' + bot.ping);
       
}
});

bot.login('');
