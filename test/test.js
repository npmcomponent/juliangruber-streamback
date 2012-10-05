var Streamback = require('../index');
var expect = require('expect.js');
var Stream = require('stream');

describe('Streamback', function() {
  describe('Streamback()', function() {
    it('should be a readable stream', function() {
      var s = Streamback();
      expect(s).to.be.a(Stream);
      expect(s.readable).to.be.ok();
    });
    it('should stop', function() {
      var s = Streamback();
      s.on('data', function() {
        throw new Error('Should never happen');
      });
      s.stop();
      s.feed()('data');
    });
    it('should start', function(done) {
      var s = Streamback();
      s.on('data', done);
      s.stop();
      s.start();
      s.feed()();
    })
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
