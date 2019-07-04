const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args) => {

var option = args.slice(0).join(" ")
            if (!option) {
              var embed = new Discord.RichEmbed()
              .setTitle('🌍 2 languages available 🌍')
              .setColor("#0aaaeb")
              .setDescription(`

🇮🇩 \`${message.prefix}welcomeimg help indonesia\`
🇺🇸 \`${message.prefix}welcomeimg help english\`

`)
              .setFooter("Lumino", bot.user.displayAvatarURL)
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
            var nick = JSON.parse(fs.readFileSync("./welcome.json", "utf8"))
  if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔》**You have no permissions `MANAGE MESSAGES`**');
            var inputmessage = message.mentions.channels.first()
            if (args[0]) {
              nick[message.guild.id] = {
                nick: inputmessage.id
             };
              fs.writeFile("./welcome.json", JSON.stringify(nick), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#0aaaeb")
              .setDescription(`Welcome Img set to\n\n${inputmessage}`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
            }
            

              if (option.match("help indonesia")) {

              var embed = new Discord.RichEmbed()
              .setColor("#0aaaeb")
              .setDescription(`
Silahkan gunakan command dibawah ini untuk setting welcomeimg di server kamu.

**COMMAND:**
\`${message.prefix}welcomeimg set #channel\` 
Mention salah satu channel yang ingin di jadikan welcome image.

\`${message.prefix}welcomeimg img <Link>\`
Berilah link gambar yang membelakangi .jpg .png
**Contoh:** http://verter.com/verter.jpg

\`${message.prefix}welcomeimg text <text>\`
Berilah text kata kata pada kolom <text>

\`${message.prefix} welcomeimg color <color> \`
** Warna Daftar: **
\`• biru • merah • hijau
• pink • kuning • rainbow\`
**Contoh:** \`${message.prefix} welcomeimg color biru \`

\`${message.prefix}welcomeimg active\`
untuk mengaktifkan sebuah welcomeimg pada channel.

\`${message.prefix}welcomeimg off\`
untuk menonaktifkan welcomeimg pada channel.

\`${message.prefix}welcomeimgtest\`
untuk melihat hasil contoh settingan kamu.
`)
              .setFooter("Gobang Gocir", bot.user.displayAvatarURL)
              .setTimestamp()
              message.react("🇮🇩")
              message.channel.send({embed});

              }

              if (option.match("help english")) {

              var embed = new Discord.RichEmbed()
              .setColor("#0aaaeb")
              .setDescription(`
Please use the command below to set up welcomeimg on your server.

**COMMAND:**
\`${message.prefix}welcomeimg set #channel\` 
Mention one of the channels that you want to make a welcome picture.

\`${message.prefix}welcomeimg img <Link>\`
Give the image link back to .jpg .png
**Sample:** http://verter.com/verter.jpg

\`${message.prefix}welcomeimg text <text>\`
Give the word text in the <text> column

\`${message.prefix}welcomeimg color <color>\`
**List Color:** 
\`• blue  • pink • green
• red     • yellow • rainbow\`
**Sample:** \`${message.prefix}welcomeimg color blue\`

\`${message.prefix}welcomeimg active\`
to activate a welcomeimg on the channel.

\`${message.prefix}welcomeimg off\`
to disable welcomeimg on the channel.

\`${message.prefix}welcomeimgtest\`
to see the results of your example settings.
`)
              .setFooter("Gobang Gocir", bot.user.displayAvatarURL)
              .setTimestamp()
              message.react("🇺🇸")
              message.channel.send({embed});

              }
                if (option.match("img")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔》**You have no permissions `MANAGE MESSAGES`**');

            var status = JSON.parse(fs.readFileSync("./image.json", "utf8"))
            var inputmessage = args.slice(1).join(" ")
            if (args[0]) {
              status[message.guild.id] = {
                backgrounds: inputmessage
             };
              fs.writeFile("./image.json", JSON.stringify(status), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#0aaaeb")
              .setDescription(`🏝 | Welcome Img set to:`)
              .setImage(`${inputmessage}`)
              .setTimestamp()
              message.delete(2000)
              
              message.channel.send({embed});
            }
            }
  
                  if (option.match("text")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔》**You have no permissions `MANAGE MESSAGES`**');

            var status = JSON.parse(fs.readFileSync("./imgtext.json", "utf8"))
            var inputmessage = args.slice(1).join(" ")
            if (args[0]) {
              status[message.guild.id] = {
                backgrounds: inputmessage
             };
              fs.writeFile("./imgtext.json", JSON.stringify(status), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#0aaaeb")
              .setDescription(`📜 | Text has been set to: \n**${inputmessage}**`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }

                  if (option.match("color")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔》**You have no permissions `MANAGE MESSAGES`**');

            var warnawel = JSON.parse(fs.readFileSync("./warnawelcome.json", "utf8"))
            var inputmessage = args.slice(1).join(" ")
            if (args[0]) {
              warnawel[message.guild.id] = {
                warna: inputmessage
             };
              fs.writeFile("./warnawelcome.json", JSON.stringify(warnawel), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#0aaaeb")
              .setDescription(`🧩 | Color set to: \n**${inputmessage}**`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
  
            if (option.match("active")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔》**You have no permissions `MANAGE MESSAGES`**');

            var welcomesetting = JSON.parse(fs.readFileSync("./welcomeonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 1
                };
                  fs.writeFile("./welcomeonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#0aaaeb")
                .setDescription(`welcome event has been **on**.`)
                .setTimestamp()
                .setFooter("welcome Enable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (option.match("off")) {
  if(!message.guild.member(message.author).hasPermission('MANAGE_MESSAGES')) return message.channel.send('⛔》**You have no permissions `MANAGE MESSAGES`**');

            var welcomesetting = JSON.parse(fs.readFileSync("./welcomeonoff.json", "utf8"));
            welcomesetting[message.guild.id] = {
                checker: 0
                };
                  fs.writeFile("./welcomeonoff.json", JSON.stringify(welcomesetting, null, 2), (err) => {
                    console.error(err)
                 })
                var embed = new Discord.RichEmbed()
                .setColor("#0aaaeb")
                .setDescription(`welcome has been **off**.`)
                .setTimestamp()
                .setFooter("welcome Disable", bot.user.displayAvatarURL)
                
                message.channel.send({embed});
            }
            if (option.match("previous")) { //bukan kek gitu
              let nick = JSON.parse(fs.readFileSync("./welcome.json", "utf8"));
              if (!nick[message.guild.id]) {
                  var embed = new Discord.RichEmbed()
                  .setDescription(`**WELCOME:**\n\`\`\`None\`\`\``)
                  .setColor("#0aaaeb")
                  return message.channel.send(embed)
             }
              var embed = new Discord.RichEmbed()
              .setDescription(`**WELCOME:**\n\`\`\`${nick[message.guild.id].nick}\`\`\``)
              .setColor("#0aaaeb")
              return message.channel.send(embed); 
           }

  
}

exports.help = {
    name: "welcomeimg"
}