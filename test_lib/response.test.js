const response = require('../function_lib/response').response

test('given the command hi or hello', () => {
    expect(response('hi')).toBe('hello')
    expect(response('hello')).toBe('hi')
})

test('given non-string, reject', () => {
    expect(response(1)).toThrow();
    expect(response([1])).toThrow();
    expect(response({
        1: 'something'
    })).toThrow();
})