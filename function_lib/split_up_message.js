const extractIdentifier = require('../function_lib/extract_identifier').extractIdentifier,
    extractCommand = require('../function_lib/extract_command').extractCommand

const splitUpMessage = (message = '') => {
    // if message is not a string, throw an error
    if (typeof message !== 'string') {
        return () => {
            throw Error('Error');
        }
    }
    const args = message.split(' '),
        command = extractCommand(args[0]),
        identifier = extractIdentifier(args[0])


    return [identifier, command, ...args.slice(1, args.length)];

}

module.exports = {
    splitUpMessage
}