const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== '495789681716494337')return;
message.channel.send(`
\`\`\`css
${args[0]} ${args[1]} ${args[2]} ${args[3]}\`\`\`
**Link:** ${args[4]}
`)
message.delete(2000)
}

module.exports.help = {
  name: "say"
}