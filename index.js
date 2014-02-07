const expand = require('./lib/expand');
const normalizeFiles = require('./lib/normalize_files');

module.exports = function (input) {
  var files = normalizeFiles(input);
  if (Array.isArray(files)) {
    return files.map(expand);
  } else {
    var output = expand(files);
    return Array.isArray(output) ? output : [output];
  }
};
