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

const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require('ytdl-core');
const opus = require('opusscript');



client.on('ready', () => {
console.log('Saya siap digunakan');
client.user.setActivity(`Youtuber Only`, {Type: 'WATCHING'})
});


const prefix = 'v.'


client.on('message', async message => {

const args = message.content.slice(prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();

 if (message.content === "halo") {
message.channel.send('Hello world');
 }
 if (message.content === "indonesia") {
message.channel.send(':flag_id: ');
 }
  
  
if (command === "play") {
message.member.voiceChannel.join().then(connection => {  
console.log('Music sedang berjalan')
  const dispatcher = connection.playStream(ytdl(`${args[0]}`));
  connection.dispatcher.setVolumeLogaritchmic(1);

});
message.channel.send('**Berhasil memutar musik 🎶**')
 }

if (command === "leave") {
message.member.voiceChannel.leave()
  message.channel.send('Berhasil di keluarkan')
}
  
if (command === "help") {

  let embed = new Discord.RichEmbed()
  .setTitle('Command Help')
  .addField('Music 🎶','`Dv.play` `Dv.leave`')
  .setFooter('Belajar Coding Discord bot.')
  .setColor('BLUE')
  
  message.channel.send(embed);

}

if (command === "botinfo") {

let botembed = new Discord.RichEmbed()
.setTitle('📣 BOT INFO')
.setColor('BLUE')
.addField('📰 Nama Bot:', client.user.username, true)
.addField('⏲ Dibuat Waktu:', client.user.createdAt, true)
.addField('🛰 Dibuat Oleh:','DevFian',true)
.setFooter('© Copyright - Simple Coding.')

message.channel.send(botembed);
}

if (command === "avatar") {

let user = message.mentions.users.first() || message.author;

let embed = new Discord.RichEmbed()
.setTitle('Avatar Command')
.setImage(user.displayAvatarURL) // menunjukan avatar url yang di input oleh embed dan menjadikan gambar.
.setColor('BLUE')

message.channel.send(embed)
}
  
if (command === "ping") {

  let ping = new Date()
  let pong = new Date() - message.createdAt;
  let wait = await message.channel.send("Wait...");
  let embed = new Discord.RichEmbed()
  .setTitle(`${client.user.username} Ping`)
  .setDescription(`API: **\`${Math.floor(client.ping)}\`ms**\nLatency: **\`${pong}\`ms**`)
  return wait.edit(embed)
}
  
if (command === 'cat') {
const superagent = require('superagent');
let { body } = await superagent.get('http://aws.random.cat/meow')
let meow = new Discord.RichEmbed()
.setTitle(`Meow 😺`)
.setColor("RANDOM")
.setImage(body.file)
message.channel.send(meow)
}

// Command Say
if (command === 'say' || command === 'chat') {
 let chat = args.join(" ")
 if (!chat) return message.channel.send(`Kasih saya Text!`)
 return message.delete()
 await message.channel.send(chat)
}

//command Restart Bot - tanpa edit watch.json - Process.exit 
if (command === 'restart') {
if(message.author.id !== '467298098096635934') return message.channel.send('Kamu bukan pemilik, tidak ada akses.');
message.channel.send('Bot Telah di restart').then(() => {
process.exit(1);
})

}

});

/*  Chat ROOM :v




*/

client.login(process.env.TOKEN)