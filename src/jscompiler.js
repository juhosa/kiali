class JSCompiler {
    body = node => {
        // console.log(node)
        node.lines = node.body.map(n => this.compile(n))
        return node.lines.join('\n')
    }

    keyword = node => {
        // console.log(node)
        if (this[node.value]) {
            return this[node.value](node)
        } else {
            throw new Error(`Keyword ${node.value} not implemented.`)
        }
    }

    literal = node => {
        return `${node.value}`
    }

    string_literal = node => {
        return `${node.value}`
    }

    number = node => {
        return `${node.value}`
    }

    operator = node => {
        // console.log({ node })
        let op = ''
        if (node.operator === 'o') {
            op = '==='
        } else {
            op = node.operator
        }
        return `${this.compile(node.left)} ${op} ${this.compile(node.right)}`
    }

    tulost = node => {
        node.lines = node.expression.map(n => this.compile(n))
        return `console.log(${node.lines.join('\n')})`
    }

    compile = node => {
        if (this[node.type]) {
            node = this[node.type](node)
        } else {
            throw new Error(`Not implemented: ${node.type}`)
        }

        // console.log(node)
        return node
    }
}

export default JSCompiler
