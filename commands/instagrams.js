const Discord = require('discord.js');
const instagramUser = require('instagram-user');
const fs = require("fs");
var Canvas = require('canvas');
var jimp = require('jimp');

exports.run = async (bot, message, args) => {
var option = args.slice(0).join(" ")

            if (!option) {
              var embed = new Discord.RichEmbed()
              .setColor("#0aaaeb")
              .setDescription(`
🇮🇩 Silahkan gunakan command dibawah ini untuk setting.

**COMMAND:**
\`${message.prefix}instagram set #channel\` 
\`Contoh:\` **${message.prefix}instagram set #instagram**

**Command Mencari:**

\`${message.prefix}instagram cari <nama>\`

`)
              .setFooter("Indonesia Bot", bot.user.displayAvatarURL)
              .setTimestamp()
                            await message.react('⬇')
              message.channel.send({embed});
            } else {

              if (option.match("set")) {
            var nick = JSON.parse(fs.readFileSync("./instagram.json", "utf8"))
            if (!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("Kamu tidak memiliki permission!");
            var inputmessage = message.mentions.channels.first()
            if (args[0]) {
              nick[message.guild.id] = {
                server: inputmessage.id
             };
              fs.writeFile("./instagram.json", JSON.stringify(nick), (err) => {
                if (err) console.log(err)
             });
              
              var embed = new Discord.RichEmbed()
              .setColor("#0aaaeb")
              .setDescription(`Instagram generator set to\n\n${inputmessage}`)
              .setTimestamp()
              
              message.channel.send({embed});
            }
            }
            }

if (option.match("cari")) {
      var instagram = JSON.parse(fs.readFileSync("./instagram.json", "utf8"))
      
      if (!instagram[message.guild.id]){
        instagram[message.guild.id] = {
server: "541593717169979393"
};
}
      let bk = instagram[message.guild.id].server;


if (message.channel.id === `${bk}`) {
  if(!args[1]) return message.channel.send("**Masukan nama kamu**").then(msg => {
    msg.delete(10000)
  })



message.channel.send(`Mohon tunggu, sedang mengambil data **${args[1]}**.`).then(msg => {
    msg.delete(7000)
  })


const bud = require('basic-instagram-user-details');
  const ipp = require('instagram-profile-picture');
 
const user = args[1];
 
  ipp.medium(user).then(img => {
    
  console.log(img);
    

  bud(user, 'fullname').then(res => {
      const fullnameid = res.data;
  console.log(fullnameid);
    

  
  bud(user, 'username').then(res => {
      const usernameId = res.data;
  console.log(usernameId);
    

  
  bud(user, 'posts').then(res => {
      const postsId = res.data;
  console.log(postsId);
    

  
  
  bud(user, 'followers').then(res => {
      const followersId = res.data;
  console.log(followersId);
    

  
  bud(user, 'following').then(res => {
      const followingId = res.data;
  console.log(followingId);
    
    
  bud(user, 'bio').then(res => {
      const bioId = res.data;
  console.log(bioId);
    
    
    
 function wrapText(context, text, x, y, maxWidth, lineHeight) 
        {
            var words = text.split(" ");
            var line = "";
             for (var n = 0; n < words.length; n++) 
             {
                var testLine = line + words[n] + " ";
                var metrics = context.measureText(testLine);
                var testWidth = metrics.width;
                if (testWidth > maxWidth) {
                    context.fillText(line, x, y);
                    line = words[n] + " ";
                    y += lineHeight;
                }
                else {
                    line = testLine;
                }
            }
            context.fillText(line, x, y);
        }
  
  
  const welcomer =  message.guild.channels.get('462596219789639690');
 
      var Canvas = require('canvas')
      var jimp = require('jimp')
 
 
              let Image = Canvas.Image,
                  canvas = new Canvas(401, 202),
                  ctx = canvas.getContext('2d');
              ctx.patternQuality = 'bilinear';
              ctx.filter = 'bilinear';
              ctx.antialias = 'subpixel';

    ///////////////////////////////////// BACKGROUND /////////////////////////

                            let url = "http://papers.co/wallpaper/papers.co-ac01-wallpaper-space-star-night-dark-8-wallpaper.jpg";
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
 
                              //AVATAR�
                              let radius = 70
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              
                              ava.src = buf;
                              ctx.strokeStyle = '#EBEBEB';  // some color/style
                              ctx.lineWidth = 2;   
                              ctx.drawImage(ava,  0, 0, 856, 376);
 
    
    ///////////////////////////////////// PP /////////////////////////
    
                      var jadim = canvas.length > 12 ? canvas.substring(0, 10) + "..." : canvas;
                   let url = img;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
 
                              //AVATAR�
                              let radius = 70
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              
                              ava.src = buf;
                              ctx.strokeStyle = '#eec710';  // some color/style
                              ctx.lineWidth = 2;   
                              ctx.drawImage(ava,  33, 31, 95, 95);
                              ctx.strokeRect(33, 31, 95, 95);
                            
                            
  ////////////////////////////////////// IG ICON /////////////////////////////
                            
                            
                            let url = "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png";
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);
 
                              //AVATAR�
                              let radius = 70
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              
                              ava.src = buf;
                              ctx.strokeStyle = '#EBEBEB';  // some color/style
                              ctx.lineWidth = 2;   
                              ctx.drawImage(ava,  145, 75, 45, 45);
////////////////////// NAMA LENGKAP //////////////////////////
                            
                                    //wl
                              ctx.font = 'bold 17px Arial';
                              ctx.fontSize = '15px';
                              ctx.fillStyle = "#108dee";
                              ctx.textAlign = "left";
                                                         ctx.fillText(fullnameid, 197, 93);
                            ////////////////////// USERNAME //////////////////////////
                            
                                    //wl
                              ctx.font = '15px Arial';
                              ctx.fontSize = '15px';
                              ctx.fillStyle = "#eec710";
                              ctx.textAlign = "left";
                                                         ctx.fillText(`@` + usernameId, 197, 113);
                            ////////////////////////// post /////////////////////
                             //wl
                              ctx.font = 'bold 17px Arial';
                              ctx.fontSize = '15px';
                              ctx.fillStyle = "#9307ff";
                              ctx.textAlign = "center";
                                                         ctx.fillText(postsId, 165, 44);
                            //wl
                              ctx.font = 'bold 12px Arial';
                              ctx.fontSize = '7px';
                              ctx.fillStyle = "#eec710";
                              ctx.textAlign = "center";
                                                         ctx.fillText(`posts`, 165, 58);
                            
                            
                            
          /////////////////////// followers ////////////
                            //wl
                              ctx.font = 'bold 17px Arial';
                              ctx.fontSize = '15px';
                              ctx.fillStyle = "#9307ff";
                              ctx.textAlign = "center";
                                                         ctx.fillText(followersId, 245, 44);
                            //wl
                              ctx.font = 'bold 12px Arial';
                              ctx.fontSize = '7px';
                              ctx.fillStyle = "#eec710";
                              ctx.textAlign = "center";
                                                         ctx.fillText(`followers`, 245, 58);
                            
//////////////////////////// following ////////////////////////
                            //wl
                              ctx.font = 'bold 17px Arial';
                              ctx.fontSize = '15px';
                              ctx.fillStyle = "#9307ff";
                              ctx.textAlign = "center";
                                                         ctx.fillText(followingId, 330, 44);
                            //wl
                              ctx.font = 'bold 12px Arial';
                              ctx.fontSize = '7px';
                              ctx.fillStyle = "#eec710";
                              ctx.textAlign = "center";
                                                         ctx.fillText(`following`, 330, 58);
////////////////////// LINE //////////////////////////////////
                            
                             //wl
                              ctx.font = 'bold 12px Arial';
                              ctx.fontSize = '7px';
                              ctx.fillStyle = "#ffffff";
                              ctx.textAlign = "center";
                                                         ctx.fillText(`_______________________________`, 255, 65);
                            
  ////////////////////// BIO //////////////////////////
                            
                                    //wl
                              ctx.font = '15px Arial';
                              ctx.fontSize = '15px';
                              ctx.fillStyle = "#c2c0c4";
                              ctx.textAlign = "left";
                              var maxWidth = 330;
                              var lineHeight = 20;
                              var x = (canvas.width - maxWidth) / 2;
                              var y = 60;  
                              var text = `"` + bioId + `"`
                              wrapText(ctx, text, 35, 150, maxWidth, lineHeight);
                                                   //      ctx.fillText(bioId, 35, 170, 300);
                            
                            
   ////////////////////// WM //////////////////////////
                            
                                    //wl
                              ctx.font = '7px Arial';
                              ctx.fontSize = '15px';
                              ctx.fillStyle = "#ffffff";
                              ctx.textAlign = "center";
                                                         ctx.fillText(`StarNet Official`, 200, 198);
                              
 
  message.channel.send('Profile Instagram **' + fullnameid + '**, dont forget to follow **@' + usernameId + '**.',{
  files: [{
    attachment: canvas.toBuffer(),
    name: 'instagram.jpg'
  }] })
 
                          })
                      })
                          })
                      })
                            
                          })
                      })
      
  });
});
});
});
});
  });
  });
}
}
}