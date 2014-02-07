module.exports = function (input) {

  var files = input.files;

  // do we have a files object already?
  if (files) {
    // if we have a src key or the files object is an array,
    // we're done.
    if(Array.isArray(files) || files.src) {
      return files;
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

  throw new Error('Unable to normalize files: '+input);
};
