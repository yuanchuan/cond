var cond = require('../').cond;
var If = require('../').If;
var unless = require('../').unless;

function test(name, result, fn) {
  if (fn() === result) {
    console.log('OK (%s).', name);
  } else {
    throw new Error(name);
  }
}

test('empty parameters', null, function() {
  return cond();
});

test('should ingore redundant parameter', null, function() {
  return cond(
    false,  'ok',
    true
  );
});

test('cond single expression ok', 'ok', function() {
  return cond(true, 'ok');
});

test('cond single expression fail', null, function() {
  return cond(false, 'fail');
});

test('cond multiple expression', 'ok', function() {
  return cond(
    false, 'fail',
    true,  'ok',
    false, 'fail'
  );
});

test('cond default value', 'ok', function() {
  return cond(
    false, 'fail',
    false, 'fail',
    false, 'fail',
    true,  'ok'
  )
})

test('If single expression ok', 'ok', function() {
  return If(true, 'ok')
});

test('If single expression fail', null, function() {
  return If(false, 'fail')
});

test('If-else expression first statement', 'ok', function() {
  return If(true, 'ok', 'fail');
});

test('If-else expression second statement', 'fail', function() {
  return If(false, 'ok', 'fail');
});

test('unless single expression ok', 'ok', function() {
  return unless(false, 'ok')
});

test('unless single expression fail', null, function() {
  return unless(true, 'fail')
});

test('extend cond', true, function() {
  var condEven = cond(function(a, b) {
    if (a % 2 === 0) return b;
  });
  return (
    condEven(2, 'ok') === 'ok' &&
    condEven(3, 'fail') === null
  );
});
