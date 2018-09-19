  const settings = require('../settings.json');
  exports.run = (client, message) => {
  
  if (message.author.id === settings.ownerid) return message.reply("MOn maître !")
  if (message.author.id === "353884181539061764") return message.reply("non tu est juste gay ! :joy: ")
  if (message.author.id === "372401915402911766") return message.reply("Oh ! Une vrai princesse !")
       message.channel.send("Tu n'est pas mon maître")                       
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
