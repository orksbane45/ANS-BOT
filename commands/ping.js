exports.run = (client, message) => {
  message.channel.sendMessage('Ping?')
    .then(msg => {


        if (msg.createdTimestamp - message.createdTimestamp < 200)
      msg.edit('<:AnarchyNetworkSecurity:513825192196177926> :' + (msg.createdTimestamp - message.createdTimestamp) + 'ms');

  if (msg.createdTimestamp - message.createdTimestamp >= 200)
      msg.edit('<:AnarchyNetwork:513747006624235520> :' + (msg.createdTimestamp - message.createdTimestamp) + 'ms');


    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Affiche le ping du bot !',
  usage: 'ping'
};
