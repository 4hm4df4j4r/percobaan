 const Discord = require('discord.js');
const { Canvas } = require("canvas-constructor"); // You can't make images without this.
const { get } = require("snekfetch");
const fs = require("fs");
const superagent = require("superagent");

exports.run = async (bot, message, args) => {
            if (!message.member.hasPermission("MANAGE_GUILD")) return message.reply("Maaf, Anda tidak memiliki akses **Manage_Server** untuk melakukanya!");

            var namam = message.author.username
            var jadim = namam.length > 12 ? namam.substring(0, 10) + "..." : namam;
            async function createCanvas() {
            var imageUrlRegex = /\?size=2048$/g;
             // let image = JSON.parse(fs.readFileSync("./image.json", "utf8"))
      var backgrounds = JSON.parse(fs.readFileSync("./image.json", "utf8"))
      if (!backgrounds[message.guild.id]){
        backgrounds[message.guild.id] = {
backgrounds: "https://i.pinimg.com/originals/d6/fd/c8/d6fdc83f651e1c1460625cd25da61cd0.jpg"
};
}
           let gambar = backgrounds[message.guild.id].backgrounds;

      var warnawelcomes = JSON.parse(fs.readFileSync("./warnawelcome.json", "utf8"))
      if (!warnawelcomes[message.guild.id]){
        warnawelcomes[message.guild.id] = {
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
              
           let warnawel = warnawelcomes[message.guild.id].warna;
      let warnawel1 = warnawelcomes[message.guild.id].warna
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
            var {body: avatar} = await superagent.get(message.author.displayAvatarURL.replace(imageUrlRegex, "?size=128"));

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

  
      var text1 = JSON.parse(fs.readFileSync("./imgtext.json", "utf8"))
      if (!text1[message.guild.id]){
        text1[message.guild.id] = {
kata: `Selamat Datang !! yang baru masuk, silahkan setting: >welcomeimg `
};
}
           let text2 = text1[message.guild.id].backgrounds;

  message.channel.send(`
**Halo,** ${message.author} selamat datang di **${message.guild.name}**

${text2}

`,{
  files: [{
    attachment: await createCanvas(),
    name: 'Gobang Welcome.jpg'
  }] })
}
