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
client.on('message', msg => {
    if (msg.content === 'please') {
   // console.log(msg.member.roles);
    msg.member.addRole('273898318264795136');
    msg.reply('Okay');

}
client.login('');
