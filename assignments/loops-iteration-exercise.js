// # Exercise 1: Print All Test Cases

// **Scenario:** Display all test cases in a test suite with numbering.

// **Requirements:**
// 1. Create an array called `testCases` with these values:
//    - "Login with valid credentials"
//    - "Login with invalid password"
//    - "Login with empty username"
//    - "Logout functionality"
//    - "Remember me checkbox"

// 2. Use a for loop to print each test case with:
//    - Test number (starting from 1, not 0!)
//    - Test case name

// **Example Output:**
// ```
// Login Module Test Suite
// ━━━━━━━━━━━━━━━━━━━━━━━━━

// 1. Login with valid credentials
// 2. Login with invalid password
// 3. Login with empty username
// 4. Logout functionality
// 5. Remember me checkbox

// Total test cases: 5


console.log("========================Output:Exercise 1: Print All Test Cases======================================");
let testCases = ["Login with valid credentials","Login with invalid password","Login with empty username","Logout functionality","Remember me checkbox"]; 
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("       Login Module Test Suite");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

for(let i=0;i<testCases.length;i++){
    console.log(`${i+1}. ${testCases[i]}`);
}
console.log("\n# Total test cases:"+testCases.length+"\n");

// ## Exercise 1.5: Refactor with for...of Loop

// **Scenario:** Learn the modern, cleaner way to iterate arrays when you don't need the index.

// **Requirements:**
// 1. Take the same `testCases` array from Exercise 1
// 2. Rewrite the loop using `for...of` instead of traditional for loop
// 3. Notice how the code becomes cleaner and more readable

// **Traditional for loop (from Exercise 1):**
// ```javascript
// for (let i = 0; i < testCases.length; i++) {
//     console.log((i + 1) + ". " + testCases[i]);
// }
// ```

// **Your task:** Write the same output using for...of
// - **Challenge:** You'll need a separate counter for numbering since for...of doesn't give you `i`
// - **Hint:** Create a variable like `let number = 1` before the loop

// **Example Output:**
// ```
// Login Module Test Suite (for...of version)
// ━━━━━━━━━━━━━━━━━━━━━━━━━

// 1. Login with valid credentials
// 2. Login with invalid password
// 3. Login with empty username
// 4. Logout functionality
// 5. Remember me checkbox

// Total test cases: 5
// ```

// **Solution structure:**
// ```javascript
// console.log("Login Module Test Suite (for...of version)");
// console.log("━━━━━━━━━━━━━━━━━━━━━━━━━\n");

// let testNumber = 1;
// for (let testCase of testCases) {
//     // Your code here: print testNumber and testCase
//     // Don't forget to increment testNumber!
// }
// ```

// **Key Learning:**
// - **Use for...of when:** You just need the values (cleaner code)
// - **Use traditional for when:** You need the index position
// - **for...of syntax:** `for (let item of array)` - reads naturally!


console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("       Login Module Test Suite (for...of version)");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
let i=1;
for(let testcase of testCases){
    console.log(i+"."+testcase);
    i++;
}
console.log("\n# Total test cases:"+testCases.length+"\n");


// ## Exercise 2: Count Test Results

// **Scenario:** Analyze test execution results and generate statistics.

// **Requirements:**
// 1. Create an array called `testResults` with these values:
//    - "PASSED", "PASSED", "FAILED", "PASSED", "SKIPPED", "PASSED", "FAILED", "PASSED"

// 2. Use a for loop to count:
//    - Total tests
//    - PASSED tests
//    - FAILED tests
//    - SKIPPED tests

// 3. Calculate and print:
//    - Pass rate (percentage)
//    - Fail rate (percentage)

// **Example Output:**
// ```
// Test Execution Results
// ━━━━━━━━━━━━━━━━━━━━━━━━━

// Counting results...

// Test Statistics:
//   Total tests: 8
//   Passed: 5 ✓
//   Failed: 2 ✗
//   Skipped: 1 ⊘

