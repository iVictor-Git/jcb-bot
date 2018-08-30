const help = () => {
    const {
        commands
    } = require('../.bot.config');
    const listOfCommands = Object.keys(commands)
    const formattedCommands = listOfCommands.map(command => {
        return `$${command}`
    }).join('\n');
    return formattedCommands
}

const formatHelp = () => {
    const header = "This bot has been coded by Victor, here is a list of commands:"
    const message = help();
    return header.concat("\n", message);
}

module.exports = {
    help,
    formatHelp
}