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
    it('should pause', function() {
      var s = Streamback();

      var dest = new Stream();
      dest.writable = true;
      dest.write = function() {
        throw new Error('Should never happen');
      }
      s.pipe(dest);
      s.pause();
      s.feed()('foo');
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
