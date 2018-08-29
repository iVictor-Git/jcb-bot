const extractIdentifier = require('../function_lib/extract_identifier').extractIdentifier

test('given a string, extract the first character', () => {
    expect(extractIdentifier('$this is the given string')).toBe('$');
})

test('given an empty string, gets back an empty string', () => {
    expect(extractIdentifier('')).toBe('');
})

test('given an empty string, gets back an empty string', () => {
    expect(extractIdentifier(1)).toThrowError('TypeError');
})