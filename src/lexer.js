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

const literals = [
    // literals
    'true',
    'false',
]

const operators = [
    // operators
    'o', // equals, ==

    '+', // plus sign
    '-', // minus sign
    '/', // division
    '*', // times

    '=', // sijoitus
]

const lexer = source => {
    // console.log('lexer.js')
    // TODO Improve this splitter.
    // Currently 2+2 gets split wrongly.
    let re = /([\s\n\t\(\)])/
    const sourceSplit = source.split(re)
    // console.dir(sourceSplit)
    let tokens = []
    let position = 0

    // for (const s of sourceSplit) {
    while (position < sourceSplit.length) {
        let s = sourceSplit[position]
        // console.log(s)
        // if keyword
        if (keywords.includes(s)) {
            tokens.push({ name: 'keyword', value: s })
            position++
            continue
        }

        // operators
        if (operators.includes(s)) {
            tokens.push({ name: 'operator', value: s })
            position++
            continue
        }

        // literals
        if (literals.includes(s)) {
            tokens.push({ name: 'literal', value: s })
            position++
            continue
        }
        // tuplahipsut
        if (s[0] === '"') {
            // jos alkaa " ja loppuuki siihe
            if (s[s.length - 1] === '"') {
                tokens.push({ name: 'literal', value: s })
                position++
                continue
            } else {
                // jos alkaa " mut ei lopu
                // tarkistele seuraavia niin kauan et tulee vastaan " loppuva
                let lit = s
                position++
                while (position < sourceSplit.length) {
                    s = sourceSplit[position]
                    lit += s
                    if (s[s.length - 1] === '"') {
                        break
                    }
                    position++
                }
                tokens.push({ name: 'literal', value: lit })
                position++
                continue
            }
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
            position++
            continue
        }

        // numbers (integers)
        if (s.match(/([1-9]+)/)) {
            tokens.push({ name: 'number', value: parseInt(s) })
            position++
            continue
        }

        // string literals
        if (s.match(/\w/)) {
            tokens.push({ name: 'string_literal', value: s })
            position++
            continue
        }

        position++
    }
    // console.dir(tokens)
    return tokens
}

export default lexer
