var npmapi = require('../')
  , expect = require('chai').expect

describe('NPM Web API', function () {
  describe('getModulesByUser', function () {
    it('should work', function (done) {
      npmapi.getModulesByUser('isaacs', function (err, modules) {
        expect(err).to.not.exist
        expect(modules).to.contain('sax')
        done()
      })
    })
  })
})
