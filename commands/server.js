const Discord = require('discord.js'),
      db = require('quick.db'),
      ms = require('parse-ms');
module.exports.run = async (bot, message, args) => {
if (message.channel.id === '544508149999337472') {

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
**Halo selamat datang di Discord Nusantara**
Kami update dengan server Bungecord teman - teman
yang dimana server game dan server lain dibedakan disini
silahkan ikuti tutorial dibawah untuk membuka server.

**🔏 List Server Nusantara:**

🌐 **Nongkrong**
Tempat member - member bermain atau bisa dibilang
berdiskusi dan mengobrol bareng, santai - santai.

🌐 **Game**
Tempat member - member bermain game
disini memiliki 3 game silahkan masuk untuk melihat.

🌐 **Robot**
Tempat bermain robot + generator
ada ambil roles + ganti nama + instagram dll.



**Contoh:**
** >server ** \`nongkrong\`
** >server <nama>**


🔒Nusantara Menggunakan System Bungeecord 🔒

`)
      .setColor("#00f2fd")
         .setImage('https://cdn.discordapp.com/attachments/541957479370719235/545161365258633220/Screenshot_9.png')
      message.channel.send(sembed);
     }

      if (option.match("nongkrong")) {

    let role1 = message.guild.roles.find('name', '🔑 Server Game 🔑');
    let role2 = message.guild.roles.find('name', '🔑 Server Nongkrong 🔑');
    let role3 = message.guild.roles.find('name', '🔑 Server Robot 🔑');

    user.addRole(role2.id)
    await user.removeRole(role1.id)
    await user.removeRole(role3.id)
    const ListEmbed1 = new Discord.RichEmbed()
            .setTitle('Server Nusantara')
            .setDescription(`
**Nama:**${message.author}
**:ballot_box_with_check: Kamu telah masuk server ** \`🌍 Nongkrong 🌍\``)
            .setThumbnail('https://cdn.discordapp.com/attachments/541957479370719235/545159222204301312/Screenshot_6.png')
      .setColor("#2cbfec")
    message.channel.send(ListEmbed1).then(msg => {
    msg.delete(10000)}) 
      }
      if (option.match("game")) {

    let role1 = message.guild.roles.find('name', '🔑 Server Game 🔑');
    let role2 = message.guild.roles.find('name', '🔑 Server Nongkrong 🔑');
    let role3 = message.guild.roles.find('name', '🔑 Server Robot 🔑');

    user.addRole(role1.id)
    await user.removeRole(role2.id)
    await user.removeRole(role3.id)
    const ListEmbed2 = new Discord.RichEmbed()
            .setTitle('Server Nusantara')
            .setDescription(`
**Nama:**${message.author}
**:ballot_box_with_check: Kamu telah masuk server ** \`🌍 Game 🌍\``)
            .setThumbnail('https://cdn.discordapp.com/attachments/541957479370719235/545159222204301312/Screenshot_6.png')
      .setColor("#2cbfec")
    message.channel.send(ListEmbed2).then(msg => {
    msg.delete(10000)})      }

      if (option.match("robot")) {

    let role1 = message.guild.roles.find('name', '🔑 Server Game 🔑');
    let role2 = message.guild.roles.find('name', '🔑 Server Nongkrong 🔑');
    let role3 = message.guild.roles.find('name', '🔑 Server Robot 🔑');

    user.addRole(role3.id)
    await user.removeRole(role2.id)
    await user.removeRole(role1.id)
    const ListEmbed2 = new Discord.RichEmbed()
            .setTitle('Server Nusantara')
            .setDescription(`
**Nama:**${message.author}
**:ballot_box_with_check: Kamu telah masuk server ** \`🌍 Robot 🌍\``)
            .setThumbnail('https://cdn.discordapp.com/attachments/541957479370719235/545159222204301312/Screenshot_6.png')
      .setColor("#2cbfec")
    message.channel.send(ListEmbed2).then(msg => {
    msg.delete(10000)})      }
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