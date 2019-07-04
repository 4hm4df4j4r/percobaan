const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {
let  currency = await db.fetch(`economy_icon_${message.guild.id}`)
if(currency === null) {
await db.set(`economy_icon_${message.guild.id}`, "$")
}
  

    let money = db.startsWith(`money_${message.guild.id}`, { sort: '.data'})
    let content = "";

    for (let i = 0; i < money.length; i++) {
        let user = client.users.get(money[i].ID.split('_')[2]).username

        content += `${i+1}. ${user} ~ ${money[i].data}_${currency} \n`
    }

    const embed = new Discord.RichEmbed()
    .setAuthor(`${message.guild.name} - Leaderboard!`, message.guild.iconURL)
    .setDescription(content)
    .setColor(0x51267)

    message.channel.send(embed)




}