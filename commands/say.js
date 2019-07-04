const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      const sayMessage = args.join(" ");
      let sembed = new Discord.RichEmbed()
      .setDescription(`
:calling: Transaksi diterima oleh **:** ${message.author}

${sayMessage}`)
      .setColor("#0aaaeb");
      message.delete(2000).catch();
      message.channel.send(sembed);

}

module.exports.help = {
  name: "say"
}