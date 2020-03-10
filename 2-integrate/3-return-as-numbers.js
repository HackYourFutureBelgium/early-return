const evaluate = require('../evaluate.js');

const thingsToNumber1 = ['.', '1', '2', ':'];
const thingsToNumber2 = ['1', 'two', 'three', '10'];
const thingsToNumber3 = ['one', '2', '', 'NaN'];
const thingsToNumber4 = ['.', 1, 2, NaN];
const thingsToNumber5 = [true, false];

const oddsToNumber = ['1', '3', '5'];
const evensToNumber = ['2', '4', '6'];

const returnAsNumbersTests = [
  { name: 'Test 1', args: [thingsToNumber1], expected: [1, 2] },
  { name: 'Test 2', args: [thingsToNumber2], expected: [1, 10] },
  { name: 'Test 3', args: [thingsToNumber3], expected: [2, 0] },
  { name: 'Test 4', args: [oddsToNumber], expected: [1, 3, 5] },
  { name: 'Test 5', args: [oddsToNumber], expected: [1, 3, 5] },
  { name: 'Test 6', args: [evensToNumber], expected: [2, 4, 6] },
  { name: 'Test 7', args: [evensToNumber], expected: [2, 4, 6] },
  { name: 'Test 8', args: [thingsToNumber4], expected: null },
  { name: 'Test 9', args: [thingsToNumber5], expected: null },
  { name: 'Test 10', args: [thingsToNumber5], expected: null },
  { name: 'Test 11', args: [[null, false, NaN, undefined, '']], expected: null },
];

function returnAsNumbers(arr) { };

evaluate(returnAsNumbers, returnAsNumbersTests);

