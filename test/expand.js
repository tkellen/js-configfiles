const expect = require('chai').expect;
const expand = require('../lib/expand');

describe('expand', function () {

  it('expand requests using globule', function () {
    expect(expand({src:'test/fixtures/*'})).to.deep.equal({
      src: ['test/fixtures/1.js',
            'test/fixtures/2.js',
            'test/fixtures/3.js',
            'test/fixtures/bar.txt',
            'test/fixtures/baz.txt',
            'test/fixtures/foo.txt']
    });

    expect(expand({src:'test/fixtures/*',dest:'dest'})).to.deep.equal({
      src: ['test/fixtures/1.js',
            'test/fixtures/2.js',
            'test/fixtures/3.js',
            'test/fixtures/bar.txt',
            'test/fixtures/baz.txt',
            'test/fixtures/foo.txt'],
      dest: 'dest'
    });

    expect(expand({src:'test/fixtures/*',dest:'dest/',expand:true})).to.deep.equal([
      {src: ['test/fixtures/1.js'], dest: 'dest/test/fixtures/1.js'},
      {src: ['test/fixtures/2.js'], dest: 'dest/test/fixtures/2.js'},
      {src: ['test/fixtures/3.js'], dest: 'dest/test/fixtures/3.js'},
      {src: ['test/fixtures/bar.txt'], dest: 'dest/test/fixtures/bar.txt'},
      {src: ['test/fixtures/baz.txt'], dest: 'dest/test/fixtures/baz.txt'},
      {src: ['test/fixtures/foo.txt'], dest: 'dest/test/fixtures/foo.txt'}
    ]);

    expect(expand({src:['test/fixtures/*']})).to.deep.equal({
      src: ['test/fixtures/1.js',
            'test/fixtures/2.js',
            'test/fixtures/3.js',
            'test/fixtures/bar.txt',
            'test/fixtures/baz.txt',
            'test/fixtures/foo.txt']
    });

  });
});

