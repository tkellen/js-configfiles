module.exports = function (input) {

  var files = input.files;

  // do we have a files object already?
  if (files) {
    // if we have an array already, the files object is in the most
    // expanded form already.  return it directly.
    if(Array.isArray(files)) {
      return files;
    }
    // if we have a src key, we already have a valid files object so
    // we should just ensure it is an array.
    if(files.src) {
      return Array.isArray(files) ? files : [files];
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
    return [input];
  }

  throw new Error('Unable to normalize files: '+input);
};
