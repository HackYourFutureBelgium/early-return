const evaluate = require('../evaluate.js');


const findEvensArray1 = ['.', '1', '2', ':'];
const findEvensArray2 = ['1', 'two', 'three', '10'];
const findEvensArray3 = ['one', '2', '', 'NaN'];
const findEvensArray4 = ['.', 1, 2, NaN];
const findEvensArray5 = [true, false];

const oddsToNotFind = ['1', '3', '5'];
const evensToFind = ['2', '4', '6'];

const findAllEvensTests = [
  { name: 'Test 1', args: [findEvensArray1], expected: ['2'] },
  { name: 'Test 2', args: [findEvensArray2], expected: ['10'] },
  { name: 'Test 3', args: [findEvensArray3], expected: ['2', ''] },
  { name: 'Test 4', args: [oddsToNotFind], expected: [] },
  { name: 'Test 5', args: [evensToFind], expected: ['2', '4', '6'] },
  { name: 'Test 6', args: [findEvensArray4], expected: null },
  { name: 'Test 7', args: [findEvensArray5], expected: null },
  { name: 'Test 8', args: [findEvensArray5], expected: null },
  { name: 'Test 9', args: [[null, false, NaN, undefined, '']], expected: null },
];

function findAllEvens(arr) { }

evaluate(findAllEvens, findAllEvensTests);

