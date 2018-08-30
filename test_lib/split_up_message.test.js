const {
    splitUpMessage
} = require('../function_lib/split_up_message');

test('Given a string message, split the message up', () => {
    expect(splitUpMessage('$command arg1 arg2 arg3 ...')).toEqual(['$', 'command', 'arg1', 'arg2', 'arg3', '...'])
})

test('Given a string with one word, split the message up', () => {
    expect(splitUpMessage('$command')).toEqual(['$', 'command'])
})

test('Given a non-string, reject/throw error', () => {
    expect(splitUpMessage(1)).toThrow();
})