var Stream = require('pause-stream');

module.exports = function() {
  var s = new Stream();

  s.feed = function() {
    return function() {
      if (s.stopped) return;
      var args = [].slice.call(arguments);
      if (args.length > 1) args = [args];
      s.write.apply(s, args);
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
