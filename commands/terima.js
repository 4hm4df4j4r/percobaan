const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let invss = bot.channels.get('557089967067889684'); //list antrian
invss.send(`
✅ **Bot <@${args[0]}> Telah Diterima !!**
**Silahkan test di** <#557094397024534538> <@${args[1]}>`);

}

module.exports.help = {
  name: "say"
}