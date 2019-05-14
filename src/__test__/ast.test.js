import AST from '../ast'

test('ast testi 1', () => {
    const code = `tulost("jee")`
    const ast = new AST()
    expect(ast.start(code)).toEqual({
        type: 'body',
        body: [
            {
                type: 'keyword',
                value: 'tulost',
                expression: [
                    {
                        type: 'literal',
                        value: '"jee"',
                    },
                ],
            },
        ],
    })
})
