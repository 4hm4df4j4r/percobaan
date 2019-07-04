const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => {
  if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔》**You dont have permission `MANAGE MESSAGES`**');
var option = args.slice(0).join(" ")
            if (!option) {
              var embed = new Discord.RichEmbed()
              .setColor("#0aaaeb")
              .setDescription(`**Note:**
:flag_id: Kait seperti [] atau <> tidak digunakan saat menggunakan perintah.

**COMMAND:**
\`${message.prefix}autoroles set <text>\`
Contoh: **${message.prefix}autoroles set Member**

\`${message.prefix}autoroles on\`
\`${message.prefix}autoroles off\`
`)
              .setFooter("Autorole", bot.user.displayAvatarURL)
              .setTimestamp()
              await message.react('⬇')
              message.channel.send({embed});
            } else {
if (option.match("set")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔》**You dont have permission `MANAGE MESSAGES`**');
            var nick = JSON.parse(fs.readFileSync("./autoroles.json", "utf8"))
            var inputmessage = args.slice(1).join(" ");
  	      	let rolename = message.guild.roles.find("name", inputmessage);
            if (args[1]) {
              nick[message.guild.id] = {
                role: rolename.id
             };
              fs.writeFile("./autoroles.json", JSON.stringify(nick), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#0aaaeb")
              .setDescription(`<@${message.author.id}>. Auto nick set to\n\n\`${inputmessage}\``)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
}
            if (option.match("on")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔》**You dont have permission `MANAGE MESSAGES`**');
            var autonicksetting = JSON.parse(fs.readFileSync("./autoroles.json", "utf8"));
            autonicksetting[message.guild.id] = {
                role: `${autonicksetting[message.guild.id].role}`
                };
                  fs.writeFile("./autoroles.json", JSON.stringify(autonicksetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#0aaaeb")
                .setDescription(`Autorole event has been **on**.`)
                .setTimestamp()
                .setFooter("Autorole Enable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (option.match("off")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔》**You dont have permission `MANAGE MESSAGES`**');
            var autonicksetting = JSON.parse(fs.readFileSync("./autoroles.json", "utf8"));
            autonicksetting[message.guild.id] = {
                role: 0
                };
                  fs.writeFile("./autoroles.json", JSON.stringify(autonicksetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#0aaaeb")
                .setDescription(`Autorole has been **off**.`)
                .setTimestamp()
                .setFooter("Autorole Disable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (option.match("previous")) { //bukan kek gitu
              let nick = JSON.parse(fs.readFileSync("./autonick.json", "utf8"));
              if (!nick[message.guild.id]) {
                  var embed = new Discord.RichEmbed()
                  .setDescription(`**AUTONICK:**\n\`\`\`None\`\`\``)
                  .setColor("#0aaaeb")
                  return message.channel.send(embed)
             }
              var embed = new Discord.RichEmbed()
              .setDescription(`**AUTONICK:**\n\`\`\`${nick[message.guild.id].nick}\`\`\``)
              .setColor("#0aaaeb")
              return message.channel.send(embed); 
           }
  
}

exports.help = {
    name: "autonick"
}