# configfiles [![Build Status](https://secure.travis-ci.org/tkellen/node-configfiles.png)](http://travis-ci.org/tkellen/node-configfiles)
> Get files from a configuration using [globule](https://github.com/cowboy/node-globule).

[![NPM](https://nodei.co/npm/configfiles.png)](https://nodei.co/npm/configfiles/)

## What?

```js
var configfiles = require('configfiles');

configfiles({
  src: ['test/fixtures/*.js', '!test/fixtures/*.txt']
});
// [ { src:
//      [ 'test/fixtures/1.js',
//        'test/fixtures/2.js',
//        'test/fixtures/3.js' ] } ]

configfiles({
  src: ['test/fixtures/*'],
  dest: 'dest/file'
});
// [ { src:
//      [ 'test/fixtures/1.js',
//        'test/fixtures/2.js',
//        'test/fixtures/3.js',
//        'test/fixtures/bar.txt',
//        'test/fixtures/baz.txt',
//        'test/fixtures/foo.txt' ],
//     dest: 'dest/file' } ]

configfiles({
  files: {
    src: ['test/fixtures/*'],
    dest: 'dest/file'
  }
});
// [ { src:
//      [ 'test/fixtures/1.js',
//        'test/fixtures/2.js',
//        'test/fixtures/3.js',
//        'test/fixtures/bar.txt',
//        'test/fixtures/baz.txt',
//        'test/fixtures/foo.txt' ],
//     dest: 'dest/file' } ]

configfiles({
  files: [
    { src: ['test/fixtures/*.js'], dest: 'dest/file' },
    { src: ['test/fixtures/*.txt'] }
  ]
});
// [ { src:
//      [ 'test/fixtures/1.js',
//        'test/fixtures/2.js',
//        'test/fixtures/3.js' ],
//     dest: 'dest/file' },
//   { src:
//      [ 'test/fixtures/bar.txt',
//        'test/fixtures/baz.txt',
//        'test/fixtures/foo.txt' ] } ]

configfiles({
  files: ['test/fixtures/*.js']
});
// [ { src:
//      [ 'test/fixtures/1.js',
//        'test/fixtures/2.js',
//        'test/fixtures/3.js' ] } ]

configfiles(['test/fixtures/*.js']);
// [ { src:
//      [ 'test/fixtures/1.js',
//        'test/fixtures/2.js',
//        'test/fixtures/3.js' ] } ]

configfiles({
  expand: true,
  cwd: 'test/fixtures',
  src: '*.js',
  dest: 'dest/'
});
// [ [ { src: [Object], dest: 'dest/1.js' },
//     { src: [Object], dest: 'dest/2.js' },
//     { src: [Object], dest: 'dest/3.js' } ] ]
```
