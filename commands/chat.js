const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
let test = message.guild.channels.get('539097489039687691')
      const sayMessage = args.join(" ");

      let sembed = new Discord.RichEmbed()
      .setDescription(sayMessage)
      .setColor("#0aaaeb")
      test.send(sembed);

}

module.exports.help = {
  name: "say"
}