//   Pass rate: 62.5%
//   Fail rate: 25.0%

console.log("========================Output:Exercise 2: Count Test Results======================================");

let testResults = ["PASSED", "PASSED", "FAILED", "PASSED", "SKIPPED", "PASSED", "FAILED", "PASSED"];

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("           Test Execution Results");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

console.log("Counting results...");
console.log("\nTest Statistics:");
console.log("Total test cases:"+testResults.length);
let pCount=0,fCount=0,sCount=0;
for(let i=0;i<testResults.length;i++){
if(testResults[i]==="PASSED")
    pCount++;
if(testResults[i]==="FAILED")
    fCount++;
if(testResults[i]==="SKIPPED")
    sCount++;
}
console.log(`Passed: ${pCount} ✓`);
console.log(`Failed: ${fCount} ✗`);
console.log(`Skipped: ${sCount} ⊘`);
console.log(`Pass rate: ${pCount/testResults.length*100}%`);
console.log(`Fail rate: ${(fCount/testResults.length*100).toFixed(1)}%`);

// ## Exercise 3: Calculate Test Scores

// **Scenario:** Calculate statistics for test automation scores.

// **Requirements:**
// 1. Create an array called `testScores` with these values:
//    - 85, 92, 78, 95, 88, 73, 90, 87

// 2. Use a for loop to calculate:
//    - Total of all scores
//    - Average score
//    - Highest score (you'll need to track this as you loop)
//    - Lowest score (you'll need to track this as you loop)

// **Hint for finding highest/lowest:**
// ```javascript
// let highest = testScores[0];  // Start with first score
// for (let i = 1; i < testScores.length; i++) {
//     if (testScores[i] > highest) {
//         highest = testScores[i];
//     }
// }
// ```

// **Example Output:**
// ```
// Test Score Analysis
// ━━━━━━━━━━━━━━━━━━━━━━━━━

// Scores: [ 85, 92, 78, 95, 88, 73, 90, 87 ]

// Calculating statistics...

// Results:
//   Total: 688
//   Average: 86.0
//   Highest: 95
//   Lowest: 73

console.log("========================Output:Exercise 3: Calculate Test Scores======================================");

let testScores = [85, 92, 78, 95, 88, 73, 90, 87];

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("             Test Score Analysis");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("\nScores:",testScores);
console.log("Calculating statistics...");

let highest = testScores[0]; 
let lowest = testScores[0],total=0; 

for (let i = 0; i < testScores.length; i++) {
    total=total+testScores[i];
    if (testScores[i] > highest) {
        highest = testScores[i];
    }
     if (testScores[i] < lowest) {
        lowest = testScores[i];
    }
}

console.log("Results: ");
console.log("Total: "+total);
console.log("Average: "+(total/testScores.length).toFixed(1));
console.log("Highest: "+highest);
console.log("Lowest: "+lowest);


// ## Exercise 4: Find Failed Tests

// **Scenario:** Identify and report all failed tests from a test run.

// **Requirements:**
// 1. Create two parallel arrays:
//    - `testNames`: ["Login", "Logout", "Search", "Checkout", "Payment", "Profile"]
//    - `testResults`: ["PASSED", "FAILED", "PASSED", "FAILED", "PASSED", "FAILED"]

// 2. Use a for loop to:
//    - Print all test results
//    - Find and print ONLY the failed tests with their names
//    - Count total failures

// **Example Output:**
// ```
// Test Execution Report
// ━━━━━━━━━━━━━━━━━━━━━━━━━

// All Tests:
//   1. Login: PASSED ✓
//   2. Logout: FAILED ✗
//   3. Search: PASSED ✓
//   4. Checkout: FAILED ✗
//   5. Payment: PASSED ✓
//   6. Profile: FAILED ✗

// Failed Tests (requires attention):
//   - Logout
//   - Checkout
//   - Profile

// Total failures: 3

