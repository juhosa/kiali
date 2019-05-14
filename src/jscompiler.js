class JSCompiler {
    body = node => {
        return `console.log('jee')`
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
