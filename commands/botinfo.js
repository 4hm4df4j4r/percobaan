const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setColor("#0aaaeb")
    .setThumbnail(bicon)
    .addField("📰 Nama Bot", bot.user.username)
    .addField("⏱ Dibuat pada", bot.user.createdAt)
    .addField("💻 Dibuat oleh", "Verter#8858");

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}