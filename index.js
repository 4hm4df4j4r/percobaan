const Discord = require("discord.js");
const music = new Discord.Client({disableEveryone: true});
music.commands = new Discord.Collection();
const {color} = require('./config.json');
const config = require("./config.json");
const queue = new Map();
const fs = require("fs");
const superagent = require("superagent");
let {cooldown} = require("./cooldown.js")
const { Canvas } = require("canvas-constructor"); // You can't make images without this.
let commandcooldown = cooldown;

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log('Pinging');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

music.on('message', async message => {

if(message.author.bot) return;
    if(message.channel.type === "dm") return;
	
	let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
	
	if(!prefixes[message.guild.id]){
		prefixes[message.guild.id] = {
			prefixes: config.prefix
			
		};
	}
	let prefix = prefixes[message.guild.id].prefixes;
    
    let msg = message.content.toLowerCase();
    let args = message.content.slice(prefix.length).trim().split(" ");
    let cmd = args.shift().toLowerCase();
  
  if(!message.content.startsWith(prefix)) return undefined;
  message.prefix = prefix;

   if (!msg.startsWith(prefix)) return;
   if (commandcooldown.has(message.author.id)) {
      return message.channel.send(`**Please wait for **\`2 seconds\` **so that there is no spam.**`).then(msg => msg.delete(2000));
      }
      commandcooldown.add(message.author.id);
      setTimeout(() => {
        commandcooldown.delete(message.author.id);
      }, 2000);
    
    try {
        let commandFile = require(`./commands/${cmd}.js`); 
        commandFile.run(music, message, args, color, queue); 
    } catch(e) { 
        console.log(e.message); 
    } finally { 
        console.log(`${message.author.username} ran the command: ${cmd} on ${message.guild.name}`);
    }
if (cmd === "quotesstart") {
message.channel.send('woe')
}
});

music.login(process.env.TOKEN);

music.on("ready", async () => {


function botStatus() {
  let status = [
`👋 Use ${config.prefix}help.`,
`🌍 in ${music.guilds.size} server.`,
`🛵 GO TO NEOOO`,
`👥 used ${music.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} users.`
  ];
  let rstatus = Math.floor(Math.random() * status.length);
  music.user.setActivity(status[rstatus], {Type: 'STREAMING', url:'https://www.twitch.tv/verterid'});
}; setInterval(botStatus, 10000)

    console.log(`Logged in as : ${music.user.tag}`);
    console.log(`${music.user.username} is ready!`)
});


music.on('message', async (simi2)  => {
const pokeself = [
        ` ${simi2.author} masuk voice aja panggil, gak usah tag`,
        ` ${simi2.author} sudah saya bilang jangan tag !!`,
        ` ${simi2.author} eh buset masuk voice gausah tag`,
        ` ${simi2.author} heree reee bijik masuk voice aja tag molo dah`,

    ]
let result = Math.floor((Math.random() * pokeself.length));

    var simikm3 = `<@!467298098096635934>-`;
if(simi2.content.toLowerCase().includes(simikm3)) {
         simi2.channel.send(`\`Verter System:
\`**${pokeself[result]}**`).then(msg => {msg.delete(10000)})
  simi2.delete(2000)
}
})

music.on('message', async (simi2)  => {
const pokeself = [
        ` ${simi2.author} saya lagi sama cewe kiw sutt kwiww`,
        ` ${simi2.author} anda ini ganggu mulu saya lagi ena ena :P`,
        ` ${simi2.author} hey hey yatno hey yatno`,
        ` ${simi2.author} haha kamu ketauan tag saya !! Saya gedik nanti https://bit.ly/2Fl9G4p`,


    ]
let result = Math.floor((Math.random() * pokeself.length));

    var simikm3 = `<@!380694582582706178>-`;
if(simi2.content.toLowerCase().includes(simikm3)) {
         simi2.channel.send(`\`Khensin System:
\`**${pokeself[result]}**`).then(msg => {msg.delete(10000)})
  simi2.delete(2000)
}
})

music.on('message', async (simi2)  => {
const pokeself = [
        ` ${simi2.author} lagi gak mau di ganggu`,


    ]
let result = Math.floor((Math.random() * pokeself.length));

    var simikm3 = `<@!511527677056909323>-`;
if(simi2.content.toLowerCase().includes(simikm3)) {
         simi2.channel.send(`\`Icha System:
\`**${pokeself[result]}**`).then(msg => {msg.delete(10000)})
  simi2.delete(2000)
}
})

