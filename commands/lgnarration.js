const Discord = require('discord.js');
const settings = require('../settings.json');
const fs = require('fs');
const chalk = require('chalk');
const moment = require('moment');
const lg = require('../lgroles.json');
exports.run = async (client, message, params) => {
  if (message.member.hasPermission('ADMINISTRATOR') || message.author.id == 327176843709120512) {
    if (message.content.includes('nuit')) {
    message.delete();
    let embednuit = new Discord.RichEmbed()
    .setColor('#000000')
    .setDescription('La nuit tombe sur le village...')
    message.channel.send(embednuit)
  }
   if (message.content.includes('jour')) {
    message.delete();
    let embedjour = new Discord.RichEmbed()
    .setColor('#b3e6ff')
    .setDescription('Le jour fait sont arriver sur le village...\rEt les villageois débatent.')

    message.channel.send(embedjour)
  }
  if (message.content.includes('vote')) {
    message.delete();
    let embedjour = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription('Vous pouvez voter :')

    message.channel.send(embedjour)
  }
  
   
   
}else{
  message.reply("Vous n'êtes pas autoriser a utiliser cette commande.")
}
};


    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['lgn'],
      permLevel: 0
    };

    exports.help = {
      name: 'loupgarounarration',
      description: 'null',
      usage: 'lgn',
      aliase: ['lgn']
    };
