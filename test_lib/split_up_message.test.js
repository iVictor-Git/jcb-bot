const splitUpMessage = require('../function_lib/split_up_message').splitUpMessage;

test('Given a string message, split the message up', () => {
    expect(splitUpMessage('$command arg1 arg2 arg3 ...')).toEqual(['$command', 'arg1', 'arg2', 'arg3', '...'])
})