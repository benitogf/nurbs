// @flow
import chai from 'chai'
import Nurbs from '..'

const expect = chai.expect

describe('Nurbs service', function () {
  it('should create a nurb', function () {
    let nb = new Nurbs({ name: 'w/e' })
    expect(nb.name).to.eq('w/e')
  })
})
