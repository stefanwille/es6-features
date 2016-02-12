var assert = require('assert')

import 'babel-polyfill'
import 'babel-runtime/regenerator'

function* greet() {
  yield "hello"
  yield "bienvenido"
  yield "ciao"
}

describe('generator function', () => {
  it('generates several results', () => {
    const greeter = greet()

    const result0 = greeter.next()
    assert.equal (false, result0.done)
    assert.equal ('hello', result0.value)

    const result1 = greeter.next()
    assert.equal (false, result1.done)
    assert.equal ('bienvenido', result1.value)

    const result2 = greeter.next()
    assert.equal (false, result2.done)
    assert.equal ('ciao', result2.value)

    const result3 = greeter.next()
    assert.equal (true, result3.done)
    assert.equal (undefined, result3.value)
  })
})
