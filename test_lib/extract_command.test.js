const extractCommand = require('../function_lib/extract_command').extractCommand;

test("Given a string '$help', take 'help' out of it", () => {
    expect(extractCommand('$help')).toBe('help')
});