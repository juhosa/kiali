import lexer from '../lexer'

test('lexer test', () => {
    expect(lexer('a')).toStrictEqual(['a'])
})
