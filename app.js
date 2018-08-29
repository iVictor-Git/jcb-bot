// // grab bot configurations
const botConfigs = require('./.bot.config')

// import discord.js
const Discord = require('discord.js');

// create a client from the Discord package
const client = new Discord.Client();

client.on('ready', () => {
    console.log('TEST: dev purposes only')
});

client.on('message', message => {
    // access message content using message.content
    const identifier = message.content.split('')[0]

    // check if identifier === '$'
    if (identifier === botConfigs.identifier) {
        console.log(identifier)
    }
});

client.login(botConfigs.connectionString);