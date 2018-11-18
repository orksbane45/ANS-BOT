const Discord = require('discord.js');
const settings = require('../settings.json');
const fs = require('fs');
const chalk = require('chalk');
const moment = require('moment');

exports.run = async (client, message, params) => {
  if (message.member.hasPermission('ADMINISTRATOR') || message.author.id == 302837596600664065) {
    
    let embed = new Discord.RichEmbed()
    .setColor('#2CEF08')
    .addField("Ⅱ - Conduite :",`**>** Pas de propos/photo/images insultants, vulgaires, racistes, sexistes, religieux, politiques ou homophobes.\r**>** Soyez respectueux, courtois, poli envers les utilisateurs et le staff. "Bonjour", "Merci", "Au revoir" n'ont jamais tué personne.\r**>** Ne dévoilez sous aucun prétexte vos informations de compte, même à un membre du staff !\r**>** Pas de spam (le spam d'émote est aussi considéré comme étant un spam.`)
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
