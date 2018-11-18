const chalk = require('chalk');
const moment = require('moment');
module.exports = client => {
 console.log(chalk.black.bgRed('Bot en ligne'));
    console.log(chalk.inverse(`[${moment().format('DD-MM-YYYY HH:mm:ss')}] `) + chalk.black.bgGreen(`Le bot ${client.user.tag} est prêt.`));
    console.log(chalk.inverse(`Invitation :          `) + chalk.black.bgGreen(`https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`));
    console.log(chalk.inverse('Token :               ') + chalk.black.bgGreen(client.token));
    console.log(chalk.inverse('Id :                  ') + chalk.black.bgGreen(client.user.id));
  client.user.setActivity('Le château de g8go',{type:'LISTENING'})
};
 //on ou off
