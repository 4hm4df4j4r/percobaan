const Discord = require('discord.js'),
      db = require('quick.db'),
      ms = require('parse-ms');
module.exports.run = async (bot, message, args) => {
if (message.channel.id === '557891615457280010') {

var optionRaw = args.slice(0).join(" ");
var option = optionRaw.toLocaleLowerCase();
let user = message.member;
if (!args[0]) {
  message.channel.send(`
Masukan command yg bener duts.
`)
}
  
       if (option.match("setup")) {
      let sembed = new Discord.RichEmbed()
      .setDescription(`
**Hai, kalian mau ambil roles? ikuti tutorial berikut !!

List Nama Role:**

**Game Role:**

•  \`🎮 PUBG 🎮\`
•  \`🎮 Mobile Legend 🎮\`

**Gender Role:**

•  \`👧 Ladies 👧\`
•  \`👦 Boys 👦\`

**Fun Role:**

•  \`👹 Tukang Toxic 👹\`
•  \`👿 Bocah Barbar 👿\`
•  \`🏆 Top Player 🏆\`

**Wilayah Role:**

• BATAM
• KALIMANTAN
• JAWA BARAT
• JAWA TIMUR
• JAWA TENGAH
• JAMBI
• SUMATRA
• JAKARTA
• SULAWESI

**Tambah Role:**
\`${message.prefix}role ambil <nama>\`

**Hapus Role:**
\`${message.prefix}role hapus <nama>\`

**Contoh:**
\`${message.prefix}role ambil pubg\`
\`${message.prefix}role hapus pubg\`

**Note:** 
Jika kalian bukan merasa Perempuan tetapi
mengambil role ladies 1x peringatan 2x kick 3x banned.
`)
      .setColor("#0aaaeb");
      message.channel.send(sembed);
     }

      if (option.match("ambil pubg")) {

    let role1 = message.guild.roles.find('name', '🎮 PUBG 🎮');
    user.addRole(role1.id)
    message.reply('**:ballot_box_with_check: Kamu Telah mengambil role** `🎮 PUBG 🎮`')
      }
     if (option.match("ambil mobile legend")) {

    let role1 = message.guild.roles.find('name', '🎮 Mobile Legend 🎮');
    user.addRole(role1.id)
    message.reply('**:ballot_box_with_check: Kamu Telah mengambil role** `🎮 Mobile Legend 🎮`')
      }
     if (option.match("ambil ladies")) {

    let role1 = message.guild.roles.find('name', '👧 Ladies 👧');
    user.addRole(role1.id)
    message.reply('**:ballot_box_with_check: Kamu Telah mengambil role** `👧 Ladies 👧`')
      }
     if (option.match("ambil boys")) {

    let role1 = message.guild.roles.find('name', '👦 Boys 👦');
    user.addRole(role1.id)
    message.reply('**:ballot_box_with_check: Kamu Telah mengambil role** `👦 Boys 👦`')
      }
     if (option.match("ambil tukang toxic")) {

    let role1 = message.guild.roles.find('name', '👹 Tukang Toxic 👹');
    user.addRole(role1.id)
    message.reply('**:ballot_box_with_check: Kamu Telah mengambil role** `👹 Tukang Toxic 👹`')
      }
     if (option.match("ambil bocah barbar")) {

    let role1 = message.guild.roles.find('name', '👿 Bocah Barbar 👿');
    user.addRole(role1.id)
    message.reply('**:ballot_box_with_check: Kamu Telah mengambil role** `👿 Bocah Barbar 👿`')
      }
     if (option.match("ambil top player")) {

    let role1 = message.guild.roles.find('name', '🏆 Top Player 🏆');
    user.addRole(role1.id)
    message.reply('**:ballot_box_with_check: Kamu Telah mengambil role** `🏆 Top Player 🏆`')
      }
     if (option.match("ambil batam")) {

    let role1 = message.guild.roles.find('name', '•Batam•');
    user.addRole(role1.id)
    message.reply('**:ballot_box_with_check: Kamu Telah mengambil role** `BATAM`')
      }
       if (option.match("ambil kalimantan")) {

    let role1 = message.guild.roles.find('name', '•Kalimantan•');
    user.addRole(role1.id)
    message.reply('**:ballot_box_with_check: Kamu Telah mengambil role** `KALIMANTAN`')
      }
       if (option.match("ambil jawa barat")) {

    let role1 = message.guild.roles.find('name', '•Jawa Barat•');
    user.addRole(role1.id)
    message.reply('**:ballot_box_with_check: Kamu Telah mengambil role** `JAWA BARAT`')
      }
       if (option.match("ambil jawa timur")) {

    let role1 = message.guild.roles.find('name', '•Jawa Timur•');
    user.addRole(role1.id)
    message.reply('**:ballot_box_with_check: Kamu Telah mengambil role** `JAWA TIMUR`')
      }
       if (option.match("ambil jawa tengah")) {

    let role1 = message.guild.roles.find('name', '•Jawa Tengah•');
    user.addRole(role1.id)
    message.reply('**:ballot_box_with_check: Kamu Telah mengambil role** `JAWA TENGAH`')
      }
       if (option.match("ambil jambi")) {

    let role1 = message.guild.roles.find('name', '•Jambi•');
    user.addRole(role1.id)
    message.reply('**:ballot_box_with_check: Kamu Telah mengambil role** `JAMBI`')
      }
       if (option.match("ambil sumatra")) {

    let role1 = message.guild.roles.find('name', '•Sumatra•');
    user.addRole(role1.id)
    message.reply('**:ballot_box_with_check: Kamu Telah mengambil role** `SUMATRA`')
      }
       if (option.match("ambil jakarta")) {

    let role1 = message.guild.roles.find('name', '•Jakarta•');
    user.addRole(role1.id)
    message.reply('**:ballot_box_with_check: Kamu Telah mengambil role** `JAKARTA`')
      }
       if (option.match("ambil sulawesi")) {

    let role1 = message.guild.roles.find('name', '•Sulawesi•');
    user.addRole(role1.id)
    message.reply('**:ballot_box_with_check: Kamu Telah mengambil role** `SULAWESI`')
      }




      if (option.match("hapus pubg")) {

    let role1 = message.guild.roles.find('name', '🎮 PUBG 🎮');
    user.removeRole(role1.id)
    message.reply('**⛔ Kamu Telah menghapus role** `🎮 PUBG 🎮`')
      }
     if (option.match("hapus mobile legend")) {

    let role1 = message.guild.roles.find('name', '🎮 Mobile Legend 🎮');
    user.removeRole(role1.id)
    message.reply('**⛔ Kamu Telah menghapus role** `🎮 Mobile Legend 🎮`')
      }
     if (option.match("hapus ladies")) {

    let role1 = message.guild.roles.find('name', '👧 Ladies 👧');
    user.removeRole(role1.id)
    message.reply('**⛔ Kamu Telah menghapus role** `👧 Ladies 👧`')
      }
     if (option.match("hapus boys")) {

    let role1 = message.guild.roles.find('name', '👦 Boys 👦');
    user.removeRole(role1.id)
    message.reply('**⛔ Kamu Telah menghapus role** `👦 Boys 👦`')
      }
     if (option.match("hapus tukang toxic")) {

    let role1 = message.guild.roles.find('name', '👹 Tukang Toxic 👹');
    user.removeRole(role1.id)
    message.reply('**⛔ Kamu Telah menghapus role** `👹 Tukang Toxic 👹`')
      }
     if (option.match("hapus bocah barbar")) {

    let role1 = message.guild.roles.find('name', '👿 Bocah Barbar 👿');
    user.removeRole(role1.id)
    message.reply('**⛔ Kamu Telah menghapus role** `🎃 Bocah Barbar 🎃`')
      }
     if (option.match("hapus top player")) {

    let role1 = message.guild.roles.find('name', '🏆 Top Player 🏆');
    user.removeRole(role1.id)
    message.reply('**⛔ Kamu Telah menghapus role** `🏆 Top Player 🏆`')
      }

     if (option.match("hapus batam")) {

    let role1 = message.guild.roles.find('name', '•Batam•');
    user.removeRole(role1.id)
    message.reply('**⛔ Kamu Telah menghapus role** `BATAM`')
      }
       if (option.match("hapus kalimantan")) {

    let role1 = message.guild.roles.find('name', '•Kalimantan•');
    user.removeRole(role1.id)
    message.reply('**⛔ Kamu Telah menghapus role** `KALIMANTAN`')
      }
       if (option.match("hapus jawa barat")) {

    let role1 = message.guild.roles.find('name', '•Jawa Barat•');
    user.removeRole(role1.id)
    message.reply('**⛔ Kamu Telah menghapus role** `JAWA BARAT`')
      }
       if (option.match("hapus jawa timur")) {

    let role1 = message.guild.roles.find('name', '•Jawa Timur•');
    user.removeRole(role1.id)
    message.reply('**⛔ Kamu Telah menghapus role** `JAWA TIMUR`')
      }
       if (option.match("hapus jawa tengah")) {

    let role1 = message.guild.roles.find('name', '•Jawa Tengah•');
    user.removeRole(role1.id)
    message.reply('**⛔ Kamu Telah menghapus role** `JAWA TENGAH`')
      }
       if (option.match("hapus jambi")) {

    let role1 = message.guild.roles.find('name', '•Jambi•');
    user.removeRole(role1.id)
    message.reply('**⛔ Kamu Telah menghapus role** `JAMBI`')
      }
       if (option.match("hapus sumatra")) {

    let role1 = message.guild.roles.find('name', '•Sumatra•');
    user.removeRole(role1.id)
    message.reply('**⛔ Kamu Telah menghapus role** `SUMATRA`')
      }
       if (option.match("hapus jakarta")) {

    let role1 = message.guild.roles.find('name', '•Jakarta•');
    user.removeRole(role1.id)
    message.reply('**⛔ Kamu Telah menghapus role** `JAKARTA`')
      }
       if (option.match("hapus sulawesi")) {

    let role1 = message.guild.roles.find('name', '•Sulawesi•');
    user.removeRole(role1.id)
    message.reply('**⛔ Kamu Telah menghapus role** `SULAWESI`')
      }
}
}




