var Streamback = require('../index');
var expect = require('expect.js');
var Stream = require('stream');

describe('Streamback', function() {
  describe('Streamback#feed()', function() {
    it('should emit zero arguments', function(done) {
      var stream = Streamback();
      stream.on('data', function(arg) {
        expect(arg).to.be(undefined);
        done();
      });
      stream.feed()();
    });
    it('should emit one argument', function() {
      var stream = Streamback();
      stream.on('data', function(data) {
        expect(data).to.be(1337);
      });
      stream.feed()(1337);
    });
    it('should emit multiple arguments', function() {
      var stream = Streamback();
      stream.on('data', function(data) {
        expect(data[0]).to.be(null);
        expect(data[1]).to.be(1337);
      });
      stream.feed()(null, 1337);
    });
  });
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
    });
    it('should pause', function() {
      var s = Streamback();
      s.on('data', function() {
        throw new Error('Should never happen');
      });
      s.pause();
      s.feed()('foo');
    });
    it('should resume', function(done) {
      var s = Streamback();
      s.on('data', done);
      s.pause();
      s.resume();
      s.feed()();
    });
    it('should buffer', function(done) {
      var s = Streamback();
      var times = 0;
      s.on('data', function(data) {
        times++;
        if (times == 1) return expect(data).to.be('foo');
        if (times == 2) expect(data).to.be('bar');
        done();
      });
      s.pause();
      s.feed()('foo');
      s.feed()('bar');
      s.resume();
    });
  });
})
