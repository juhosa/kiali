import lexer from './lexer'

/*
token:
[
    { value: 'tulost', name: 'keyword' },
    { value: 'OPEN_PAREN', name: 'special' },
    { value: '"jee"', name: 'literal' },
    { value: 'CLOSE_PAREN', name: 'special' },
]

tulost-Node:
{
    name: 'tulost',
    expression: Node // kaikki OPEN_PARENista CLOSE_PARENiin
}

literal-Node:
{
    name: 'literal',
    body: token.value
}
*/

let root = {
    nodes: [],
}

const ast = source => {
    const tokens = lexer(source)
    return root
}

export default ast
