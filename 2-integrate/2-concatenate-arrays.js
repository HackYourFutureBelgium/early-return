const evaluate = require('../evaluate.js');

const arrToConcat1 = [1, 2, 3];
const arrToConcat2 = [2, 3, 4];
const arrToConcat3 = ['3', null, 'hi!'];
const arrToConcat4 = [true, false, '5'];

const concatArraysTests = [
  { name: 'Test 1', args: [arrToConcat2, arrToConcat1], expected: [2, 3, 4, 1, 2, 3] },
  { name: 'Test 2', args: [arrToConcat3, arrToConcat1], expected: ['3', null, 'hi!', 1, 2, 3] },
  { name: 'Test 3', args: [['hello'], arrToConcat4], expected: ['hello', true, false, '5'] },
  { name: 'Test 4', args: [['hello'], ['world']], expected: ['hello', 'world'] },
];

function concatArrays(arr1, arr2) { }

evaluate(concatArrays, concatArraysTests);