music.on("guildMemberAdd", member => {
  let guild = member.guild;
  let serverlist = JSON.parse(fs.readFileSync("./serverlist.json", "utf8"));
  if(!serverlist[member.guild.id]) return;
  
   var serverlistsetting = JSON.parse(fs.readFileSync("./serverlistsetting.json", "utf8"));
    if (!serverlistsetting[member.guild.id]) {
     serverlistsetting[member.guild.id] = {
      values: 1
      };
    }
  
    var values = serverlistsetting[member.guild.id].checker
  
    if (values === undefined) return;
    if (values === 0) return;
    if (values === 1) {

    let guild = member.guild;
    let count = guild.memberCount;
    let total = member.guild.channels.get(`${serverlist[member.guild.id].server}`);  

     total.setName(`👥 ${count} Anggota 👥`)

    }

})

music.on("guildMemberRemove", member => {
 let guild = member.guild;
  let serverlist = JSON.parse(fs.readFileSync("./serverlist.json", "utf8"));
  if(!serverlist[member.guild.id]) return;
  
   var serverlistsetting = JSON.parse(fs.readFileSync("./serverlistsetting.json", "utf8"));
    if (!serverlistsetting[member.guild.id]) {
     serverlistsetting[member.guild.id] = {
      values: 1
      };
    }
  
    var values = serverlistsetting[member.guild.id].checker
  
    if (values === undefined) return;
    if (values === 0) return;
    if (values === 1) {

    let guild = member.guild;
    let count = guild.memberCount;
    let total = member.guild.channels.get(`${serverlist[member.guild.id].server}`);  

     total.setName(`👥 ${count} Anggota 👥`)

    }


})

music.on('guildMemberAdd', async member => {
  let guild = member.guild;
  let autonick = JSON.parse(fs.readFileSync("./autonick.json", "utf8"));
  if(!autonick[member.guild.id]) return;
  
   var autonicksetting = JSON.parse(fs.readFileSync("./autonickonoff.json", "utf8"));
    if (!autonicksetting[member.guild.id]) {
     autonicksetting[member.guild.id] = {
      values: 1
      };
    }
  
    var values = autonicksetting[member.guild.id].checker
  
    if (values === undefined) return;
    if (values === 0) return;
    if (values === 1) {
      let newNick = `${autonick[member.guild.id].nick} ${member.user.username}`
      member.guild.members.get(`${member.user.id}`).setNickname(newNick)
    }
});
music.on("guildMemberAdd", member => {
  let role = member.guild.roles.find("name", '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬');
	if (!role) return; // jika autorole 0 maka akan dihentikan dan tidak menyebabkan error
	member.addRole(role);
});

music.on("guildMemberAdd", member => {
	let autorole = JSON.parse(fs.readFileSync("./autoroles.json", "utf8"));
	if (!autorole[member.guild.id]) { // jika tidak ada autorole yang di set, agar tidak error saat ada yang join
		autorole[member.guild.id] = {
			autorole: config.autorole
		};
	}
	var role = autorole[member.guild.id].role;
	if (!role) return; // jika autorole 0 maka akan dihentikan dan tidak menyebabkan error
	member.addRole(role);
});


////////////////////PINTU MASUK//////////////////////

/*music.on('message', async (simi2)  => {
	let pintumasuk = JSON.parse(fs.readFileSync("./pintumasukkata.json", "utf8"));
      if (!pintumasuk[simi2.guild.id]){
        pintumasuk[simi2.guild.id] = {
kata: "saya siap untuk bergabung"};
}
	var masuk = pintumasuk[simi2.guild.id].kata;

    var simikm3 = `${masuk}`;

if(simi2.content.toLowerCase().includes(simikm3)) {
	let pintumasukchannel = JSON.parse(fs.readFileSync("./pintumasukchannel.json", "utf8"));
      if (!pintumasukchannel[simi2.guild.id]){
        pintumasukchannel[simi2.guild.id] = {
channel: "553610872564482057"};
}
	var channels = pintumasukchannel[simi2.guild.id].channel;
if (simi2.channel.id === `${channels}`) {
  let test = simi2.guild.roles.find("name", 'Verify');
await  simi2.member.addRole(test)
simi2.member.setNickname(`⚙ ${simi2.author.username}`)

      let sembed = new Discord.RichEmbed()
      .setDescription(`${simi2.author} Kamu berhasil masuk pada server **${simi2.guild.name}**`)
      .setColor("#fc0000");
      simi2.author.sendMessage(sembed).then(msg => {
    msg.delete(20000)
  })
}
}
})*/
////////////////////////////////////////////////////////

