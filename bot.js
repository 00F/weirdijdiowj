const Discord = require('discord.js');
const client = new Discord.Client();
const developers = ['457763227745648640'];


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity(".",{type: 'LISTENING'})
  client.user.setStatus("dnd")
});

client.on('message', message => {
  var argresult = message.content.split(` `).slice(1).join(' ');
    if (!developers.includes(message.author.id)) return;

if (message.content.startsWith('.wt')) {
client.user.setActivity(argresult, {type:'WATCHING'});
    message.channel.send(`${argresult} \` `)
} else 
if (message.content.startsWith('.st')) {
client.user.setActivity(argresult , {type:'LISTENING'});
    message.channel.send(` ${argresult} \` `)
} else 
if (message.content.startsWith('.ls')) {
  client.user.setGame(argresult, "https://www.twitch.tv/MeeRcY");
   message.channel.send(`${argresult} \` `)
}
});

client.login(process.env.BOT_TOKEN)
