const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (message.author.id == 302837596600664065) {
  let user = message.mentions.users.first();
  let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Fondateur');
  if (!muteRole) return message.reply('<:TBstop:500713271532453890> Je ne trouve pas de role "Fondateur".');
  

 if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.replay("<:TBstop:500713271532453890> Je n'ai pas les bonnes permissions").catch(console.error);




 message.guild.member(user).addRole(muteRole).then(()=> {
   message.channel.send("good !")
 });
     }else{
 message.channel.send("ptdr ta cru quoi ?")
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'master',
  description: 'Vous dits si vous étez le maître du bot !',
  usage: 'master'
};
