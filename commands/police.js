const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== '467298098096635934') return
  let user = message.mentions.users.first();

message.channel.send(`
\`\`\`
Police Live Chat\`\`\``)

}



module.exports.help = {
  name: "say"
}