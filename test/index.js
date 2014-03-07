const expect = require('chai').expect;
const configfiles = require('../');

describe('configfiles', function () {

  it('should create a files object from a task declaration', function () {
    expect(configfiles({
      src: 'test/fixtures/*',
      dest: 'dest',
      options: {
        key: 'value'
      }
    })).to.deep.equal([{
      src: ['test/fixtures/1.js',
            'test/fixtures/2.js',
            'test/fixtures/3.js',
            'test/fixtures/bar.txt',
            'test/fixtures/baz.txt',
            'test/fixtures/foo.txt'],
      dest: 'dest'
    }]);

    expect(configfiles({
      src: 'test/fixtures/*',
      dest: 'dest',
      options: {
        key: 'value'
      }
    })).to.deep.equal([{
      src: ['test/fixtures/1.js',
            'test/fixtures/2.js',
            'test/fixtures/3.js',
            'test/fixtures/bar.txt',
            'test/fixtures/baz.txt',
            'test/fixtures/foo.txt'],
      dest: 'dest'
    }]);
  });

});
