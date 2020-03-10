const evaluate = require('../evaluate.js');

const isNaNyStringTests = [
  { name: 'Test 1', args: ['3'], expected: false },
  { name: 'Test 2', args: [''], expected: false },
  { name: 'Test 3', args: ['.'], expected: true },
  { name: 'Test 4', args: ['*'], expected: true },
  { name: 'Test 5', args: ['1e3'], expected: false },
  { name: 'Test 6', args: ['1e3'], expected: false },
  { name: 'Test 7', args: ['Infinity'], expected: false },
  { name: 'Test 8', args: ['infinity'], expected: true },
  { name: 'Test 9', args: ['NaN'], expected: true },
  { name: 'Test 10', args: [NaN], expected: null },
  { name: 'Test 11', args: [true], expected: null },
  { name: 'Test 12', args: [undefined], expected: null },
  { name: 'Test 13', args: [null], expected: null },
];

function isNaNyString(arg) { }

evaluate(isNaNyString, isNaNyStringTests);
