const {
    help,
} = require('../command_lib/help')

test('user submitted $help, with a different list, should receive all commands', () => {
    expect(help()).toEqual(["$hi", "$hello", "$ping", "$help"].join('\n'))

})