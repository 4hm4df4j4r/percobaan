const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
var option = args.slice(3).join(" ")
let invss = bot.channels.get('557089967067889684'); //list antrian
invss.send(`
⚠ **Bot <@${args[0]}> Masih tidak stabil <@${args[1]}> !!**

**Dikarenakan:**
\`\`\`css
${option}
\`\`\``);

}

module.exports.help = {
  name: "say"
}