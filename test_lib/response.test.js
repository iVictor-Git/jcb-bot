const response = require('../function_lib/response').response

test('given the command hi or hello', () => {
    expect(response('hi')).toEqual({
        err: false,
        message: 'hello'
    })

    expect(response('hello')).toEqual({
        err: false,
        message: 'hi'
    })

    expect(response('ping')).toEqual({
        err: false,
        message: 'pong'
    })

    expect(response('bihh')).toEqual({
        err: true,
        message: 'Invalid command, type $help for help'
    })
})

test('given non-string, reject', () => {
    expect(response(1)).toThrow();
    expect(response([1])).toThrow();
    expect(response({
        1: 'something'
    })).toThrow();
})