/*const Discord = require('discord.js'),
      db = require('quick.db'),
      ms = require('parse-ms');
module.exports.run = async (bot, message, args) => {
var optionRaw = args.slice(0).join(" ");
var option = optionRaw.toLocaleLowerCase();
  
const targetBalance = await db.fetch(`userBalance_${message.author.id}`),
startBalance = 0; 
let user = message.member;
if (!args[0]) {
  message.channel.send(`
**List role yang bisa kamu beli dengan credit \`Nobita\` :**
\`[-]\`**MVP VVIP : \`80.000 💵\`**
\`[-]\`**pereman Server : \`50.000 💵\`**

**Ketikan: **\`..Buy <nama role diatas>\`

**Ayo kumpulkan Credit Cono kamu sekarang !!**
`)
}
      if (option.match("test")) {
message.channel.send('test')
      }
      if (option.match("mvp vvip")) {

let r1 = parseInt(50000);
    if (targetBalance === null === 0) targetBalance = startBalance;
    if (r1 > targetBalance) return message.channel.send(`${message.author}`+'**Credit yang kamu miliki tidak mencukupi.**');
      let role1 = message.guild.roles.find('name', 'MVP VVIP');
    user.addRole(role1.id)
    db.subtract(`userBalance_${message.author.id}`, r1);
    message.reply('**Terima kasih kamu telah membeli** `@MVP VVIP`')
      }
if (option.match("pereman server")) {

let r2 = parseInt(80000);
    if (targetBalance === null === 0) targetBalance = startBalance;
    if (r2> targetBalance) return message.channel.send(`${message.author}`+'**Credit yang kamu miliki tidak mencukupi.**');
      let role2 = message.guild.roles.find('name', 'pereman Server');
    user.addRole(role2.id)
    db.subtract(`userBalance_${message.author.id}`, r2);
    message.reply('**Terima kasih kamu telah membeli** `pereman Server`')
      }
}*/