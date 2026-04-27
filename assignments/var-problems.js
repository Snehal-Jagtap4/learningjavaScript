// ### Part 4: `var` — Hoisting and Scope Surprises

// Create `var-problems.js` to observe exactly how `var` differs from `let`.

// **Step 1 — Hoisting (read a variable before its declaration)**

// Copy this code, predict what each `console.log` prints, then run it. First thinking is important
// so once you see output you can understand better:

// ```javascript
// console.log("Status before declaration: " + testStatus);
// var testStatus = "PASSED";
// console.log("Status after declaration: " + testStatus);
// ```

// Then replace `var` with `let` and run again. What changes?

// **What to notice:** `var` is silently moved to the top of the function — JavaScript already "knows" about it, but the value is `undefined` until the assignment line. `let` instead crashes with "Cannot access before initialization", which is the safer behaviour.

// ---

// **Step 2 — `var` leaks out of if-blocks**

// Copy and run:

// ```javascript
// if (true) {
//     var tempUser = "admin@test.com";
//     console.log("Inside block: " + tempUser);
// }
// console.log("Outside block: " + tempUser);  // Does this crash or print?
// ```

// Now replace `var` with `let` and run again. What happens to the last line?

// **What to notice:** `var` ignores `{ }` boundaries — it leaks out. `let` stays inside the block.

// ---

// **Step 3 — `var` in a for-loop leaks the counter**

// Copy and run:

// ```javascript
// for (var i = 0; i < 3; i++) {
//     console.log("Running test step " + i);
// }
// console.log("After loop, i = " + i);   // What is i here?
// ```

// Then replace `var i` with `let i` and run again. What happens to the last line?

// **What to notice:** With `var`, the loop counter `i` is still accessible — and holds its final value — after the loop ends. With `let`, that line crashes.

// ---

// **Step 4 — The fix: always use `let` or `const`**

// Rewrite all three examples above using `let` (and `const` where the value never changes). Confirm each now behaves safely.

// ```
// Key rule: In modern JavaScript always use let or const — never var.
// You will still SEE var in older code, so it is important to understand
// why it behaves differently, not just that it is old.
// ```

// ---

//Step 1 — Hoisting (read a variable before its declaration) using var
console.log("Status before declaration: " + testStatusVar);
var testStatusVar = "PASSED";
console.log("Status after declaration: " + testStatusVar);
//output of above code 
// Status before declaration: undefined
// Status after declaration: PASSED


//Step 2 — `var` leaks out of if-blocks using var
if (true) {
    var tempUser = "admin@test.com";
    console.log("Inside block: " + tempUser);
}
console.log("Outside block: " + tempUser);  



// Step 3 — `var` in a for-loop leaks the counter using var
for (var i = 0; i < 3; i++) {
      console.log("Running test step " + i);
 }
  console.log("After loop, i = " + i);   

// Step 4 — The fix: always use `let` or `const`

//Step 1 — Hoisting (read a variable before its declaration) using let
//console.log("Status before declaration: " + testStatusLet);
let testStatusLet = "PASSED";
console.log("Status after declaration: " + testStatusLet);
//output of above code 
// Failed-D:\learningjavascript\assignments\var-problems.js:76
// console.log("Status before declaration: " + testStatusLet);
// ReferenceError: Cannot access 'testStatusLet' before initialization


//Step 2 — if-blocks using let
if (true) {
    let tempUser1 = "admin@test.com";
    console.log("Inside block: " + tempUser1);
}
//console.log("Outside block: " + tempUser1);  //ReferenceError: tempUser1 is not defined

// Step 3 — `let` in a for-loop leaks the counter using let
for (let j = 0; j < 3; j++) {
      console.log("Running test step " + j);
 }
 // console.log("After loop, i = " + j);  //ReferenceError: j is not defined