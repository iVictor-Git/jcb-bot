const extractIdentifier = (message = '') => {
    return typeof message === 'string' ? message.length > 0 ? message[0] : '' : () => {
        throw new Error('TypeError')
    }
}

module.exports = {
    extractIdentifier
}