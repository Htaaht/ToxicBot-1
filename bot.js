const Discord = require('discord.js');
const config = require('./config.json');
const commando = require('discord.js-commando');
const ytdl = require('ytdl-core');

// Initialize Discord Bot
var bot = new commando.Client();

bot.registry.registerGroup('random', 'Random');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

// Log in bot to server
bot.login(config.token);

bot.on('message', (message)=> {

  // Voice only works in guilds, if the message does not come from a guild,
    // we ignore it
    if (!message.guild) return;

    if (!message.guild) return;

  if (message.content === 'join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      const connection = message.member.voiceChannel.join();
    } else {
      message.reply('You need to join a voice channel first!');
    }
  }


  if(message.content == "ping"){
    message.reply("pong!");
  }

  if (message.content.includes("gay")){
    message.reply("wow no homo");
  }
});
