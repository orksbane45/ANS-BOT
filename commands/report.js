const Discord = require('discord.js');
exports.run = (client, message, args) => {

  let user = message.mentions.users.first();
  let support = client.channels.find('name', 'staff-modo');
  if (!support) return message.reply('erreur 1');
  let msupport = message.content.split(" ").slice(1);
  message.delete()
 const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle()
  .setDescription(msupport.join(" "))
  .setAuthor(`${user.username}`)
  .setTimestamp()

  return client.channels.get(support.id).sendEmbed(embed);
  client.channels.get(support.id).send("@Modérateur")

  message.channel.send(" :white_check_mark: Votre report à bien était envoyer aux modérateurs !")
};

  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
  };

  exports.help = {
    name: 'report',
    description: 'null',
    usage: 'report <message>'
  }
