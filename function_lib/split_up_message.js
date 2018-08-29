const splitUpMessage = (message = '') => {
    // if message is not a string, throw an error
    if (typeof message !== 'string') {
        return () => {
            throw Error('Error');
        }
    }

    return message.split(' ');

}

module.exports = {
    splitUpMessage
}