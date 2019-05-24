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

class AST {
    index = 0
    tokens = []

    literal = token => {
        // tarkista seuraava, jos operaattori, ni pitää tehä juttuja
        if (
            this.tokens[++this.index] !== undefined &&
            this.tokens[this.index].name === 'operator'
        ) {
            return this.operator(token, this.tokens[this.index])
        } else {
            return {
                type: 'literal',
                value: token.value,
            }
        }
    }

    operator = (leftToken, operToken) => {
        const rightToken = this.tokens[++this.index]
        // console.log(leftToken, operToken, rightToken)
        return {
            type: 'operator',
            operator: operToken.value,
            left: this.build(leftToken),
            right: this.build(rightToken),
        }
    }

    tulost = token => {
        // seuraava pitää olla OPEN_PAREN
        // muuten virhe
        // otetaan setit CLOSE_PAREN asti ja se o sitte expression: this.build(setit)
        if (this.tokens[++this.index].value !== 'OPEN_PAREN') {
            throw new Error(`Syntax error while parsing expression for tulost`)
        }
        let setit = []
        let t = this.tokens[++this.index]
        while (t.value !== 'CLOSE_PAREN') {
            // console.log('t', t)
            setit.push(t)
            t = this.tokens[++this.index]
        }
        let expr = []
        for (const s of setit) {
            // console.log('s', s)
            expr.push(this.build(s))
        }
        // console.dir(expr)
        return {
            type: 'keyword',
            value: 'tulost',
            expression: expr,
        }
    }

    keyword = token => {
        if (this[token.value]) {
            return this[token.value](token)
        } else {
            throw new Error(`Keyword not implemented: $(token.value)`)
        }
    }

    special = token => {
        return {
            name: 'special',
            body: 'spessu',
        }
    }

    start = source => {
        this.tokens = lexer(source)
        // console.dir(this.tokens)
        let root = []
        while (this.index < this.tokens.length) {
            root.push(this.build(this.tokens[this.index]))
            this.index++
        }
        let ret = { type: 'body', body: root }
        // console.dir(ret)
        return ret
    }

    build = token => {
        let node = null
        if (this[token.name]) {
            node = this[token.name](token)
        } else {
            throw new Error(`Not implemented: ${token.name}`)
        }

        return node
    }
}

export default AST
