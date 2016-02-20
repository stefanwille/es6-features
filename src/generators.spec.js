import 'babel-polyfill'
import 'babel-runtime/regenerator'

import assert from 'assert'

function * greet () {
  yield 'hello'
  yield 'bienvenido'
  yield 'ciao'
}

describe('generator function', () => {
  it('returns an iterator, which in turn returns iterator-results', () => {
    const iterator = greet()

    const iteratorResult0 = iterator.next()
    assert.equal (false, iteratorResult0.done)
    assert.equal ('hello', iteratorResult0.value)

    const iteratorResult1 = iterator.next()
    assert.equal (false, iteratorResult1.done)
    assert.equal ('bienvenido', iteratorResult1.value)

    const iteratorResult2 = iterator.next()
    assert.equal (false, iteratorResult2.done)
    assert.equal ('ciao', iteratorResult2.value)

    const iteratorResult3 = iterator.next()
    assert.equal (true, iteratorResult3.done)
    assert.equal (undefined, iteratorResult3.value)
  })

  it('returns a result that can be iterated with for..of', () => {
    const iterator = greet()
    const allValues = []
    for (let n of iterator) {
      allValues.push(n)
    }
    assert.deepEqual(['hello', 'bienvenido', 'ciao'], allValues)
  })
})
