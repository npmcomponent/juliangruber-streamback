var Streamback = require('../index');
var expect = require('expect.js');
var Stream = require('stream');

describe('Streamback', function() {
  describe('Streamback()', function() {
    it('should be a stream', function() {
      expect(Streamback()).to.be.a(Stream);
    });
  });
  describe('Streamback#feed()', function() {
    it('should emit data', function() {
      var stream = Streamback();
      stream.on('data', function(err, data) {
        expect(data).to.be(1337);
      });
      function emit(cb) {
        cb(null, 1337);
      }
      emit(stream.feed());
    });
  });
})
