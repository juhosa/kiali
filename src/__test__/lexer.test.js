import lexer from '../lexer'

test('lexer tulost testi 1', () => {
    const code = `tulost`
    expect(lexer(code)).toStrictEqual([{ value: 'tulost', name: 'keyword' }])
})

test('lexer tulost testi 2', () => {
    const code = `tulost("jee")`
    expect(lexer(code)).toStrictEqual([
        { value: 'tulost', name: 'keyword' },
        { value: 'OPEN_PAREN', name: 'special' },
        { value: '"jee"', name: 'literal' },
        { value: 'CLOSE_PAREN', name: 'special' },
    ])
})

test('lexer special NEWLINE 1', () => {
    const code = `tulost
    `
    expect(lexer(code)).toStrictEqual([
        { value: 'tulost', name: 'keyword' },
        { value: 'NEWLINE', name: 'special' },
    ])
})

test('lexer special NEWLINE 2', () => {
    const code = `
    `
    expect(lexer(code)).toStrictEqual([{ value: 'NEWLINE', name: 'special' }])
})
