"use strict";

function cond() {
  var fn = arguments[0];
  if (typeof fn === 'function') {
    return function() {
      return process(arguments, function(a, b, c) {
        return fn(a, b, c);
      });
    }
  }
  return process(arguments, function(a, b) {
    if (a) return b;
  });
}

function If() {
  return cond(function(a, b, c) {
    if (a) return b;
    if (c !== undefined) return c;
    return null;
  }).apply(null, arguments);
}

function unless() {
  arguments[0] = !arguments[0];
  return If.apply(null, arguments);
}

function process(args, fn) {
  var cases = [].slice.call(args);
  var stop = (cases.length % 2) ? 2 : 1;
  for (var i = 0; i < cases.length - stop; i += 2) {
    var result = fn(cases[i], cases[i + 1], cases[i + 2]);
    if (result !== undefined && result !== null ) return result;
  }
  return null;
}

module.exports = {
  cond: cond,
  If: If,
  unless: unless
}
