const { Canvas } = require("canvas-constructor"); // You can't make images without this.
const { resolve, join } = require("path"); // This is to get a font file.
const { Attachment } = require("discord.js"); // This is to send the image via discord.
const { get } = require("snekfetch");
const superagent = require("superagent");
const fs = require("fs");
const ms = require('parse-ms');
const db = require('quick.db');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
if (message.channel.id === '545202371685253122') {
let cooldown = 0.004e+7; // 24 Часа
let lastDailyinv = await db.fetch(`lastDailyyinv_${message.author.id}`);
    if (lastDailyinv !== null && cooldown - (Date.now() - lastDailyinv) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDailyinv));

message.channel.send(`\`${message.author.username}\` **Tunggu dalam waktu\`${timeObj.seconds} detik\` untuk membut gambar kembali**!`)

    }else {
db.set(`lastDailyyinv_${message.author.id}`, Date.now());
var optionRaw = args.slice(0).join(" ");
var option = optionRaw.toLocaleLowerCase();
                           if (!option) {
message.channel.send(`
**Pilihan Warna:**
• !avatar bawaan
• !avatar hitam
• !avatar biru 
• !avatar abu abu
• !avatar merah
• !avatar hijau
• !avatar pink
• !avatar kuning
• !avatar coklat
• !avatar ungu



**Silahkan kamu pilih 😎** `)
                           }

                           if (option.match("bawaan")) {

    async function createCanvas() {
var {body: avatar} = await superagent.get(message.author.displayAvatarURL);
var {body: background} = await superagent.get(`https://cdn.discordapp.com/attachments/539092370357223482/540531637700788234/kode111.png`);

      return new Canvas(279, 281)
      .setColor('#ff0000')
      .setTextFont('bold 20px Courier New')
      .addImage(avatar, 9, 10, 260, 260)
      .addImage(background, 0, 0, 279, 281)
      .toBufferAsync();
    }
  message.channel.send(`🖨 Sudah berhasil dibuat \`${message.author.username}\` \nSilahkan gunakan avatar ini untuk menjadi Team 👊.`,{
  files: [{
    attachment: await createCanvas(),
    name: 'Team Nusantara.png'
  }] })
 
                           }

                           if (option.match("hitam")) {

    async function createCanvas() {
var {body: avatar} = await superagent.get(message.author.displayAvatarURL);
var {body: background} = await superagent.get(`https://cdn.discordapp.com/attachments/539092370357223482/540532779419566084/kode115.png`);

      return new Canvas(279, 281)
      .setColor('#ff0000')
      .setTextFont('bold 20px Courier New')
      .addImage(avatar, 9, 10, 260, 260)
      .addImage(background, 0, 0, 279, 281)
      .toBufferAsync();
    }
  message.channel.send(`🖨 Sudah berhasil dibuat \`${message.author.username}\` \nSilahkan gunakan avatar ini untuk menjadi Team 👊.`,{
  files: [{
    attachment: await createCanvas(),
    name: 'Team Nusantara.png'
  }] })
 
                           }

                           if (option.match("biru")) {

    async function createCanvas() {
var {body: avatar} = await superagent.get(message.author.displayAvatarURL);
var {body: background} = await superagent.get(`https://cdn.discordapp.com/attachments/539092370357223482/540532533767569419/kode114.png`);

      return new Canvas(279, 281)
      .setColor('#ff0000')
      .setTextFont('bold 20px Courier New')
      .addImage(avatar, 9, 10, 260, 260)
      .addImage(background, 0, 0, 279, 281)
      .toBufferAsync();
    }
  message.channel.send(`🖨 Sudah berhasil dibuat \`${message.author.username}\` \nSilahkan gunakan avatar ini untuk menjadi Team 👊.`,{
  files: [{
    attachment: await createCanvas(),
    name: 'Team Nusantara.png'
  }] })
 
                           }

                           if (option.match("abu abu")) {

    async function createCanvas() {
var {body: avatar} = await superagent.get(message.author.displayAvatarURL);
var {body: background} = await superagent.get(`https://cdn.discordapp.com/attachments/539092370357223482/540532992209190932/kode116.png`);

      return new Canvas(279, 281)
      .setColor('#ff0000')
      .setTextFont('bold 20px Courier New')
      .addImage(avatar, 9, 10, 260, 260)
      .addImage(background, 0, 0, 279, 281)
      .toBufferAsync();
    }
  message.channel.send(`🖨 Sudah berhasil dibuat \`${message.author.username}\` \nSilahkan gunakan avatar ini untuk menjadi Team 👊.`,{
  files: [{
    attachment: await createCanvas(),
    name: 'Team Nusantara.png'
  }] })
 
                           }

                           if (option.match("merah")) {

    async function createCanvas() {
var {body: avatar} = await superagent.get(message.author.displayAvatarURL);
var {body: background} = await superagent.get(`https://cdn.discordapp.com/attachments/539092370357223482/540531921264967682/kode112.png`);

      return new Canvas(279, 281)
      .setColor('#ff0000')
      .setTextFont('bold 20px Courier New')
      .addImage(avatar, 9, 10, 260, 260)
      .addImage(background, 0, 0, 279, 281)
      .toBufferAsync();
    }
  message.channel.send(`🖨 Sudah berhasil dibuat \`${message.author.username}\` \nSilahkan gunakan avatar ini untuk menjadi Team 👊.`,{
  files: [{
    attachment: await createCanvas(),
    name: 'Team Nusantara.png'
  }] })
 
                           }

                           if (option.match("hijau")) {

    async function createCanvas() {
var {body: avatar} = await superagent.get(message.author.displayAvatarURL);
var {body: background} = await superagent.get(`https://cdn.discordapp.com/attachments/539092370357223482/540532122004226048/kode113.png`);

      return new Canvas(279, 281)
      .setColor('#ff0000')
      .setTextFont('bold 20px Courier New')
      .addImage(avatar, 9, 10, 260, 260)
      .addImage(background, 0, 0, 279, 281)
      .toBufferAsync();
    }
  message.channel.send(`🖨 Sudah berhasil dibuat \`${message.author.username}\` \nSilahkan gunakan avatar ini untuk menjadi Team 👊.`,{
  files: [{
    attachment: await createCanvas(),
    name: 'Team Nusantara.png'
  }] })
 
                           }

                           if (option.match("pink")) {

    async function createCanvas() {
var {body: avatar} = await superagent.get(message.author.displayAvatarURL);
var {body: background} = await superagent.get(`https://cdn.discordapp.com/attachments/539092370357223482/540533503033606144/kode117.png`);

      return new Canvas(279, 281)
      .setColor('#ff0000')
      .setTextFont('bold 20px Courier New')
      .addImage(avatar, 9, 10, 260, 260)
      .addImage(background, 0, 0, 279, 281)
      .toBufferAsync();
    }
  message.channel.send(`🖨 Sudah berhasil dibuat \`${message.author.username}\` \nSilahkan gunakan avatar ini untuk menjadi Team 👊.`,{
  files: [{
    attachment: await createCanvas(),
    name: 'Team Nusantara.png'
  }] })
 
                           }

                           if (option.match("kuning")) {

    async function createCanvas() {
var {body: avatar} = await superagent.get(message.author.displayAvatarURL);
var {body: background} = await superagent.get(`https://cdn.discordapp.com/attachments/539092370357223482/540533781958754334/kode118.png`);

      return new Canvas(279, 281)
      .setColor('#ff0000')
      .setTextFont('bold 20px Courier New')
      .addImage(avatar, 9, 10, 260, 260)
      .addImage(background, 0, 0, 279, 281)
      .toBufferAsync();
    }
  message.channel.send(`🖨 Sudah berhasil dibuat \`${message.author.username}\` \nSilahkan gunakan avatar ini untuk menjadi Team 👊.`,{
  files: [{
    attachment: await createCanvas(),
    name: 'Team Nusantara.png'
  }] })
 
                           }

                           if (option.match("coklat")) {

    async function createCanvas() {
var {body: avatar} = await superagent.get(message.author.displayAvatarURL);
var {body: background} = await superagent.get(`https://cdn.discordapp.com/attachments/539092370357223482/540534037467627537/kode119.png`);

      return new Canvas(279, 281)
      .setColor('#ff0000')
      .setTextFont('bold 20px Courier New')
      .addImage(avatar, 9, 10, 260, 260)
      .addImage(background, 0, 0, 279, 281)
      .toBufferAsync();
    }
  message.channel.send(`🖨 Sudah berhasil dibuat \`${message.author.username}\` \nSilahkan gunakan avatar ini untuk menjadi Team 👊.`,{
  files: [{
    attachment: await createCanvas(),
    name: 'Team Nusantara.png'
  }] })
 
                           }
  
                             if (option.match("ungu")) {

    async function createCanvas() {
var {body: avatar} = await superagent.get(message.author.displayAvatarURL);
var {body: background} = await superagent.get(`https://cdn.discordapp.com/attachments/539092370357223482/540535402080108546/kode121.png`);

      return new Canvas(279, 281)
      .setColor('#ff0000')
      .setTextFont('bold 20px Courier New')
      .addImage(avatar, 9, 10, 260, 260)
      .addImage(background, 0, 0, 279, 281)
      .toBufferAsync();
    }
  message.channel.send(`🖨 Sudah berhasil dibuat \`${message.author.username}\` \nSilahkan gunakan avatar ini untuk menjadi Team 👊.`,{
  files: [{
    attachment: await createCanvas(),
    name: 'Team Nusantara.png'
  }] })
 
                           }

    }



}
  
}

module.exports.help ={
    name: "bit"
}