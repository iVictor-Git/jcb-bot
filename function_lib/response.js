const {
    commands
} = require('../.bot.config')

const response = (message = '') => {
    return typeof message !== 'string' ? () => {
        throw Error('Invalid type given, expected string')
    } : commands[message] ? {
        err: false,
        message: commands[message]
    } : {
        err: true,
        message: 'Invalid command, type $help for help'
    }
}

module.exports = {
    response
}