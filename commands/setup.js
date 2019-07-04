const Discord = require('discord.js');
const fs = require("fs");

module.exports.run = async (bot, message, args) => {
var optionRaw = args.slice(0).join(" ");
var option = optionRaw.toLocaleLowerCase();
  
  if(!option) {
//--------------------------------------------------------------------
let dembed = new Discord.RichEmbed()
.addField('Help with the settings command',`

**Line Role:**
\`${message.prefix}setup line role\`
\`${message.prefix}setup line tutorial\`

**Pintu Masuk:**
\`${message.prefix}setup pintumasuk set kunci\`
\`${message.prefix}setup pintumasuk set channel\`


`)
.setColor('#0aaaeb')
//--------------------------------------------------------------------
message.channel.send(dembed) // Area kirim chat
//--------------------------------------------------------------------

  }


if (option.match('pintumasuk set kunci')) {

            var pintu = JSON.parse(fs.readFileSync("./pintumasukkata.json", "utf8"))
            if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Kamu tidak memiliki permission!");
            var inputmessage = args.slice(3).join(" ")
            if (args[0]) {
              pintu[message.guild.id] = {
                kata: inputmessage
             };
              fs.writeFile("./pintumasukkata.json", JSON.stringify(pintu), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#0aaaeb")
              .setDescription(`Kamu menyeting katasandi server: **${inputmessage}**`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            

}

if (option.match('pintumasuk set channel')) {

            var pintu = JSON.parse(fs.readFileSync("./pintumasukchannel.json", "utf8"))
            if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply("Kamu tidak memiliki permission!");
            var inputmessage = message.mentions.channels.first()
            if (args[0]) {
              pintu[message.guild.id] = {
                channel: inputmessage.id
             };
              fs.writeFile("./pintumasukchannel.json", JSON.stringify(pintu), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#0aaaeb")
              .setDescription(`Pintu masuk telah di set di: **${inputmessage}**`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            

}



///////////////////////ROLE//////////////////////
if (option.match('line role')) {
  

if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embedo);

//Embed Area
//--------------------------------------------------------------------
let embedo = new Discord.RichEmbed()
.setDescription("🚫 **Anda tidak memiliki izin `Administrator`.**")
.setColor('#0aaaeb')
//--------------------------------------------------------------------
let embed2 = new Discord.RichEmbed()
.setDescription('**⚠ Sudah diatur sebelumnya, silakan periksa ** `peran server` Anda')
.setColor('#0aaaeb')
//--------------------------------------------------------------------



  let muterole = message.guild.roles.find('name', '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬');
  if (!muterole) {
    try {
      muterole = await message.guild.createRole({
        name: '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬',
        color: "#2f3136"
      })
    } catch(e) {
      console.log(e.stack);
    }


message.channel.send('🔄**: Successfully setup**');


  };
message.channel.send(embed2);
}

  if (option.match('line tutorial')) {

let embedex = new Discord.RichEmbed()
.setDescription(`
1⃣ Gunakan: \`${message.prefix}setup line role\`
2⃣ Berikan kesemua anggota secara manual

ingin memberikan secara automatis?
Silahkan donasi untuk membuka feater \`${message.prefix}setup line all member\`

**NB:** premium akan menambahkan role ke semua member.`)
.setImage('https://cdn.discordapp.com/attachments/531405072240738306/536915543807229952/unknown.png')
.setColor('#0aaaeb')

message.channel.send(embedex)
  }

if (option.match('line autorole enable')) {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embedo);

let embedo = new Discord.RichEmbed()
.setDescription("🚫 **Anda tidak memiliki izin `Administrator`.**")
.setColor('#0aaaeb')

	let autorole = JSON.parse(fs.readFileSync("./autoroleline.json", "utf8"));
		let role = message.guild.roles.find("name", '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬');
		autorole[message.guild.id] = {
			role: role.id // yang diambil hanya id nya saja
		};
		fs.writeFile("./autoroleline.json", JSON.stringify(autorole), (err) => {
			if (err) console.log(err)
		});

let embedex = new Discord.RichEmbed()
.setDescription(`
📲 jalur autorole telah diaktifkan`)
.setColor('#0aaaeb')

message.channel.send(embedex)
  }

if (option.match('line autorole disable')) {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(embedo);

let embedo = new Discord.RichEmbed()
.setDescription("🚫 **Anda tidak memiliki izin `Administrator`.**")
.setColor('#0aaaeb')

	let autorole = JSON.parse(fs.readFileSync("./autoroleline.json", "utf8"));
		let role = message.guild.roles.find("name", '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬');
		autorole[message.guild.id] = {
			role: 0// yang diambil hanya id nya saja
		};
		fs.writeFile("./autoroleline.json", JSON.stringify(autorole), (err) => {
			if (err) console.log(err)
		});

let embedex = new Discord.RichEmbed()
.setDescription(`
:mobile_phone_off: garis autorole telah dinonaktifkan `)
.setColor('#0aaaeb')

message.channel.send(embedex)
  }

if (option.match('line all member')) {
let embedo = new Discord.RichEmbed()
.setDescription(`🚫 **Server Anda tidak termasuk dalam fitur premium.**

💴 Silahkan lakukan donasi untuk membuka feature ini!!

**Donate Via Paypal: ---**

**Donate Via Pulsa:** 
• **Xl:** \`087727931895\`
• **Telkomsel:** \`081288294624\`

**List Server Premium:**
Discord Indonesia: [Klik Disini](https://discord.gg/RmYXUrS)

Hubungi **DevFian#4694** Jika telah donasi
Selalu respon !! Transaksi aman, menjual bot juga.

**NB:** Feature langsung dibuka setelah donasi.

`)
.setColor('#0aaaeb')

if (message.guild.id !== '533334708986314773') return message.channel.send(embedo);

let embedo1 = new Discord.RichEmbed()
.setDescription(`✅ **Berhasil diterapkan ke semua member.**`)
.setFooter('© Feature Premium')
.setColor('#0aaaeb')

message.channel.send(embedo1)

  }

}
module.exports.help = {
    name: "setup"
}
