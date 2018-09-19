const Discord = require('discord.js');
exports.run = (client, message) => {

 

    let args = message.content.split(" ").slice(1);
    message.delete()
    var embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription('Pour jouer envoyer un . (point) à : ' + args.join(''))
    message.channel.send(embed)

    
};
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['lgp'],
      permLevel: 0
    };

    exports.help = {
      name: 'loupgaroupoint',
      description: 'null',
      usage: 'lgn [mention]'
    }
