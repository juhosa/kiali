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
    const code = `false o true`
    const ast = new AST()
    expect(ast.start(code)).toEqual({
        type: 'body',
        body: [
            {
                type: 'operator',
                operator: 'o',
                left: {
                    type: 'literal',
                    value: 'false',
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
    const code = `tulost(false o true)`
    const ast = new AST()
    expect(ast.start(code)).toEqual({
        type: 'body',
        body: [
            {
                type: 'keyword',
                value: 'tulost',
                expression: [
                    {
                        type: 'operator',
                        operator: 'o',
                        left: {
                            type: 'literal',
                            value: 'false',
                        },
                        right: {
                            type: 'literal',
                            value: 'true',
                        },
                    },
                ],
            },
        ],
    })
})

test('ast plus operation 1', () => {
    const code = `2 + 2`
    const ast = new AST()
    expect(ast.start(code)).toEqual({
        type: 'body',
        body: [
            {
                type: 'operator',
                operator: '+',
                left: {
                    type: 'number',
                    value: 2,
                },
                right: {
                    type: 'number',
                    value: 2,
                },
            },
        ],
    })
})

test('ast variable assignment 1', () => {
    const code = `a = 2`
    const ast = new AST()
    expect(ast.start(code)).toEqual({
        type: 'body',
        body: [
            {
                type: 'operator',
                operator: '=',
                left: {
                    type: 'string_literal',
                    value: 'a',
                },
                right: {
                    type: 'number',
                    value: 2,
                },
            },
        ],
    })
})

test('ast variable assignment 2', () => {
    const code = `a = 2 * 2`
    const ast = new AST()
    expect(ast.start(code)).toEqual({
        type: 'body',
        body: [
            {
                type: 'operator',
                operator: '=',
                left: {
                    type: 'string_literal',
                    value: 'a',
                },
                right: {
                    type: 'operator',
                    operator: '*',
                    left: {
                        type: 'number',
                        value: 2,
                    },
                    right: {
                        type: 'number',
                        value: 2,
                    },
                },
            },
        ],
    })
})
