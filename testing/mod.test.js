const mod = require('./mod')

test('mod 7, 8 returns 7', () => {
    expect (mod(7,8)).toBe(7)
})

test('mod 7, "8" returns error', () => {
    expect (() => {
        mod(7, '8')
    }).toThrow('inputs must be numbers')
})

test('mod 10, 11 does not returns a string', () => {
    const res = mod(10,11)
    expect (typeof(res) === 'string').toBeFalsy()
})