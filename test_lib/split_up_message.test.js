const splitUpMessage = require('../function_lib/split_up_message');

test('Given a string message, split the message up', () => {
    expect(splitUpMessage('$command arg1 arg2 arg3 ...')).toContain(['$command', 'arg1', 'arg2', 'arg3', '...'])
})