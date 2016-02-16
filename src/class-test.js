import assert from 'assert'

describe('class syntax', () => {
  it('methods', () => {
    class Person {
      name () {
        return 'John Smith'
      }
    }
    assert.equal('John Smith', new Person().name())
  })

  it('properties', () => {
    class Person {
      get drink() {
        return this._drink
      }

      set drink(v) {
        this._drink = v
      }
    }
    const person = new Person()
    person.drink = 'Coffee'
    assert.equal('Coffee', person.drink)
  })
})

