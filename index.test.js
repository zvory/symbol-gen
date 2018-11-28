const { s, sym } = require('./index.js')

describe('s', () => {
  it ('creates a symbol', () => {
    const symbol = s`hello`
    expect(typeof symbol).toBe('symbol')
  })

  it ('has the right description', () => {
    const symbol = s`hello`
    expect(symbol.toString()).toEqual('Symbol(hello)')
  })

  it ('ignores template expressions', () => {
    const symbol = s`hello ${1+2} asd`
    expect(symbol.toString()).toEqual('Symbol(hello  asd)')
  })

  it (`is also exported as 'sym'`, () => {
    expect(sym).toBe(s)
  })

})