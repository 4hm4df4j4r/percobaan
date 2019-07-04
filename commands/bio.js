const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      const sayMessage = args.join(" ");
      let sembed = new Discord.RichEmbed()
      .setDescription(`
**Kartu Biodata:** \`${message.author.username}\`

\`${sayMessage}\`

**Salam kenal ya semoga betah disini ya 🙏**
**Kita akan selalu mengenal kamu ko hehe**`)
      .setColor("#ebff00");
      message.delete(2000).catch();
  let test = message.guild.channels.get('541809529793282049')
      test.send(sembed);
  message.reply('Terimakasih Telah isi biodata.')

}

module.exports.help = {
  name: "say"
}