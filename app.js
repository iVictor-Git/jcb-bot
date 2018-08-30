const splitUpMessage = require('./function_lib/split_up_message').splitUpMessage

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

    const args = splitUpMessage(message.content)

    // args[0] would be the identifier if it exists
    if (args[0] === botConfigs.identifier) {
        const command = args[1],
            arguments = args.slice(2, args.length);
    }
});

client.login(botConfigs.connectionString);