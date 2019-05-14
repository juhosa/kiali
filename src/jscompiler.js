class JSCompiler {
    body = node => {
        // console.log(node)
        // node.body on array
        // return `console.log('jee')`
        // for (const c of node.body) {

        // }
        return `${this.compile(node.body[0])}`
    }

    keyword = node => {
        // console.log(node)
        if (this[node.value]) {
            // return `hai`
            return this[node.value](node)
        } else {
            throw new Error(`Keyword ${node.value} not implemented.`)
        }
    }

    literal = node => {
        // console.log(node)
        return `${node.value}`
    }

    tulost = node => {
        // expression on array, deal with it
        return `console.log(${this.compile(node.expression[0])})`
    }

    compile = node => {
        if (this[node.type]) {
            node = this[node.type](node)
        } else {
            throw new Error(`Not implemented: ${node.type}`)
        }

        console.log(node)
        return node
    }
}

export default JSCompiler
