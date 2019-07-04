const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(message.author.id !== '467298098096635934') return
  let user = message.mentions.users.first();


      let sembed = new Discord.RichEmbed()
      .setDescription(`
\`\`\`
📰 Nama  : ${user.username}
⚠ Aksi  : Banned 2 hari.
🕐 Waktu : ${args[1]}

Harus melebihi 8 Vote !! 
Automatis di kick.\`\`\`
`)
      .setColor("#0aaaeb");
      message.delete(2000).catch();
      message.channel.send(sembed);

await sembed.react('✅')

}



module.exports.help = {
  name: "say"
}