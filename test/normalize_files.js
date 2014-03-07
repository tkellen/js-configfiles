const expect = require('chai').expect;
const normalizeFiles = require('../lib/normalize_files');

describe('normalizeFiles', function () {

  it('should extract single src/dest form', function () {
    var input = {
      src: ['src'],
      dest: 'dest',
      key: true
    };
    var expected = input;
    expect(normalizeFiles(input)).to.deep.equal(expected);
  });

  it('should extract files array expanded form', function () {
    var input = {
      files: {
        destOne: ['src'],
        destTwo: ['src2']
      }
    };
    var expected = [
      {src: ['src'], dest: 'destOne'},
      {src: ['src2'], dest: 'destTwo'}
    ];
    expect(normalizeFiles(input)).to.deep.equal(expected);
  });


  it('should extract files source array form', function () {
    var input = {
      files: ['src']
    };
    var expected = {src:['src']};
    expect(normalizeFiles(input)).to.deep.equal(expected);
  });

  it('should extract files object form', function () {
    var input = {
      files: {
        src: 'src',
        dest: 'dest'
      }
    };
    var expected = input.files;
    expect(normalizeFiles(input)).to.deep.equal(expected);
  });

  it('should extract plain array form', function () {
    var input = ['src'];
    var expected = {src:input};
    expect(normalizeFiles(input)).to.deep.equal(expected);
  });

  it('should flatten nested array form', function () {
    var input = {
      files: [
        [{src: 'one'}],
        [{src: 'two'},{src: 'three'}]
      ]
    };
    var expected = [
      {src: 'one'},
      {src: 'two'},
      {src: 'three'}
    ];
    expect(normalizeFiles(input)).to.deep.equal(expected);
  });

});
