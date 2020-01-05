import JSCompiler from '../jscompiler'
import AST from '../ast'

test('jscompiler testi 1', () => {
    const code = `tulost("jee")`
    const ast = new AST()
    const tokens = ast.start(code)
    const compiler = new JSCompiler()
    expect(compiler.compile(tokens)).toEqual(`console.log("jee")`)
})

test('jscompiler testi 2', () => {
    const code = `"testi"`
    const ast = new AST()
    const tokens = ast.start(code)
    const compiler = new JSCompiler()
    expect(compiler.compile(tokens)).toEqual(`"testi"`)
})

test('jscompiler testi 4', () => {
    const code = `"testi mesti"`
    const ast = new AST()
    const tokens = ast.start(code)
    const compiler = new JSCompiler()
    expect(compiler.compile(tokens)).toEqual(`"testi mesti"`)
})

test('jscompiler testi 3', () => {
    const code = `tulost("jee hee")`
    const ast = new AST()
    const tokens = ast.start(code)
    const compiler = new JSCompiler()
    expect(compiler.compile(tokens)).toEqual(`console.log("jee hee")`)
})

test('jscompiler testi 5', () => {
    const code = `tulost(true)`
    const ast = new AST()
    const tokens = ast.start(code)
    const compiler = new JSCompiler()
    expect(compiler.compile(tokens)).toEqual(`console.log(true)`)
})

test('jscompiler o operaattori 1', () => {
    const code = `true o true`
    const ast = new AST()
    const tokens = ast.start(code)
    const compiler = new JSCompiler()
    expect(compiler.compile(tokens)).toEqual(`true === true`)
})

test('jscompiler o operaattori 2', () => {
    const code = `tulost(true o true)`
    const ast = new AST()
    const tokens = ast.start(code)
    const compiler = new JSCompiler()
    expect(compiler.compile(tokens)).toEqual(`console.log(true === true)`)
})

test('jscompiler plus operaattori 1', () => {
    const code = `2 + 2`
    const ast = new AST()
    const tokens = ast.start(code)
    const compiler = new JSCompiler()
    expect(compiler.compile(tokens)).toEqual(`2 + 2`)
})

test('jscompiler plus operaattori 2', () => {
    const code = `tulost(2 + 2)`
    const ast = new AST()
    const tokens = ast.start(code)
    const compiler = new JSCompiler()
    expect(compiler.compile(tokens)).toEqual(`console.log(2 + 2)`)
})

test('jscompiler minus operaattori 1', () => {
    const code = `2 - 2`
    const ast = new AST()
    const tokens = ast.start(code)
    const compiler = new JSCompiler()
    expect(compiler.compile(tokens)).toEqual(`2 - 2`)
})

test('jscompiler minus operaattori 2', () => {
    const code = `tulost(2 - 2)`
    const ast = new AST()
    const tokens = ast.start(code)
    const compiler = new JSCompiler()
    expect(compiler.compile(tokens)).toEqual(`console.log(2 - 2)`)
})

test('jscompiler times operaattori 1', () => {
    const code = `2 * 2`
    const ast = new AST()
    const tokens = ast.start(code)
    const compiler = new JSCompiler()
    expect(compiler.compile(tokens)).toEqual(`2 * 2`)
})

test('jscompiler times operaattori 2', () => {
    const code = `tulost(2 * 2)`
    const ast = new AST()
    const tokens = ast.start(code)
    const compiler = new JSCompiler()
    expect(compiler.compile(tokens)).toEqual(`console.log(2 * 2)`)
})

test('jscompiler divide operaattori 1', () => {
    const code = `2 / 2`
    const ast = new AST()
    const tokens = ast.start(code)
    const compiler = new JSCompiler()
    expect(compiler.compile(tokens)).toEqual(`2 / 2`)
})

test('jscompiler divide operaattori 2', () => {
    const code = `tulost(2 / 2)`
    const ast = new AST()
    const tokens = ast.start(code)
    const compiler = new JSCompiler()
    expect(compiler.compile(tokens)).toEqual(`console.log(2 / 2)`)
})

test('jscompiler variable assingment 1', () => {
    const code = `a = 2`
    const ast = new AST()
    const tokens = ast.start(code)
    const compiler = new JSCompiler()
    expect(compiler.compile(tokens)).toEqual(`a = 2`)
})

test('jscompiler ohboi', () => {
    const code = `a = 2 * a`
    const ast = new AST()
    const tokens = ast.start(code)
    const compiler = new JSCompiler()
    expect(compiler.compile(tokens)).toEqual(`a = 2 * a`)
})
