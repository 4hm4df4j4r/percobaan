const Discord = require('discord.js');
const instagramUser = require('instagram-user');
const fs = require("fs");
var Canvas = require('canvas');
var jimp = require('jimp');

exports.run = async (bot, message, args) => {

var option = args.slice(0).join(" ")

            if (!option) {
              var embed = new Discord.RichEmbed()
              .setColor("#0aaaeb")
              .setDescription(`
🇮🇩 Silahkan gunakan command dibawah ini untuk setting.
:flag_us: Please use the command below for settings.

**COMMAND:**
\`${message.prefix}serverlist set <ID CHANNEL>\` 
\`Sample:\` **${message.prefix}serverlist set 517641462687596547**

**NB:** Server List akan automatis menyala.

`)
              .setFooter("Lumino Bot", bot.user.displayAvatarURL)
              .setTimestamp()
                            .setImage('https://cdn.discordapp.com/attachments/541957479370719235/542168635037319179/unknown.png')

              message.channel.send({embed});
            } else {

              if (option.match("set")) {
            var nick = JSON.parse(fs.readFileSync("./serverlist.json", "utf8"))
  if(!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) return message.channel.send('⛔》**You dont have permission `MANAGE MESSAGES`**');
            var inputmessage = args.slice(1).join(" ")
            if (args[0]) {
              nick[message.guild.id] = {
                server: inputmessage
             };
              fs.writeFile("./serverlist.json", JSON.stringify(nick), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#0aaaeb")
              .setDescription(`Serverlist set to\n\n${inputmessage}`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
            if (option.match("on")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) return message.channel.send('⛔》**You dont have permission `MANAGE MESSAGES`**');
            var autonicksetting = JSON.parse(fs.readFileSync("./serverlistsetting.json", "utf8"));
            autonicksetting[message.guild.id] = {
                checker: 1
                };
                  fs.writeFile("./serverlistsetting.json", JSON.stringify(autonicksetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#0aaaeb")
                .setDescription(`ServerList event has been **on**.`)
                .setTimestamp()
                .setFooter("ServerList Enable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (option.match("off")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_CHANNELS')) return message.channel.send('⛔》**You dont have permission `MANAGE MESSAGES`**');
            var autonicksetting = JSON.parse(fs.readFileSync("./serverlistsetting.json", "utf8"));
            autonicksetting[message.guild.id] = {
                checker: 0
                };
                  fs.writeFile("./serverlistsetting.json", JSON.stringify(autonicksetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#0aaaeb")
                .setDescription(`ServerList has been **off**.`)
                .setTimestamp()
                .setFooter("ServerList Disable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            }

}

module.exports.help = {
  name: "serverlist"
}