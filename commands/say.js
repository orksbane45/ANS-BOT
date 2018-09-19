const Discord = require('discord.js');
exports.run = (client, message, args) => {

message.delete()
    const msg = new Discord.RichEmbed()
   
   .setColor("RANDOM")
   .setDescription(args.join(" "))





    message.channel.send(msg);

    
};
    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: [],
      permLevel: 4
    };

    exports.help = {
      name: 'say',
      description: 'Le bot redit ce que vous ditez !',
      usage: 'say <message>',
      aliase: ['0']
}
