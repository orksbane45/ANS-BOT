const lg = require('../lgroles.json');
const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, params) => {
  message.delete()
  const embed2 = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle('__Impossible de trouver le rôle demander veuillez utilisez les rôles suivant :__')
  .addField('Rôles : `c!ri <nomdurole>`','loupgarou\rloupgaroublanc\rgrandmechantloup\rinfectperedesloup\rvillageois\range\rancien\rboucemissaire\rcorbeau\rchasseur\rvoyante\rsalvateur\rsorciere\rcupidon\rchaman\rvoleur\rpetitefille\ridiotduvillage\rjoueurdeflute\renfantsauvage\rsoeur\rmontreurdours\rrenard\rchienloup\rlapinblanc\rpyromane\rdocteur\rfauxjeton\rprincesse\rjoueusedecarte\rspeedy\rpuceau\rcomedien\rculpute')
  if (!params[0] || !lg[params[0]]) return message.channel.send(embed2);
  let loup = lg[params[0]];

  msg = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('Informations sur : ' + params[0])
        .addField('Nom : ', loup.nom , true)
        .addField('Description : ', loup.description , true)
        .addField('Camp : ', loup.camp ,true)
        .setThumbnail(loup.image)


        message.channel.send(msg);
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ri'],
  permLevel: 0
};

exports.help = {
  name: 'roleinfo',
  description: 'desc',
  usage: 'roleinfo'
};
