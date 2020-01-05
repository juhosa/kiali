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
        const next = this.tokens[++this.index]
        // console.log('next', next)
        if (next !== undefined && next.name === 'operator') {
            // console.log('seuraava o operaattori')
            return this.operator(token, next)
        } else {
            // console.log('literaali', token)
            return {
                type: 'literal',
                value: token.value,
            }
        }
    }

    peek = () => {
        return this.tokens[this.index + 1]
    }

    string_literal = token => {
        // tarkista seuraava, jos operaattori, ni pitää tehä juttuja
        const next = this.tokens[++this.index]
        // const next = this.peek()
        // console.log('next', next)
        if (next !== undefined && next.name === 'operator') {
            // console.log('seuraava o operaattori')
            return this.operator(token, next)
        } else {
            // console.log('literaali', token)
            return {
                type: 'string_literal',
                value: token.value,
            }
        }
    }

    number = token => {
        const next = this.tokens[++this.index]

        if (next !== undefined && next.name === 'operator') {
            // console.log('seuraava o operaattori')
            return this.operator(token, next)
        } else {
            // console.log('number', token)
            return {
                type: 'number',
                value: token.value,
            }
        }
    }

    operator = (leftToken, operToken) => {
        // console.log('operator', leftToken, operToken, rightToken)
        let type = 'operator'

        // spessu case assignment (=) -operaattorilla
        // vai onks...
        // halutaan se nimetä erilailla tässä vaiheessa jo
        // jotta voidaan generoida oikeanlaista koodia (let vain kerran)
        if (operToken.value === '=') {
            type = 'assignment_operator'
        }

        // Kaikissa operaattoreissa (+, -, =, *, 'o', jne)
        // vasen puoli on operaattoriin asti
        // ja
        // oikea puoli new lineen, ), ( tai toiseen operaattoriin asti
        // 2 + 2
        // a + 2
        // 2 + 3 + 4
        // a = 3 + 5
        // tulost(4 o 4)
        // tulost(2 + 2 o 4)

        const rightToken = this.tokens[++this.index]
        return {
            type: type,
            operator: operToken.value,
            left: this.build(leftToken),
            right: this.build(rightToken),
        }
    }

    expression = tokens => {
        // console.log('tokens', tokens)
        return tokens.map(t => {
            console.log({ t })
            return this.build(t)
        })
    }

    tulost = token => {
        // console.log({ token })

        // seuraava pitää olla OPEN_PAREN
        // tää myös consumee sen samalla
        if (this.tokens[++this.index].value !== 'OPEN_PAREN') {
            throw new Error(`Syntax error while parsing expression for tulost`)
        }

        // ota seuraava token, koska se on laillinen ja ala työstämään näitä siitä eteenpäin
        let t = this.tokens[++this.index]
        let expr = [this.build(t)]
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
        console.dir(this.tokens)
        let root = []
        while (this.index < this.tokens.length) {
            root.push(this.build(this.tokens[this.index]))
            this.index++
        }
        let ret = { type: 'body', body: root }
        // console.log({ ret })
        console.log(JSON.stringify(ret, null, 2))
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
