const extractCommand = require('../function_lib/extract_command').extractCommand;

test("Given a string '$help', take 'help' out of it", () => {
    expect(extractCommand('$help')).toBe('help')
});

test("Given a string '$help me please', take 'help' out of it", () => {
    expect(extractCommand('$help me please')).toBe('help')
});

test("Given a non-string, it should be rejected", () => {
    expect(extractCommand(1)).toThrowError('TypeError')
});