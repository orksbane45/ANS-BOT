const Discord = require('discord.js');
const settings = require('../settings.json');
const fs = require('fs');
const chalk = require('chalk');
const moment = require('moment');
const lg = require('../lgroles.json');
exports.run = (client, message, params) => {
	let rolelg = client.guilds.get(message.guild.id).roles.find('name', 'LG bot');
	let mike = message.author;
	if (message.content.includes('join')) {
		message.delete();
		message.channel.send(`**${message.author.tag}**, participe a cette partie.`); console.log(chalk.blue.bgWhite(`${message.author.tag} participe`));
		message.guild.member(mike).addRole(rolelg);
	}
	if (message.content.includes('leave')) {
		message.delete();
		message.channel.send(`**${message.author.tag}**, quitte la partie.`); console.log(chalk.red.bgWhite(`${message.author.tag} ne participe plus`));
		message.guild.member(mike).removeRole(rolelg);

	}
	if (message.member.hasPermission('ADMINISTRATOR') || message.author.id == 327176843709120512) {
	if (message.content.includes('start')) {
		message.delete();
		let embedstart = new Discord.RichEmbed()
		.setColor('RANDOM')
		.setTitle('Loup Garou ' + message.guild.name)
		.addField('@here Une partie de Loup Garou va commencer',"`c!lg join` dans <#485158830834188288> pour rejoindre la partie.")


		message.channel.send(embedstart);

}
/*if (message.member.hasPermission('ADMINISTRATOR') || message.author.id == 327176843709120512) {
	if (message.content.includes('mute')) {
		message.delete();
		let testlg = 
		let voclg = message.channel.guild.find("name","LG bot");
		message.guild.voclg.member().addRole(testlg);

*/ }
if (message.member.hasPermission('ADMINISTRATOR') || message.author.id == 327176843709120512) {
	if (message.content.includes('mute')) {
		message.delete();
		
		let voclg = message.channel.guild.find("name","En jeu");
		message.guild.voclg.member().addRole(testlg);
		}


	 }
	 if (message.content.includes('joinoff')) {
	 	let embedjoinoff = new Discord.RichEmbed()
	 	.setColor('RANDOM')
	 	.setDescription('Les inscriptions sont maintenant fermées.')
	 	message.channel.send(embedjoinoff)
	 }
	 if (message.member.hasPermission('ADMINISTRATOR') || message.author.id == 327176843709120512) {
	 if (message.content.includes('vote')) {
	 	 let args = message.content.split(" ").slice(1);
	 	var d = new Date,
		dformat = [d.getHours(),
        d.getMinutes()+ 6,
        d.getSeconds()].join(' : ');
        
	 	let embedjoinoff = new Discord.RichEmbed()
	 	.setColor('RANDOM')
	 	.setDescription('Les votes commence à ' + `[${dformat}]`)
	 	message.channel.send(embedjoinoff)
	 }

	 }
 };


    exports.conf = {
      enabled: true,
      guildOnly: false,
      aliases: ['lg'],
      permLevel: 0
    };

    exports.help = {
      name: 'loupgarou',
      description: 'null',
      usage: 'avatar [mention]',
      aliase: ['lg']
    };
