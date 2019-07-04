const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    .setAuthor("NEO Barrack has many uses 😍", bot.user.displayAvatarURL)
    .addField('⬇ orders according to categories ⬇',`
▬▬▬▬▬[ **Mod 🔧** ]▬▬▬▬▬▬
\`${message.prefix}clear\` \`${message.prefix}giveaway\`  \`${message.prefix}setup\`
\`${message.prefix}autonick\`  \`${message.prefix}quotes\` \`${message.prefix}welcomeimg\`
\`${message.prefix}autoroles\` \`${message.prefix}antibadword\`
▬▬▬▬▬[ **Utils 🔮** ]▬▬▬▬▬▬
\`${message.prefix}avatar\` \`${message.prefix}botinfo\`
▬▬▬▬▬[ **Music 🎧** ]▬▬▬▬▬
\`${message.prefix}play\` \`${message.prefix}pause\` \`${message.prefix}resume\` \`${message.prefix}volume\` 
\`${message.prefix}stop\` \`${message.prefix}skip\` \`${message.prefix}np\` \`${message.prefix}queue\`
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🛡 **Support Server:** [\`Klik disini\`](https://discord.gg/4vvN2pH)
💞 **Invite:** [\`Klik disini\`](https://discordapp.com/oauth2/authorize?client_id=559892895868518400&permissions=8&scope=bot)
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n✅Equipped with 2 languages\n🇮🇩 Indonesia **&** 🇺🇸 English 
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬


`)
    .setColor('#0aaaeb')

.setFooter ("© Created by: Verter")
    message.channel.send(embed);
}
module.exports.help = {
    name: "help"
}
