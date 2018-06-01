const Discord = require('discord.js');
const commando = require('discord.js-commando');
const config = require("./config.json");
const ytdl = require('ytdl-core');
const DM = require('discord-yt-player')

let requestUrl = 'https://www.googleapis.com/youtube/v3/search' +
     `?part=snippet&q=${escape(args)}&key=${config.yt_KEY}`;

class PlaySongCommand extends commando.Command{
  constructor(client){
    super(client, {
      name: 'play',
      group: 'random',
      memberName: 'play',
      description: 'Play voice'
    });
  }



  async run(message, args){

    crequest(requestUrl, (error, response) => {
      if (!error && response.statusCode == 200) {
        var body = response.body;
        if (body.items.length == 0) {
          client.reply(m, 'Your query gave 0 results.');
          return;
        }

        for (var item of body.items) {
          if (item.id.kind === 'youtube#video') {
            var vid = item.id.videoId;
            getInfoAndQueue(vid, m);
            return;
          }
        }

        client.reply(m, 'No video has been found!');
      } else {
        client.reply(m, 'There was an error searching.');
        return;
      }
    });

  }
}

module.exports = PlaySongCommand;
