# Early Return

What's the early return pattern all about? It's a simple trick to help you write cleaner code.

You've probably noticed by now that code with lots of conditionals, and nested conditionals can be tricky to understand.  What if you could avoid all of that mess by getting the easy stuff out of the way first? Return a result as soon as you can!

* Did the user pass in an invalid argument? return!
* Have you already found your result? return!

This coding pattern is also helpful for other developers reading your code.  Early returns read top to bottom like a paragraph. They also give you a chance to return helpful messages describing what will go wrong ... before it goes wrong: ('wrong type!', 'password is too short', 'expected 2 arguments').

### Index

* [Learning Objectives](#learning-objectives)
* [An Example](#an-example)
* [How to Study These](#how-to-study-these)
  * [Report Files](#report-files)
  * [Debugging](#debugging)
* [The Exercises](#the-exercises)
  * [Isolate](#isolate)
  * [Integrate](#integrate)
* [Helpful Links](#helpful-links)

---

## Learning Objectives

* running, testing & debugging in Node
* applying the early return pattern
* avoiding side effects
* using functional array methods

[TOP](#early-return)

---

## An Example

```js
// two functions with the same behavior
// one uses early return
// the other uses nested conditionals
//  which is easier to understand?

function earlyReturn(a, b) {
  if (typeof a !== 'number' && typeof b !== 'number') {
    return 'a and b are not numbers';
  }
  if (typeof a !== 'number') { return 'a is not a number'; }
  if (typeof b !== 'number') { return 'b is not a number'; }

  return a + b;
}

function nestedConditionals(a, b) {
  let result;
  if (typeof a === 'number') {
    if (typeof b === 'number') {
      result = a + b;
    } else {
      result = 'b is not a number';
    }
  } else {
    if (typeof b === 'number') {
      result = 'a is not a number';
    } else {
      result = 'a and b are not numbers';
    }
  }
  return result;
}


const test1 = earlyReturn(0, 1) === nestedConditionals(0, 1);
const test2 = earlyReturn('0', 1) === nestedConditionals('0', 1);
const test3 = earlyReturn(0, '1') === nestedConditionals(0, '1');
const test4 = earlyReturn('0', '1') === nestedConditionals('0', '1');
console.assert(test1 && test2 && test3 && test4, 'both functions behave the same!');
```

[TOP](#early-return)

---

## How to Study These

Just run the exercise files in node! There are no dependencies or special scripts required.

### Report Files

Each time you successfully run an exercise (ie. no syntax / creation phase errors), a report file will be generated.  It's helpful to open this file and split your editor, with the code on one side and the report on the other.  Each time you run your code, the report will update with the most recent test results.  Seeing the results side-by-side with your code will make debugging and understanding your code a little easier.  The report file will contain:

* The name of the file you ran & the date you last ran it.  This is to help you review your exercises in the coming months.
* A summary of how many test cases fall under each status:
  1. __PASS__: the code ran without any errors and the test case passed
  1. __FAIL__: the code ran without any errors, but the test case did not pass
  1. __ERR__: your function threw an error and did not finish executing
* There will also be a more detailed report on each test case:
  * Passing test cases will just say __PASS__.
  * Failing test cases will show in detail how your function's return value was different from the expected value
  * Errored test cases will contain a readable call-stack describing what error occurred and where in your code

### Debugging

There are a few possible strategies you can use to debug your exercises:

* Fixing Creation Phase errors (ie. syntax errors).  This type of error message will show up in your terminal and will stop a new report from being generated. To fix these errors you will need to read the logged callstack to find out where the error occurred.
* Logging & Asserting to understand what happens while your function executes.  All console output will appear in your terminal, but won't show up in the report file.
* The VSC Debugger, breakpoints & `debugger` statements. This repository comes with a `launch.json` configured to step through whichever file is currently open.
* Study your function in JS Tutor.  Each time you run an exercise file, a link to open your function in JS Tutor will be generated in the terminal.  The link won't include the test cases, just your function to experiment with.

[TOP](#early-return)

---

## The Exercises

### Isolate

These exercises are much simpler than the next, to pass them all you need to do is figure out the correct early-return conditional check.

* [Challenge 1](./1-isolate/challenge-1.js)
* [Challenge 2](./1-isolate/challenge-2.js)
* [Challenge 3](./1-isolate/challenge-3.js)
* [Challenge 4](./1-isolate/challenge-4.js)

### Integrate

For these exercises you will need to combine early returns with your understanding of Array methods.  Careful! The tests will often call your function twice with the same array argument.  if you don't avoid side-effects many tests will fail, even if the logic is correct!

1. [Sum All](./2-integrate/1-sum-all.js)
1. [Return as Numbers](./2-integrate/2-return-as-numbers.js)
1. [Find Evens](./2-integrate/3-find-evens.js)
1. [Find Odds](./2-integrate/4-find-odds.js)
1. [Sum Numberys](./2-integrate/5-sum-numberys.js)

[TOP](#early-return)

---

## Helpful Links

### Early Return

* [early return by example](http://wilsonpage.co.uk/return-early/)
* [FreeCodeCamp early return challenge](https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/basic-javascript/return-early-pattern-for-functions/)
* [a reddit discussion about early returns](https://www.reddit.com/r/javascript/comments/2rit4r/early_return_statements_in_functions/)
* [Tim likes early returns](https://blog.timoxley.com/post/47041269194/avoid-else-return-early)
* [and Jennifer doesn't](https://dev.to/jenniferlynparsons/early-returns-in-javascript-5hfb)

### Helpful VSC Extensions

* Prettier
* Brackets Colorizer

---
---

### <a href="https://hackyourfuture.be" target="_blank"><img src="https://user-images.githubusercontent.com/18554853/63941625-4c7c3d00-ca6c-11e9-9a76-8d5e3632fe70.jpg" width="100" height="100" alt="Hack Your Future: Belgium"></a>
