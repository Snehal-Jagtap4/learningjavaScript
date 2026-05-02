// ## Exercise 1: Test Suite Array

// **Scenario:** Create an array to store test case names for a login module.

// **Requirements:**
// 1. Create an array called `testCases` with these 5 test names:
//    - "Valid credentials"
//    - "Invalid password"
//    - "Empty username"
//    - "Empty password"
//    - "Remember me checkbox"

// 2. Print the following:
//    - The complete array
//    - Total number of test cases
//    - The first test case
//    - The last test case (use .length, not hard-coded index!)

// **Example Output:**
// ```
// Test Suite: Login Module

// Test Cases:
// [ 'Valid credentials',
//   'Invalid password',
//   'Empty username',
//   'Empty password',
//   'Remember me checkbox' ]

// Total test cases: 5
// First test: Valid credentials
// Last test: Remember me checkbox
// ```

console.log("========================Output:Exercise 1: Test Suite Array======================================");
let testCases =["Valid credentials","Invalid password","Empty username","Empty password","Remember me checkbox"];
console.log("Total test cases: "+testCases.length);
console.log("First test: "+testCases[0]);
console.log("Last test: "+testCases[testCases.length-1]);

// ## Exercise 2: Test Results Tracker

// **Scenario:** Build a test results array dynamically as tests run.

// **Requirements:**
// 1. Create an empty array called `testResults`
// 2. "Run" 5 tests by adding these results one by one:
//    - "PASSED"
//    - "PASSED"
//    - "FAILED"
//    - "PASSED"
//    - "SKIPPED"
// 3. After adding each result, print: "Test X completed: [RESULT]"
// 4. At the end, print:
//    - Total tests run
//    - The complete results array
//    - Check if "FAILED" exists (using indexOf)

// **Example Output:**
// ```
// Running Test Suite...

// Test 1 completed: PASSED
// Test 2 completed: PASSED
// Test 3 completed: FAILED
// Test 4 completed: PASSED
// Test 5 completed: SKIPPED

// Test Summary:
// Total tests run: 5
// Results: [ 'PASSED', 'PASSED', 'FAILED', 'PASSED', 'SKIPPED' ]
// Contains failures: Yes (found at index 2)

console.log("========================Output:Exercise 2: Test Results Tracker======================================");
let testResults =[];

console.log("Running Test Suite...");
testResults.push("PASSED");
console.log("Test 1 completed: "+testResults[0]);
testResults.push("PASSED");
console.log("Test 2 completed: "+testResults[1]);
testResults.push("FAILED");
console.log("Test 3 completed: "+testResults[2]);
testResults.push("PASSED");
console.log("Test 4 completed: "+testResults[3]);
testResults.push("SKIPPED");
console.log("Test 5 completed: "+testResults[4]);
console.log("Test Summary:");
console.log("Total tests run: "+testResults.length);
console.log("Results:",testResults);
let failedIndex = testResults.indexOf("FAILED");//if not match indexOf return -1
if (failedIndex !== -1) { //thats how comparing (failedIndex !== -1) 
    console.log("Contains failures: Yes (found at index " + failedIndex + ")");
} else {
    console.log("Contains failures: No");
}

// ## Exercise 3: Test Data Management

// **Scenario:** Manage test user emails using array methods.

// **Requirements:**
// 1. Create an array called `testEmails` with these initial values:
//    - "user1@test.com"
//    - "user2@test.com"
//    - "user3@test.com"

// 2. Perform these operations:
//    - Print initial emails and count
//    - Add "user4@test.com" to the END
//    - Add "admin@test.com" to the BEGINNING
//    - Remove the last email
//    - Remove the first email
//    - Print final emails and count

// **Example Output:**
// ```
// Test Email Management

// Initial emails:
// [ 'user1@test.com', 'user2@test.com', 'user3@test.com' ]
// Count: 3

// After adding user4@test.com to end:
// [ 'user1@test.com', 'user2@test.com', 'user3@test.com', 'user4@test.com' ]

// After adding admin@test.com to beginning:
// [ 'admin@test.com', 'user1@test.com', 'user2@test.com', 'user3@test.com', 'user4@test.com' ]

// After removing last email:
// [ 'admin@test.com', 'user1@test.com', 'user2@test.com', 'user3@test.com' ]

// After removing first email:
// [ 'user1@test.com', 'user2@test.com', 'user3@test.com' ]

// Final count: 3

console.log("========================Output:Exercise 3: Test Data Management======================================");

let testEmails =[ 'user1@test.com', 'user2@test.com', 'user3@test.com' ];

// 2. Perform these operations:
//    - Print initial emails and count
//    - Add "user4@test.com" to the END
//    - Add "admin@test.com" to the BEGINNING
//    - Remove the last email
//    - Remove the first email
//    - Print final emails and count

console.log("Initial emails:",testEmails);
console.log("Initial Number of emails:",testEmails.length);
testEmails[testEmails.length]="user4@test.com";
console.log("After adding user4@test.com to end:",testEmails);
testEmails.unshift("admin@test.com");
//testEmails = ["admin@test.com",...testEmails]
console.log("After adding admin@test.com to beginning:",testEmails);
testEmails.splice(testEmails.length-1,1)
console.log("After removing last email:",testEmails);
testEmails.splice(0,1)
console.log("After removing first email:",testEmails);


// ## Exercise 4: Test Score Analysis

// **Scenario:** Store and analyze test automation scores.

// **Requirements:**
// 1. Create an array called `testScores` with these values:
//    - 85, 92, 78, 95, 88, 73, 90

// 2. Calculate and print:
//    - Total number of scores
//    - First score
//    - Last score
//    - Check if score 95 exists in the array

// **Example Output:**
// ```
// Test Score Analysis

// Scores: [ 85, 92, 78, 95, 88, 73, 90 ]
// Total scores: 7

// First score: 85
// Last score: 90

// Checking for specific scores...
// Score 95 found: Yes (at index 3)
// Score 100 found: No (index: -1)

console.log("========================Output:Exercise 4: Test Score Analysis======================================");
let testScores = [85, 92, 78, 95, 88, 73, 90];

console.log("Scores: ",testScores);
console.log("First score: ",testScores[0]);
console.log("Last score: ",testScores[testScores.length-1]);
console.log("Checking for specific scores...");
function isElementFound(arrElement){
    let isFound= false;
    for(let i=0;i<testScores.length; i++){
        if(testScores[i]===arrElement){
         isFound = true
         break;
        }
    }
    if(isFound===true){
        console.log(`Score ${arrElement} found: Yes (at index ${testScores.indexOf(arrElement)})`)
    }else{
        console.log(`Score ${arrElement} found: no (index ${testScores.indexOf(arrElement)})`)
    }
}
 isElementFound(95);
 isElementFound(100);