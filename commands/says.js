const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== '495789681716494337')return;
      const sayMessage = args.join(" ");
      let sembed = new Discord.RichEmbed()
      .setImage(`${sayMessage}`)
      .setColor("#0aaaeb");
      message.delete(2000).catch();
      message.channel.send(sembed);

}

module.exports.help = {
  name: "say"
}