/*music.on('guildMemberAdd', async member => {
  let test = member.guild.channels.get('556810077265461283')
      let sembed = new Discord.RichEmbed()
      .setDescription(`**${member.user.username}** Hai, salam kenal member baru 😍`)
      .setColor("#0aaaeb");
      test.send(sembed);
})

music.on('guildMemberRemove', async member => {
  let test = member.guild.channels.get('556810077265461283')
      let sembed = new Discord.RichEmbed()
      .setDescription(`**${member.user.username}** Selamat Tinggal`)
      .setColor("#0aaaeb");
      test.send(sembed);
})*/

music.on("guildMemberAdd", async member => {  
            var namam = member.user.username
            var jadim = namam.length > 12 ? namam.substring(0, 10) + "..." : namam;
            async function createCanvas() {
            var imageUrlRegex = /\?size=2048$/g;
             // let image = JSON.parse(fs.readFileSync("./image.json", "utf8"))
      var backgrounds = JSON.parse(fs.readFileSync("./image.json", "utf8"))
      if (!backgrounds[member.guild.id]){
        backgrounds[member.guild.id] = {
backgrounds: "https://i.pinimg.com/originals/d6/fd/c8/d6fdc83f651e1c1460625cd25da61cd0.jpg"
};
}
           let gambar = backgrounds[member.guild.id].backgrounds;

      var warnawelcomes = JSON.parse(fs.readFileSync("./warnawelcome.json", "utf8"))
      if (!warnawelcomes[member.guild.id]){
        warnawelcomes[member.guild.id] = {
warna: "biru"
};
}

const pokeself = [
        `https://cdn.discordapp.com/attachments/564076390568296460/564105264198975523/Welcome.png`,
        `https://cdn.discordapp.com/attachments/564076390568296460/564104433592434696/Welcome-pink.png`,
        `https://cdn.discordapp.com/attachments/564076390568296460/564104432929996800/welcome-merah.png`,
        `https://cdn.discordapp.com/attachments/564076390568296460/564104431692546052/Welcome-kuning.png`,
        `https://cdn.discordapp.com/attachments/564076390568296460/564104430564409344/Welcome-ijo.png`

    ]

let gambartampil = Math.floor((Math.random() * pokeself.length));


           let warnawel = warnawelcomes[member.guild.id].warna;
      let warnawel1 = warnawelcomes[member.guild.id].warna
      warnawel1 = warnawel1.replace('biru', 'https://cdn.discordapp.com/attachments/564076390568296460/564105264198975523/Welcome.png')
      warnawel1 = warnawel1.replace('pink', 'https://cdn.discordapp.com/attachments/564076390568296460/564104433592434696/Welcome-pink.png')
      warnawel1 = warnawel1.replace('merah', 'https://cdn.discordapp.com/attachments/564076390568296460/564104432929996800/welcome-merah.png')
      warnawel1 = warnawel1.replace('kuning', 'https://cdn.discordapp.com/attachments/564076390568296460/564104431692546052/Welcome-kuning.png')
      warnawel1 = warnawel1.replace('hijau', 'https://cdn.discordapp.com/attachments/564076390568296460/564104430564409344/Welcome-ijo.png')
      warnawel1 = warnawel1.replace('blue', 'https://cdn.discordapp.com/attachments/564076390568296460/564105264198975523/Welcome.png')
      warnawel1 = warnawel1.replace('pink', 'https://cdn.discordapp.com/attachments/564076390568296460/564104433592434696/Welcome-pink.png')
      warnawel1 = warnawel1.replace('red', 'https://cdn.discordapp.com/attachments/564076390568296460/564104432929996800/welcome-merah.png')
      warnawel1 = warnawel1.replace('yellow', 'https://cdn.discordapp.com/attachments/564076390568296460/564104431692546052/Welcome-kuning.png')
      warnawel1 = warnawel1.replace('green', 'https://cdn.discordapp.com/attachments/564076390568296460/564104430564409344/Welcome-ijo.png')
      warnawel1 = warnawel1.replace('rainbow', `${pokeself[gambartampil]}`)

            var {body: background} = await superagent.get(`${warnawel1}`);
            var {body: background1} = await superagent.get(`${gambar}`);
            var {body: avatar} = await superagent.get(member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128"));

            return new Canvas(856, 376)
              .setColor('white')
              .setTextAlign('center')
              .setTextFont('bold 40px System')
              .addImage(background1, 0, 0, 856, 376)
              .addImage(background, 0, 0, 856, 376)
             // .addText("Goodbye", 260, 325)
              .addText(`${jadim}`, 165, 350)
              .addRoundImage(avatar, 30, 20, 256, 256, 128)
              .toBufferAsync();
            }
  var welcome = JSON.parse(fs.readFileSync("./welcome.json", "utf8"))
 let welcomesetting = JSON.parse(fs.readFileSync("./welcomeonoff.json", "utf8"));
     if (!welcomesetting[member.guild.id]) {
    welcomesetting[member.guild.id] = {
     values: 1
      };
    }

    if(!welcome[member.guild.id]) return;  
    let values = welcomesetting[member.guild.id].checker
  
    if (values === undefined) return;
    if (values === 0) return;
    if (values === 1) {
    var welcome = JSON.parse(fs.readFileSync("./welcome.json", "utf8"))
    if (!welcome) return;
    let channel = member.guild.channels.get(`${welcome[member.guild.id].nick}`);
    if (!channel) return;


      var text1 = JSON.parse(fs.readFileSync("./imgtext.json", "utf8"))
      if (!text1[member.guild.id]){
        text1[member.guild.id] = {
kata: `Welcome !! who just entered, please set: >welcomeimg `
};
}
           let text2 = text1[member.guild.id].backgrounds;

  channel.send(`
**Halo,** ${member} selamat datang di **${member.guild.name}**

${text2}

`,{
  files: [{
    attachment: await createCanvas(),
    name: 'Gobang Welcome.jpg'
  }] })
  }
});








/*
music.on("guildMemberRemove", async member => {  
            var namam = member.user.username
            var jadim = namam.length > 12 ? namam.substring(0, 10) + "..." : namam;
            async function createCanvas() {
            var imageUrlRegex = /\?size=2048$/g;
              let image = JSON.parse(fs.readFileSync("./image.json", "utf8"))

            var {body: background} = await superagent.get(`https://cdn.discordapp.com/attachments/557169647321874432/558291465307029504/test.png`);
            var {body: avatar} = await superagent.get(member.user.displayAvatarURL.replace(imageUrlRegex, "?size=128"));

            return new Canvas(856, 376)
              .addImage(avatar, 100, 50, 256, 256, 128)
      .setColor('#ff0000')
              .setTextFont('50px System')
              .setTextAlign('center')
              .setTextFont('bold 30px Arial')
              .addImage(background, 0, 0, 856, 376)
              .addText("Goodbye", 260, 325)
              .addText(`${jadim}#${member.user.discriminator}`, 165, 350)
              .addRoundImage(avatar, 110, 50, 256, 256, 128)
              .toBufferAsync();
            }
  var welcome = JSON.parse(fs.readFileSync("./welcome.json", "utf8"))
 let welcomesetting = JSON.parse(fs.readFileSync("./welcomeonoff.json", "utf8"));
     if (!welcomesetting[member.guild.id]) {
    welcomesetting[member.guild.id] = {
     values: 1
      };
    }

    if(!welcome[member.guild.id]) return;  
    let values = welcomesetting[member.guild.id].checker
  
    if (values === undefined) return;
    if (values === 0) return;
    if (values === 1) {
    var welcome = JSON.parse(fs.readFileSync("./welcome.json", "utf8"))
    if (!welcome) return;
    let channel = member.guild.channels.get(`${welcome[member.guild.id].nick}`);
    if (!channel) return;
  channel.send(`\`\`\`css
Selamat Tinggal :( ${member.user.username} Sampai jumpa kembali!!\`\`\``,{
  files: [{
    attachment: await createCanvas(),
    name: 'Nusantara Goodbye.jpg'
  }] })
  }
});*/

