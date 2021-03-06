const {
    splitUpMessage
} = require('./function_lib/split_up_message'), {
    response
} = require('./function_lib/response')

// // grab bot configurations
const {
    identifier,
    timeout,
    connectionString,
} = require('./.bot.config')

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
    if (args[0] === identifier) {
        const command = args[1],
            // arguments = args.slice(2, args.length);
            {
                channel
            } = message,
            channelName = channel.name;

        // test for bot-stuff
        if (channelName === 'bot-stuff' || message.guild.name.toLowerCase() === 'victoris') {
            // timeout tells how long till we delete the messages

            const responseMessage = typeof response(command).message !== 'function' ? response(command).message : response(command).message()
            message.reply(responseMessage || "empty string??", {
                reply: message.author,
                split: {
                    maxLength: 60
                },
                code: typeof response(command).message !== 'function' ? false : true
            }).then(reply => { // then delete the reply and the message
                deleteMessage(message, reply)
            }).catch(err => console.log(err)) // log any errors
        } else {
            message.reply('This bot is still in testing, please wait until it is officially released').then(reply => {
                deleteMessage(message, reply)
            })
        }
    }
});

const deleteMessage = (message, reply) => {
    message.delete(timeout)
    reply.delete(timeout)
}

client.login(connectionString);