const Discord = require('discord.js');
exports.run = (client, message, args) => {

  
  let support = client.channels.find('name', 'staff-chat');
  if (!support) return message.reply('erreur 1');
  let msupport = message.content.split(" ").slice(1);
  message.delete()
 const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`Report !`)
  .setDescription(msupport.join(" "))
  .setAuthor(`${message.author}`)
  .setTimestamp()

  return client.channels.get(support.id).sendEmbed(embed);
  return client.channels.get(support.id).send("@Chevalier")

  message.channel.send("<:AnarchyNetworkSecurity:513825192196177926> Votre report à bien était envoyer aux staffs !");
  
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
