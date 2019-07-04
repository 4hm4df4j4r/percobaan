const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

//----------------------EMBED------------------------
let embed1 = new Discord.RichEmbed()
.setDescription("😥 Silakan tentukan angka.")
.setColor('#0aaaeb')
//----------------------EMBED------------------------
let embed3 = new Discord.RichEmbed()
.setDescription('🤐 Tidak bisa sobat!')

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(embed3);


  if(!args[0]) return message.channel.send(embed1);


  message.channel.bulkDelete(args[0]).then(() => {

let embed2 = new Discord.RichEmbed()
.setDescription(`${args[0]} Pesan telah Dibersihkan 🔥`)
.setColor('#0aaaeb')
//mengirim embed
message.channel.send(embed2).then(msg => msg.delete(20000));

});

}

module.exports.help = {
  name: "clear"
}