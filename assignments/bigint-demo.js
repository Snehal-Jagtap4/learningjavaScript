// ### Part 4: BigInt — Large Number Precision

// Create `bigint-demo.js` to explore the limit of regular `Number` and how `BigInt` fixes it.

// **Requirements:**
// 1. Store `Number.MAX_SAFE_INTEGER` and print it
// 2. Add `1`, `2`, and `3` to it — observe where the result stops changing
// 3. Repeat using BigInt equivalent (`9007199254740991n`)
// 4. Print `typeof` a BigInt value
// 5. Demonstrate that mixing BigInt and Number throws an error (use try/catch)

// **Test Cases:**
// ```javascript
// // What does this print?
// let max = Number.MAX_SAFE_INTEGER;
// console.log(max + 1);  // ?
// console.log(max + 2);  // ?
// console.log(max + 3);  // ?

// // Fix with BigInt
// let bigMax = 9007199254740991n;
// console.log(bigMax + 1n);  // ?
// console.log(bigMax + 2n);  // ?
// console.log(bigMax + 3n);  // ?
// ```

let max = Number.MAX_SAFE_INTEGER;
console.log(max);
console.log("Type of max:"+ typeof max);
console.log(max + 1);  // ?
console.log(max + 2);  // ?
console.log(max + 3);  // ?

console.log("================================="); 

let bigMax = 9007199254740991n;
console.log("Type of bigMax:"+ typeof bigMax);
console.log(bigMax + 1n);  // ?
console.log(bigMax + 2n);  // ?
console.log(bigMax + 3n);  // ?