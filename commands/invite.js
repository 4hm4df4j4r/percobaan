const Discord = require('discord.js');
const fs = require("fs");
module.exports.run = async(bot, message, args) => {
if (message.channel.id === '557088182458384385') {

  message.delete(5000);
      let sembed = new Discord.RichEmbed()
      .setDescription(`**🆔 Masukan ID bot kamu 🆔**
Diberi waktu \`10\` detik untuk memberikan id !!`)
      .setColor("#0aaaeb");
      message.channel.send(sembed).then(msg => {msg.delete(10000)})
                                                                
const filter = m => m.author.id === message.author.id;
const messagecollection = await message.channel.awaitMessages(filter, { max: 1, time: 10000});
const content = messagecollection.first().content;
messagecollection.delete(5000)
            var pendaftaran = JSON.parse(fs.readFileSync("./pendaftaran.json", "utf8"))
              pendaftaran[message.author.id] = {
                id: content,
                prefix: 'Tidak terdaftar',
                pemilik: `${message.author.username}`
             };
              fs.writeFile("./pendaftaran.json", JSON.stringify(pendaftaran), (err) => {
                if (err) console.log(err)
             });



      let sembed2 = new Discord.RichEmbed()
      .setDescription(`**Apa prefix bot kamu?**`)
      .setColor("#0aaaeb");
      message.channel.send(sembed2).then(msg => {msg.delete(10000)})
const messagecollection2 = await message.channel.awaitMessages(filter, { max: 1, tume: 10000});
const content2 = messagecollection2.first().content;
messagecollection2.delete(5000)

let idb = pendaftaran[message.author.id].id;
let pemiliks = pendaftaran[message.author.id].pemilik;
              pendaftaran[message.author.id] = {
                id: idb,
                prefix: content2,
                pemilik: pemiliks
             };
              fs.writeFile("./pendaftaran.json", JSON.stringify(pendaftaran), (err) => {
                      let sembed2 = new Discord.RichEmbed()
                      .setDescription(`**DATA DISIMPAN 💾**`)
                     .setColor("#0aaaeb");
                      message.channel.send(sembed2).then(msg => {msg.delete(10000)})
                if (err) console.log(err)
             }); return await message.channel.send('**Sedang membuat laporan**').then((msg) => {
    setTimeout(function() {
    msg.edit('Berhasil di buat').then(msg => {msg.delete(3000)});
let prefixs = pendaftaran[message.author.id].prefix;
bot.fetchUser(idb).then(i => {
let test = new Discord.RichEmbed()
.setDescription(`**⏬ SEDANG DI ANTRIAN ⏬**

**:robot: NAMA BOT:** <@${idb}> \`ID: ${idb}\`
**📠 PREFIX:** \`${prefixs}\`
**🛡 PREMILIK:** ${message.author.username}
**📎 INVITE LINK: [\`Link Invite\`](https://discordapp.com/oauth2/authorize?client_id=${idb}&permissions=0&scope=bot)**

**Bot akan segera diterima, Minimal command kamu aktif** ‼ `)
      .setColor("#0aaaeb")
      .setThumbnail(i.displayAvatarURL);


let test1 = new Discord.RichEmbed()
.setDescription(`📰 **Nama:** ${message.author}
**📨 Terkirim, Sedang Menunggu Proses
silahkan cek di** <#557089137597874177>`)
      .setColor("#0aaaeb")
      .setThumbnail(i.displayAvatarURL);

let test2 = new Discord.RichEmbed()
.setDescription(`__**🙏 Tolong di segera di Proses untuk staff yang on 🙏**__

**🆔 ID BOT:** ${idb}
**📠 PREFIX:** \`${prefixs}\`
**🛡 PREMILIK:** ${message.author}
**📎 INVITE LINK: [\`Link Invite\`](https://discordapp.com/oauth2/authorize?client_id=${idb}&permissions=0&scope=bot)**
`)
      .setColor("#0aaaeb")
      .setThumbnail(i.displayAvatarURL);

  
let invs = bot.channels.get('535021002795646996'); //request
let invss = bot.channels.get('557089137597874177'); //list antrian
let invsss = bot.channels.get('557088182458384385'); //list antrian
let invssss = bot.channels.get('557089967067889684'); //list antrian



     // invs.send(test2);
      invsss.send(test1).then(embedMessage => {
embedMessage.delete(30000)
      })
      invss.send(test).then(embedMessage => {
embedMessage.react('🔄')
      })

invssss.send(`
♻ **Bot <@${idb}> sedang di test !! 
Silahkan tunggu ${message.author}, antrian di <#557089137597874177>** 🙏`);


}) }, 3000)}); 
           
}              
}
module.exports.help = {
name: "invite"
}