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

test('ast operator 1', () => {
    const code = `true o true`
    const ast = new AST()
    expect(ast.start(code)).toEqual({
        type: 'body',
        body: [
            {
                type: 'operator',
                operator: 'o',
                left: {
                    type: 'literal',
                    value: 'true',
                },
                right: {
                    type: 'literal',
                    value: 'true',
                },
            },
        ],
    })
})

test('ast operator 2', () => {
    const code = `tulost(true o true)`
    const ast = new AST()
    expect(ast.start(code)).toEqual({
        type: 'body',
        body: [
            {
                type: 'operator',
                operator: 'o',
                left: {
                    type: 'literal',
                    value: 'true',
                },
                right: {
                    type: 'literal',
                    value: 'true',
                },
            },
        ],
    })
})
