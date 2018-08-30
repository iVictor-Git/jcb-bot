const commands = {
    "hi": "hello",
    "hello": "hi"
}

const response = (message = '') => {
    return typeof message !== 'string' ? () => {
        throw Error('Invalid type given, expected string')
    } : commands[message]
}

module.exports = {
    response
}