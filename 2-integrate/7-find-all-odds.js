const evaluate = require('../evaluate.js');


const findOddsArray1 = ['.', '1', '2', ':'];
const findOddsArray2 = ['1', 'two', 'three', '10'];
const findOddsArray3 = ['one', '2', '', 'NaN'];
const findOddsArray4 = ['.', 1, 2, NaN];
const findOddsArray5 = [true, false];

const oddsToFind = ['1', '3', '5'];
const evensToNotFind = ['2', '4', '6'];

const findAllOddsTests = [
  { name: 'Test 1', args: [findOddsArray1], expected: ['1'] },
  { name: 'Test 2', args: [findOddsArray2], expected: ['1'] },
  { name: 'Test 3', args: [findOddsArray3], expected: [] },
  { name: 'Test 4', args: [oddsToFind], expected: ['1', '3', '5'] },
  { name: 'Test 5', args: [evensToNotFind], expected: [] },
  { name: 'Test 6', args: [findOddsArray4], expected: null },
  { name: 'Test 7', args: [findOddsArray5], expected: null },
  { name: 'Test 8', args: [findOddsArray5], expected: null },
  { name: 'Test 9', args: [[null, false, NaN, undefined, '']], expected: null },
];
function findAllOdds(arr) { }

evaluate(findAllOdds, findAllOddsTests);
