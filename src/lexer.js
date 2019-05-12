const keywords = [
    // keywords
    'tulost',
]

const specials = [
    // specials
    '\n',
    '(',
    ')',
]

const lexer = source => {
    // console.log('lexer.js')
    let re = /([\s\n\t\(\))])/
    const sourceSplit = source.split(re)
    // console.dir(sourceSplit)
    let tokens = []
    for (const s of sourceSplit) {
        // console.log(s)
        // if keyword
        if (keywords.includes(s)) {
            tokens.push({ name: 'keyword', value: s })
            continue
        }

        // literals
        if (s[0] === '"' && s[s.length - 1] === '"') {
            tokens.push({ name: 'literal', value: s })
            continue
        }

        // specials
        if (specials.includes(s)) {
            let v = ''
            if (s === '\n') {
                v = 'NEWLINE'
            } else if (s === '(') {
                v = 'OPEN_PAREN'
            } else if (s === ')') {
                v = 'CLOSE_PAREN'
            }
            tokens.push({ name: 'special', value: v })
            continue
        }
    }
    // console.dir(tokens)
    return tokens
}

export default lexer
