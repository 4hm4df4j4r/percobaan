 const Discord = require('discord.js');
const fs = require("fs");

exports.run = async (bot, message, args, member) => {
let roleID = message.guild.roles.find(role => role.name === "Developer");
if(message.member.roles.has(roleID.id)) {

              var pendaftaran = JSON.parse(fs.readFileSync("./pendaftaran.json", "utf8"))

let idb = pendaftaran[message.author.id].id;
let prefixs = pendaftaran[message.author.id].prefix;
let pemiliks = pendaftaran[message.author.id].pemilik;
let test = new Discord.RichEmbed()
      .setDescription(`**📰 Kartu pengenal\`Simple Coding\`**

**🛰 NAMA :** ${message.author.username}

**Misi:**
Membantu sesuai kemampuan saya kepada member yang 
ingin belajar selalu merespon dan memberi solusi 
kepada member yang kebingungan.

Saya sebagai **Team Simple Coding** Siap melayani anda. 🙌

**Member resmi !! Simple Coding 💻**`)

      .setColor("#ff0000")
  .setImage('https://cdn.discordapp.com/attachments/531384992442613760/535097555747340299/ax.png');
      message.channel.send(test);

} else {
  let embed = new Discord.RichEmbed()
  .setDescription("🚫 Kamu bukan developer `Simple Coding` ")
  .setColor("#ff0000");
  message.channel.send(embed);
}
}