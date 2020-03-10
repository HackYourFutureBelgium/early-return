const evaluate = require('../evaluate.js');


const numbersToSum1 = [-1, 0, 1];
const numbersToSum2 = [-1, 0, -1];
const numbersToSum3 = [1, 0, 1];

const sumAllTests = [
  { name: 'Test 1', args: [numbersToSum1], expected: 0 },
  { name: 'Test 2', args: [numbersToSum1], expected: 0 },
  { name: 'Test 3', args: [numbersToSum2], expected: -2 },
  { name: 'Test 4', args: [numbersToSum2], expected: -2 },
  { name: 'Test 5', args: [[1, 2, 3]], expected: 6 },
  { name: 'Test 6', args: [numbersToSum3], expected: 2 },
  { name: 'Test 7', args: [numbersToSum3], expected: 2 },
];

function sumAll(arr) { }

evaluate(sumAll, sumAllTests);
