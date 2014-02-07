const clone = require('clone');
const globule = require('globule');

// Create a files object for a given configuration.
module.exports = function (opts) {
  // Prepare the eventual result.
  var result = {};

  // Make a copy of the incoming options so we can modify
  // and send them into globule without altering the original.
  var input = clone(opts);

  // Make grunt's `cwd` option backwards compatible with globule's srcBase.
  if (input.cwd) {
    input.srcBase = opts.cwd;
  }

  // If the incoming configuration has expand flagged true, use
  // globule.findMapping to populate a result.
  // e.g.
  // {
  //   expand: true,
  //   src: ['assets/*'],
  //   dest: 'public'
  // }
  //
  if (input.expand) {
    // Make grunt's `dest` option backwards compatible with globule's destBase.
    input.destBase = opts.dest;
    result = globule.findMapping(input.src, input);
  } else {
    // If the incoming configuration does not specify expand
    // mode, we only need to expand sources.  Use globule.find
    // to populate a list of sources in the result.
    // e.g.
    // {
    //   src: ['assets/*'],
    //   dest: 'public'
    // }
    result.src = globule.find(input.src, input);

    // If a destination has been specified, add it to the result.
    if (input.dest) {
      result.dest = input.dest;
    }
  }

  return result;
};
