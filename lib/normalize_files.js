const flatten = require('flatten');

module.exports = function (input) {

  var files = input.files;

  // do we have a files object already?
  if (files) {
    // if we have a src key, this is a singular files object and
    // we can just return it.
    if (files.src) {
      return files;
    }

    if (Array.isArray(files)) {
      // this is a bad heuristic.  check the first source to see if it
      // is a string.  if it is, assume files is just an array of sources
      if(typeof files[0] === 'string') {
        return { src: files };
      } else {
        // otherwise files is fully expanded already, and we can just
        // flatten and return it
        return flatten(files);
      }
    }

    // if we have a files object, but no source key, assume this form
    // files: {
    //   'dest': ['src'],
    // }
    // ...and convert to this
    // files: [{
    //   src: ['src'], dest: 'dest'
    // }]
    var output = [];
    Object.keys(files).map(function (dest) {
      output.push({src: files[dest], dest: dest});
    });
    return output;
  }

  // if we have a source key, this is a singular files object
  if (input.src) {
    return input;
  }

  // if we only have an array, make it sources
  if (Array.isArray(input)) {
    return { src: input };
  }

  return [];
};
