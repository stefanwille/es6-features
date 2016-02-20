import assert from 'assert'

describe('arrow functions', () => {
  describe('statement body', () => {
    it('is written with curly braces', () => {
      const double = (v) => { return v * 2 }
      assert.equal(14, double(7))
    })
  })

  describe('expression body', () => {
    it('is written without curly braces and implicitly returns its bodys value', () => {
      const double = (v) => v * 2
      assert.equal(6, double(3))
    })
  })

  describe('value of "this"', () => {
    it('remains the "this" of its surrounding lexial scope', () => {

      const hello = {
        name: 'Smith',
        fullName: function () {
          const combine = (first) => { return first + ' ' + this.name }
          return combine('John')
        }
      }
      const actual = hello.fullName()
      assert.equal('John Smith', actual)
    })
  })
})
