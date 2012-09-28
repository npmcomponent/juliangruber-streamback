var Stream = require('stream');

module.exports = function() {
  var callStream = new Stream;
  callStream.readable = true;
  callStream.feed = function() {
    return function() {
      var args = [].slice.call(arguments);
      callStream.emit.apply(callStream, ['data'].concat(args));
    }
  }
  return callStream;
};
