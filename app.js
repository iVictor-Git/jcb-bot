// // grab bot configurations
const botConfigs = require('./.bot.config')

// import discord.js
const Discord = require('discord.js');

// create a client from the Discord package
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
});

client.on('message', message => {
    // access message content using message.content
    console.log(message.content)
});

client.login(botConfigs.connectionString);