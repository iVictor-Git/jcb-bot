const extractCommand = (message = '') => {
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