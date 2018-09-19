const settings = require('../settings.json');
const Discord = require("discord.js");

exports.run = (client, message, params) => {
  if (!params[0]) {
    const commandNames = Array.from(client.commands.keys());
    const longest = commandNames.reduce((long, str) => Math.max(long, str.length), 0);

  const msg = new Discord.RichEmbed()

  .setColor('RANDOM')
  .setAuthor('Liste des commandes :')
  .addField(':rotating_light: Administrations', 'en dev')
  .addField('<:IZBgames:459689915039612928> Fun', 'en dev')
  .addField('<:IZBinfo:459689946513408000> Infos','en dev')
  
  .setDescription("Utilisez `chelp <commandes> pour plus d'informations !`")
  .setTimestamp()

              message.channel.send(msg);

  } else {
    let command = params[0];
    if (client.commands.has(command)) {
      command = client.commands.get(command);

      const msg2 = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setTitle(`**Commande :** ${command.help.name}`)
      .setDescription(`**Description :** ${command.help.description}\n**Usage :** ${command.help.usage}\n**Aliases :** ${command.help.aliase}`)
  message.channel.send(msg2)
    }
      
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['h', 'halp'],
  permLevel: 4
};

exports.help = {
  name: 'help',
  description: 'Liste des commandes du bot !',
  usage: 'help [command]',
  aliase: ['h , halp']
};
