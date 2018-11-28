const { s, sym } = require('./index.js')

describe('s', () => {
  it ('creates a symbol', () => {
    const symbol = s`hello`
    expect(typeof symbol).toBe('symbol')
  })

  it ('has the right description', () => {
    const symbol = s`hello`
    expect(symbol.toString()).toBe('Symbol(foo)')
  })

})