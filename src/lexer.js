const ids = ['tulost']

const checkIds = source => {
    let ret = []
    for (let w of ids) {
        ret.push(w)
    }
    return ret
}

const lexer = source => {
    console.log('lexer.js')
    return [source]
}

export default lexer
