import ast from '../ast'

test('ast testi 1', () => {
    const code = `tulost("jee")`
    expect(ast(code)).toStrictEqual({ nodes: [] })
})
