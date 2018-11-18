const Discord = require('discord.js');
const settings = require('../settings.json');
const fs = require('fs');
const chalk = require('chalk');
const moment = require('moment');

exports.run = async (client, message, params) => {
  if (message.member.hasPermission('ADMINISTRATOR') || message.author.id == 302837596600664065) {
    
    let embed = new Discord.RichEmbed()
    .setColor('#2CEF08')
    .addField("Ⅰ - Pseudonyme et Avatar :",`**>** Ne doit pas avoir de caractère pornographique.\r**>** Ne doit pas être cause de débat principalement politique ou religieux.\r**>** Ne doit pas contenir de propos racistes, homophobes, sexistes ou faire référence à la drogue. \r**>** Ne doit pas pouvoir être confondu/ressemblant avec/à celui d'un membre du staff.\r**>** Ne doit faire aucune référence à un autre serveur.\r**>** Vos pseudo doivent servir à vous identifier! Interdiction de mettre un autre pseudo que votre veritable pseudo`)
    message.channel.send(embed)
  }
};


    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['rgl'],
      permLevel: 0
    };

    exports.help = {
      name: 'reglement',
      description: 'null',
      usage: 'rlg',
      aliase: ['rlg']
    };
