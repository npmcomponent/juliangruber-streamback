var Stream = require('stream');

module.exports = function() {
  var s = new Stream;
  s.readable = true;
  s.feed = function() {
    return function() {
      if (s.stopped) return;
      var args = [].slice.call(arguments);
      s.emit.apply(s, ['data'].concat(args));
    }
  }
  s.stop = function() {
    s.stopped = true;
  }
  s.start = function() {
    s.stopped = false;
  }
  return s;
};
