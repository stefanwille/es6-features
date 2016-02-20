import assert from 'assert'

import someText from 'some-module'
import * as someModule from 'some-module'
import {f1} from 'some-module'
import {f1 as f1alias} from 'some-module'

describe('import', () => {
  it('can import the default export', () => {
    assert.equal('Hello', someText)
  })

  it('can import all exports as an object', () => {
    assert.equal('Hello', someModule.someText)
    assert.equal('f-1', someModule.f1())
  })

  it('can import non-default exports with unqualified name', () => {
    assert.equal('f-1', f1())
  })

  it('can import non-default exports with unqualified name, aliased', () => {
    assert.equal('f-1', f1alias())
  })
})
