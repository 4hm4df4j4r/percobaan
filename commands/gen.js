const { Canvas } = require("canvas-constructor"); // You can't make images without this.
const { resolve, join } = require("path"); // This is to get a font file.
const { Attachment } = require("discord.js"); // This is to send the image via discord.
const { get } = require("snekfetch");
const superagent = require("superagent");
const fs = require("fs");
const db = require('quick.db');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

var optionRaw = args.slice(0).join(" ");
var option = optionRaw.toLocaleLowerCase();
                           if (option.match("avatar")) {
    async function createCanvas() {
var {body: avatar} = await superagent.get(message.author.displayAvatarURL);
var {body: background} = await superagent.get(`https://cdn.discordapp.com/attachments/531398782433230848/536495314308169739/e7a3b51fdac2aa5ec71975d257d5c405.png`);

      return new Canvas(279, 281)
      .setColor('#00f2fd')
      .setTextFont('bold 20px Courier New')
      .addImage(avatar, 9, 10, 260, 260)
      .addImage(background, 0, 0, 279, 281)
      .toBufferAsync();
    }
  message.channel.send(`${message.author.username} **Berhasil di generator !!**`,{
  files: [{
    attachment: await createCanvas(),
    name: 'Team Simple Coding.png'
  }] })
 
}
  
}

module.exports.help ={
    name: "tf"
}