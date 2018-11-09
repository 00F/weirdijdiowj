const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
if (message.content.startsWith('.st')) {
  client.user.setGame(argresult, "https://www.twitch.tv/MeeRcY");
   message.channel.send(`${argresult} \` `)
   
     }
          
});
client.login(process.env.BOT_TOKEN)
