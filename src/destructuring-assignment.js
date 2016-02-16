import assert from 'assert'

describe('destructuring assignment', () => {
  it('splits arrays', () => {
    const [a, b] = [3, 4]
    assert.equal(3, a)
    assert.equal(4, b)
  })

  it('splits objects', () => {
    const {a, b} = {a: 3, b: 4}
    assert.equal(3, a)
    assert.equal(4, b)

    const o = {c: 3, d: 4}
    const {c, d} = o
    assert.equal(3, c)
    assert.equal(4, d)
  })
})
