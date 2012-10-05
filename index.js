var Stream = require('stream');

module.exports = function() {
  var s = new Stream;
  s.readable = true;
  s.feed = function() {
    return function() {
      if (s.paused) return;
      var args = [].slice.call(arguments);
      s.emit.apply(s, ['data'].concat(args));
    }
  }
  s.pause = function() {
    s.paused = true;
  }
  s.resume = function() {
    s.paused = false;
  }
  return s;
};
