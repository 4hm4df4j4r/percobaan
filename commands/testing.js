const Discord = require('discord.js'),
      arraySort = require('array-sort'),
      table = require('table');

module.exports.run = async (client, message ,args) => {
    let invites = await message.guild.fetchInvites();
    
    invites = invites.array();
    
    arraySort(invites, 'uses', { reverse: true });
    
    let possibleInvites = [['User', 'Uses']];
    invites.forEach(function(invite) {
        possibleInvites.push(`${invite.inviter.username} ${invite.uses}\n`);
    })
    
    const embed = new Discord.RichEmbed()
        .setColor(0x7289da)
        .setTitle('Server Invites')
        .addField('Leaderboard', `${(possibleInvites)}`);
    
    message.channel.send(embed);
}