const Discord = require('discord.js');


module.exports.run = async (bot, message, args) => {
    if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔》**You have no permissions `MANAGE MESSAGES`**');
  let msg =  bot.guilds.map(guild => `**${guild.name}** Members: ${guild.memberCount}`).join('\n');
  let embed = new Discord.RichEmbed()
  .setTitle(`I am in ${bot.guilds.size} guilds!`)
  .setDescription(`${msg}`)
  .setColor("#0aaaeb");
  message.channel.send(embed);
}

module.exports.help = {
  name: "svs"
}