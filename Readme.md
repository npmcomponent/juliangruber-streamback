
streamback
==========

Turn repeatedly called callbacks into streams. Pass a streamback!

Installation
------------

```bash
$ component install juliangruber/streamback
# or
$ npm install streamback
```

Usage
-----

```javascript
var Streamback = require('streamback');

var articleStream = Streamback();
api.subscribe('article', articleStream.feed()); // gets called on every new article

articleStream.pipe(process.stdout);
```

Api
---

### Streamback()

Returns a `streamback` stream.

### Streamback#feed()

Returns a function to be passed as callback. If multiple arguments are passed to this, they are combined to an array.

### Streamback#stop(), Streamback#start()

When stopped, passed in data is dropped.

### Streamback#pause(), Streamback#resume()

Work as expected. Thanks, [pause-stream](https://github.com/dominictarr/pause-stream) :)

Tests
-----

```bash
# clone this repository
$ npm install
$ mocha
```

License
-------

(MIT)

Copyright (c) 2012 &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
