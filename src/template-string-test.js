import assert from 'assert'

describe('template strings', () => {
  it('implements string interpolation', () => {
    const firstName = 'Lisa'
    const lastName = 'Stansfield'
    const greeting = `Hello ${firstName} ${lastName}!`
    assert.equal('Hello Lisa Stansfield!', greeting)
  })

  it('supports multiline strings', () => {
    const multiline = `hello
                       world`
    assert.equal('hello\n                       world', multiline)
  })
})