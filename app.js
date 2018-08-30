const splitUpMessage = require('./function_lib/split_up_message').splitUpMessage,
    response = require('./function_lib/response').response

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

        const channel = message.channel,
            channelName = channel.name

        // test for bot-stuff
        if (channelName === 'bot-stuff') {
            // timeout tells how long till we delete the messages
            const timeout = 5000;

            const responseMessage = response(command).message

            // reply to the user
            message.reply(responseMessage, {
                reply: message.author,
                split: {
                    maxLength: 60
                }
            }).then(reply => { // then delete the reply and the message
                reply.delete(timeout)
                message.delete(timeout)
            }).catch(err => console.log(err)) // log any errors
        }
    }
});

client.login(botConfigs.connectionString);