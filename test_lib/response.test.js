const response = require('../function_lib/response').response

test('given the command hi or hello', () => {
    expect(response('hi')).toBe('hello')
    expect(response('hello')).toBe('hi')
})