console.log("========================Output:Exercise 4: Find Failed Tests======================================");

let testNames =["Login", "Logout", "Search", "Checkout", "Payment", "Profile"];
let testResults1=["PASSED", "FAILED", "PASSED", "FAILED", "PASSED", "FAILED"];
let failedTests = [];
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("             Test Execution Report");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("\nAll Tests:");
for(let i=0 ;i<testNames.length;i++){
    if(testResults1[i]==="PASSED"){
        console.log((i+1)+"."+testNames[i]+":"+testResults1[i]+" ✓");
    }else{
        console.log((i+1)+"."+testNames[i]+":"+testResults1[i]+" ✗");
        failedTests.push(testNames[i]);
    }
}
console.log("\nFailed Tests (requires attention):");
for(let i=0 ;i<failedTests.length;i++){
    console.log((i+1)+"."+failedTests[i]);
}
console.log("\nTotal failures:",failedTests.length);

// ## Exercise 5: Retry Logic with do...while

// **Scenario:** Implement retry logic for a flaky test that might fail occasionally.

// **Requirements:**
// 1. Create a function called `runFlakyTest()` that randomly returns true or false:
//    ```javascript
//    function runFlakyTest() {
//        return Math.random() > 0.7;  // 30% success rate
//    }
//    ```

// 2. Use a do...while loop to:
//    - Run the test at least once
//    - Keep trying until it passes OR max attempts reached
//    - Track the number of attempts
//    - Print the status of each attempt

// 3. Variables to create:
//    - `testName`: "Login Test"
//    - `attempts`: 0
//    - `maxAttempts`: 5
//    - `testPassed`: false

// 4. After the loop, print whether the test eventually passed or failed

// **Why do...while?**
// - The test must run **at least once** (can't know if it passes without trying!)
// - We check the condition **after** each attempt
// - Perfect for retry scenarios

// **Example Output:**
// ```
// Retry Logic Test Runner
// ━━━━━━━━━━━━━━━━━━━━━━━━━

// Running: Login Test
// Max attempts: 5

// Attempt 1...
//   ✗ Test FAILED
//   Retrying...

// Attempt 2...
//   ✗ Test FAILED
//   Retrying...

// Attempt 3...
//   ✓ Test PASSED!

// ✓ Test passed on attempt 3
// ```

// **OR if all attempts fail:**
// ```
// Attempt 1...
//   ✗ Test FAILED
//   Retrying...

// Attempt 2...
//   ✗ Test FAILED
//   Retrying...

// Attempt 3...
//   ✗ Test FAILED
//   Retrying...

// Attempt 4...
//   ✗ Test FAILED
//   Retrying...

// Attempt 5...
//   ✗ Test FAILED

// ✗ Test failed after 5 attempts

console.log("========================Output:Exercise 5: Retry Logic with do...while======================================");

let testName="Login Test"
let attempts=0
let maxAttempts= 5
let testPassed=false
function runFlakyTest() {
    return Math.random() > 0.7; 
}

console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("             Retry Logic Test Runner");
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");
console.log("\nRunning: "+testName);
console.log("Max attempts: "+maxAttempts);

do{
    attempts++;
    testPassed = runFlakyTest();
    console.log("Attempt "+attempts+"...")
    if(testPassed){
        console.log("✓ Test PASSED!");
    }else{
        console.log("✗ Test FAILED");
        console.log("Retrying...\n");
    }

}while(!testPassed && attempts<maxAttempts);
if(testPassed){
    console.log(`✓ Test passed on attempt ${attempts}`);
}else{
    console.log(`✗ Test failed after ${attempts} attempts`);
}


// ## Additional Challenges

// ### Challenge: Complete Test Report Generator

// **Scenario:** Complete test report generator with multiple metrics.

// **Requirements:**
// Create a comprehensive test report that combines everything:

