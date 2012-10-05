var Stream = require('stream');
var Buffered = require('pause-stream');

module.exports = function() {
  var s = new Stream;
  s.readable = true;

  var buffered = Buffered();
  s.pipe(buffered);

  buffered.feed = function() {
    return function() {
      if (s.stopped) return;
      var args = [].slice.call(arguments);
      var data = ['data'];
      if (args.length == 1) data.push(args[0]);
      if (args.length > 1) data.push(args);
      s.emit.apply(s, data);
    }
  }
  buffered.stop = function() {
    s.stopped = true;
  }
  buffered.start = function() {
    s.stopped = false;
  }
  return buffered;
};
