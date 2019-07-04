 const Discord = require('discord.js');
const db = require('quick.db');
const ms = require('parse-ms');
const instagramUser = require('instagram-user');
const fs = require("fs");
var Canvas = require('canvas');
var jimp = require('jimp');


exports.run = async (bot, message, args, member) => {
var option = args.slice(0).join(" ")
var test = message.guild.roles.get('558310535871856650')

            if (!option) {
              var embed = new Discord.RichEmbed()
              .setColor("#0aaaeb")
              .setDescription(`
🇮🇩 Silahkan gunakan command dibawah ini untuk setting.

**COMMAND:**
- \`${message.prefix}nick set #channel\` 
\`Contoh:\` **${message.prefix}nick set #instagram**

**Command Mengganti Nama:**

\`${message.prefix}Nick ganti <nama>\`

`)
              .setFooter("Indonesia Bot", bot.user.displayAvatarURL)
              .setTimestamp()
              await message.react('⬇')
              message.channel.send({embed});
            } else {

              if (option.match("set")) {
            var nick = JSON.parse(fs.readFileSync("./nick.json", "utf8"))
            if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("Kamu tidak memiliki permission!");
            var inputmessage = message.mentions.channels.first()
            if (args[0]) {
              nick[message.guild.id] = {
                server: inputmessage.id
             };
              fs.writeFile("./nick.json", JSON.stringify(nick), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#ff0000")
              .setDescription(`nick generator set to\n\n${inputmessage}`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
            }

      if (option.match("ganti")) {
      var nicks = JSON.parse(fs.readFileSync("./nick.json", "utf8"))
      
      if (!nicks[message.guild.id]){
        nicks[message.guild.id] = {
nick: "541593717169979393"
};
}
      let bk = nicks[message.guild.id].server;

if (message.channel.id === `558310535871856650`) {
let cooldown = 0.004e+7; // 24 Часа
let lastDailyinv = await db.fetch(`lastDailyinv_${message.author.id}`);
    if (lastDailyinv !== null && cooldown - (Date.now() - lastDailyinv) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDailyinv));

message.channel.send(`\`${message.author.username}\` **Tunggu dalam waktu\`${timeObj.seconds} detik\` untuk mengganti nick kembali**!`)

    } else {
db.set(`lastDailyinv_${message.author.id}`, Date.now());
let cn = args.slice(1).join(" ")
      let sembed = new Discord.RichEmbed()
      .setDescription(`
**Nama kamu telah dirubah menjadi:**
\`「ʟᴍ」${cn}\``)
      .setColor("#0aaaeb");
message.member.setNickname(`「ʟᴍ」${cn}`);return message.channel.send(sembed);


  }
}
      }
}
