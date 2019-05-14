import JSCompiler from '../jscompiler'
import AST from '../ast'

test('jscompiler testi 1', () => {
    const code = `tulost("jee")`
    const ast = new AST()
    const tokens = ast.start(code)
    const compiler = new JSCompiler()
    expect(compiler.compile(tokens)).toEqual(`console.log("jee")`)
})
