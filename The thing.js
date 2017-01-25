console.log("bacon");
const Discord = require("discord.js");
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.username}!`);
});
var responseObject = {
 "hey" : "Hey.",
 "please" : "no thank you",
 "Ryan" : "you're not cool",
  "ping" : "Pong!"
  "I won" : "That's what you think"  
};
bot.on('message', (message) => {
  if(responseObject[message.content]) {
    message.channel.sendMessage(responseObject[message.content]);
  }
});
bot.on('message', msg => {
    if (msg.content === 'please') {
   // console.log(msg.member.roles);
    msg.member.addRole('273898318264795136');
    msg.reply('Okay');

}
bot.login('');
