const Discord = require('discord.js');
exports.run = (client, message, args) => {



    message.channel.send("**play.anarchynetwork.eu**")

    
};
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 0
    };

    exports.help = {
      name: 'ip',
      description: 'Donne l\'ip du serveur minecraft.',
      usage: 'ip',
      aliase: ['ip']
}
