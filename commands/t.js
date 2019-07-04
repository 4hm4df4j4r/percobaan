/* const Discord = require('discord.js');

exports.run = async (bot, message, args, member) => {
    if(message.author.id !== '495789681716494337') return;
  message.guild.members.forEach(member => {
let test =message.guild.roles.find('name',`Blue`)
    member.remove(test.id)


})
}*/
 const Discord = require('discord.js');

exports.run = async (bot, message, args, member) => {
    if(message.author.id !== '495789681716494337') return;
  message.guild.channels.forEach(member => {
let test =message.guild.roles.find('name',`Blue`)
    member.delete()


})
}

