const extractCommand = (message = '') => {
    return message.split('').slice(1, message.length).join('');
}

module.exports = {
    extractCommand
}