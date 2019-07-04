const Discord = require("discord.js")
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
var option = args.slice(0).join(" ")
if (option.match("newbie")) {

  let test = message.guild.channels.get('562893475024994304')
  let embed = new Discord.RichEmbed()
  .setTitle("**⬆ Verter Discord Rank Up ⬆**")
  .setDescription(`**${args[1]}** \`Telah Naik Rank\` ${args[2]} 👏
\`\`\`css
#Verter-Discord-2019\`\`\``)
  .setColor("#0aaaeb")
  .setThumbnail('https://cdn.discordapp.com/attachments/557169647321874432/557888059119501339/unknown.png')
  if(message.author.id !== '495789681716494337');
 test.send(embed)
 // message.channel.send(embed)
}

if (option.match("mega")) {

  let test = message.guild.channels.get('562893475024994304')
  let embed = new Discord.RichEmbed()
  .setTitle("**⬆ Verter Discord Rank Up ⬆**")
  .setDescription(`**${args[1]}** \`Telah Naik Rank\` ${args[2]} 👏
\`\`\`css
#Verter-Discord-2019\`\`\``)
  .setColor("#0aaaeb")
  .setThumbnail('https://cdn.discordapp.com/attachments/557169647321874432/557888105227616256/unknown.png')

  if(message.author.id !== '495789681716494337') return;
 test.send(embed)
 // message.channel.send(embed)
}

if (option.match("master")) {

  let test = message.guild.channels.get('562893475024994304')
  let embed = new Discord.RichEmbed()
  .setTitle("**⬆ Verter Discord Rank Up ⬆**")
  .setDescription(`**${args[1]}** \`Telah Naik Rank\` ${args[2]} 👏
\`\`\`css
#Verter-Discord-2019\`\`\``)
  .setColor("#0aaaeb")
  .setThumbnail('https://cdn.discordapp.com/attachments/557169647321874432/557888160147963904/unknown.png')

  if(message.author.id !== '495789681716494337') return;
 test.send(embed)
 // message.channel.send(embed)
}
}; 

module.exports.help = {
name: "reload"
}
