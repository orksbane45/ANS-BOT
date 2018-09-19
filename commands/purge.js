exports.run = function(client, message, args) {
  if (message.member.hasPermission('MANAGE_MESSAGES') || message.member.hasPermission('ADMINISTRATOR') || message.author.id == 327176843709120512) {
  let messagecount = parseInt(args.join(' '));
  message.channel.fetchMessages({
    limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
}else {
message.reply("Vous n'avez pas les bonnes permissions !");
     };
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['clear'],
  permLevel: 0
};

exports.help = {
  name: 'purge',
  description: 'Clear les messages du channel !',
  usage: 'purge <nombre>'
};
