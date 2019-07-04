const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => {

var option = args.slice(0).join(" ")
            if (!option) {
              var embed = new Discord.RichEmbed()
              .setTitle('🌍 2 languages available 🌍')
              .setColor("#0aaaeb")
              .setDescription(`

🇮🇩 \`${message.prefix}autonick help indonesia\`
🇺🇸 \`${message.prefix}autonick help english\`

`)
              .setFooter("Autonick", bot.user.displayAvatarURL)
              .setTimestamp()
              await message.react('🕛')
              await message.react('🕐')
              await message.react('🕑')
              await message.react('🕓')
              await message.react('🕧')
              await message.react('☑')
              await message.delete(2000)
              message.channel.send({embed});
            } else {
if (option.match("set")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔》**Kamu tidak memiliki permissions `MANAGE MESSAGES`**');
            var nick = JSON.parse(fs.readFileSync("./autonick.json", "utf8"))
            var inputmessage = args[1]
            if (args[1]) {
              nick[message.guild.id] = {
                nick: inputmessage
             };
              fs.writeFile("./autonick.json", JSON.stringify(nick), (err) => {
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

            if (option.match("help indonesia")) {

 var embed = new Discord.RichEmbed()
              .setColor("#0aaaeb")
              .setDescription(`**Note:**
Kait seperti [] atau <> tidak digunakan saat menggunakan perintah.

**Sample:**
\`${message.prefix}autonick [Oni] {username} \`
Nick akan berubah menjadi \`[Oni] Onichan \` setiap anggota yang bergabung.

**COMMAND:**
\`${message.prefix}autonick set <text>\`
Contoh: **${message.prefix}autonick set [V]**

\`${message.prefix}autonick active\`
\`${message.prefix}autonick off\`
`)
              .setFooter("Autonick", bot.user.displayAvatarURL)
              .setTimestamp()
              await message.react('🇮🇩')
              message.channel.send({embed});

            }
            if (option.match("help english")) {

 var embed = new Discord.RichEmbed()
              .setColor("#0aaaeb")
              .setDescription(`**Note:**
🇺🇸 Hooks like [] or <> are not used when using commands.

**Sample:**
\`${message.prefix}autonick [Oni] {username} \`
The nick will change to \`[Oni] Onichan \`every member who joins.

**COMMAND:**
\`${message.prefix}autonick set <text>\`
Sample: **${message.prefix}autonick set [V]**

\`${message.prefix}autonick active\`
\`${message.prefix}autonick off\`
`)
              .setFooter("Autonick", bot.user.displayAvatarURL)
              .setTimestamp()
              await message.react('🇺🇸')
              message.channel.send({embed});

            }
            if (option.match("active")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔》**Kamu tidak memiliki permissions `MANAGE MESSAGES`**');
            var autonicksetting = JSON.parse(fs.readFileSync("./autonickonoff.json", "utf8"));
            autonicksetting[message.guild.id] = {
                checker: 1
                };
                  fs.writeFile("./autonickonoff.json", JSON.stringify(autonicksetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#0aaaeb")
                .setDescription(`Autonick event has been **on**.`)
                .setTimestamp()
                .setFooter("Autonick Enable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (option.match("off")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔》**Kamu tidak memiliki permissions `MANAGE MESSAGES`**');
            var autonicksetting = JSON.parse(fs.readFileSync("./autonickonoff.json", "utf8"));
            autonicksetting[message.guild.id] = {
                checker: 0
                };
                  fs.writeFile("./autonickonoff.json", JSON.stringify(autonicksetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#0aaaeb")
                .setDescription(`Autonick has been **off**.`)
                .setTimestamp()
                .setFooter("Autonick Disable", bot.user.displayAvatarURL)
                
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