console.log("bacon");
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.username}!`);
});
bot.on('message', msg => {
    if (msg.content === 'ping') {
    msg.reply('Pong!');
}
});
bot.on('message', msg => {
    if (msg.content === 'please') {
   // console.log(msg.member.roles);
    msg.member.addRole('273898318264795136');
    msg.reply('Okay');

}
bot.login('');
