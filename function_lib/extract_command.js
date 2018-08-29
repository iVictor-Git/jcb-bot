const extractCommand = (message = '') => {
    // this should only be sent the first argument when splitting the message the user sends, but written to cover more than one word
    if (typeof message !== 'string') {
        return () => {
            throw Error('TypeError');
        }
    }

    const command = message.split(' ').shift();
    return command.split('').slice(1, command.length).join('');
}

module.exports = {
    extractCommand
}