// 1. Create three parallel arrays:
//    - `testNames`: Array of 6 test names
//    - `testResults`: Array of 6 results (PASSED/FAILED/SKIPPED)
//    - `testDurations`: Array of 6 durations in seconds

// 2. Use loops to calculate:
//    - Total tests, passed, failed, skipped
//    - Pass rate
//    - Total duration
//    - Average duration per test
//    - List of failed tests

// 3. Print a formatted report with all statistics

// **Example Output:**
// ```
// ╔═══════════════════════════════════════════╗
// ║       TEST EXECUTION FINAL REPORT         ║
// ╚═══════════════════════════════════════════╝

// Test Details:
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// 1. Login Test
//    Result: PASSED ✓
//    Duration: 2.5s

// 2. Logout Test
//    Result: FAILED ✗
//    Duration: 1.8s

// 3. Search Test
//    Result: PASSED ✓
//    Duration: 3.2s

// 4. Checkout Test
//    Result: PASSED ✓
//    Duration: 2.1s

// 5. Payment Test
//    Result: SKIPPED ⊘
//    Duration: 0.0s

// 6. Profile Test
//    Result: FAILED ✗
//    Duration: 2.4s

// Summary Statistics:
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// Total tests: 6
// Passed: 3 (50.0%)
// Failed: 2 (33.3%)
// Skipped: 1 (16.7%)

// Duration:
//   Total: 12.0s
//   Average: 2.0s per test

// Failed Tests:
//   - Logout Test
//   - Profile Test

// Overall Status: ⚠️  NEEDS ATTENTION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

console.log("==================Output:Additional Challenge: Complete Test Report Generator========================\n");

let testName1=["Login Test","Logout Test","Search Test","Checkout Test","Payment Test","Profile Test"];
let testResults2 =["PASSED","FAILED","PASSED","PASSED","SKIPPED","FAILED"];
let testDurations1=[2.5,1.8,3.2,2.1,0.0,2.4];
let failTest=[];
let p=0,f=0,s=0,duration=0;
console.log("╔═══════════════════════════════════════════╗");
console.log("║       TEST EXECUTION FINAL REPORT         ║");
console.log("╚═══════════════════════════════════════════╝");
console.log("Test Details");
console.log("━━━━━━━━━━━━━━━━━━━━━")
for(let i=0;i<testName1.length;i++){
    let status = testResults2[i];
    //let symbol = status==="PASSED"?"✓" : status==="FAILED"?"✗":"⊘";
    duration += testDurations1[i];
    if (status === "PASSED") {
        symbol = "✓";
        p++;
    } else if (status === "FAILED") {
        symbol = "✗";
        failTest.push(testName1[i]);
        f++;
    } else {
        symbol = "⊘";
        s++;
    }
    console.log((i+1)+"."+testName1[i]);
    console.log("Result: "+testResults2[i]+" "+symbol);
    console.log("Duration: "+testDurations1[i].toFixed(1)+"s\n");
}
console.log("Summary Statistics:");
console.log("━━━━━━━━━━━━━━━━━━━━━");
console.log("Total tests: "+testName1.length);

console.log(`Passed: ${p} (${(p/testName1.length*100).toFixed(1)}%)`);
console.log(`Failed: ${f} (${(f/testName1.length*100).toFixed(1)}%)`);
console.log(`Skipped: ${s} (${(s/testName1.length*100).toFixed(1)}%)`);

console.log("\nDuration:");
console.log("Total: "+duration.toFixed(1)+"s");
console.log("Average: "+(duration/testDurations1.length).toFixed(1)+"s per test");

console.log("\nFailed Tests:");
for(let i=0 ;i<failTest.length;i++){
    console.log((i+1)+"."+failTest[i]);
}

let result = testResults.includes("FAILED") || testResults.includes("SKIPPED");
let overallStatus = result   ? "⚠️  NEEDS ATTENTION"  : "✅ ALL TESTS PASSED";
console.log("\nOverall Status:", overallStatus);
console.log("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━");

