
call-stream
===========

Turn repeatedly called callbacks into streams.

Installation
------------

```bash
$ component install juliangruber/call-stream
# or
$ npm install call-stream
```

Usage
-----

```javascript
var call-stream = require('call-stream');

var articleStream = call-stream();
api.subscribe('article', articleStream); // gets called on every new article

articleStream.pipe(process.stdout);
```

If you need a EventEmitter instead and e.g. wan't to combine two sources, use [juliangruber/fwd](https://github.com/juliangruber/fwd):

```javascript
var fwd = require('fwd');
var EventEmitter = require('events').EventEmitter // or require('emitter')
var call-stream = require('call-stream');

var articleStream = call-stream();
var patternStream = call-stream();
api.subscribe('article', articleStream); 
api.subscribe('pattern', patternStream); 

var dest = new EventEmitter();

fwd(articleStream, dest, {'data': 'article'});
fwd(patternStream, dest, {'data': 'pattern'});

```

Api
---

### call-stream()

Returns a new `call-stream`-Object that

* can be passed to functions as a _callback_
* emits the passed in data as a _Stream_

License
-------

(MIT)

Copyright (c) 2012 &lt;julian@juliangruber.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
