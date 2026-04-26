// ### Part 3: Test Flow Simulation

// Create a new file called `test-execution-flow.js` and simulate a test execution flow where variable values change.

// **Requirements:**
// - Create a variable for test status
// - Show how it changes during test execution
// - Create variables for test details (test name, step number, etc.)
// - Print the flow as it progresses

// **Example Output:**
// ```
// ==========================================
//       TEST EXECUTION FLOW
// ==========================================
// Test Name: Login Functionality Test
// Tester: Priya

// Step 1: Opening browser
// Status: IN PROGRESS

// Step 2: Navigating to login page
// Status: IN PROGRESS

// Step 3: Entering credentials
// Username: testuser@example.com
// Status: IN PROGRESS

// Step 4: Clicking login button
// Status: IN PROGRESS

// Step 5: Verifying dashboard
// Status: COMPLETED

// ==========================================
// Final Status: PASSED
// Test Duration: 2.5 seconds
// ==========================================
// ```

// **Hints:**
// - Start with: `let testStatus = "IN PROGRESS";`
// - Update status as you go: `testStatus = "COMPLETED";`
// - Use `const` for testName (doesn't change)
// - Use `let` for stepNumber (changes)

// ---

const testName = "Login Functionality Test";

let tester = "Snehal Jagtap";
let testStatus = "IN PROGRESS";
let stepNumber = 1;

console.log("==========================================");
console.log("       TEST EXECUTION FLOW");
console.log("==========================================");

console.log("Test Name: " + testName);
console.log("Tester: " + tester);
console.log("");

console.log("Step " + stepNumber + ": Opening browser");
console.log("Status: " + testStatus);
console.log("");
stepNumber++;

console.log("Step " + stepNumber + ": Navigating to login page");
console.log("Status: " + testStatus);
console.log("");
stepNumber++;

console.log("Step " + stepNumber + ": Entering credentials");
console.log("Username: testuser@example.com");
console.log("Status: " + testStatus);
console.log("");
stepNumber++;

console.log("Step " + stepNumber + ": Clicking login button");
console.log("Status: " + testStatus);
console.log("");
stepNumber++;

console.log("Step " + stepNumber + ": Verifying dashboard");
testStatus = "COMPLETED";
console.log("Status: " + testStatus);
console.log("");

let finalStatus = "PASSED";
let duration = "2.5 seconds";

console.log("==========================================");
console.log("Final Status: " + finalStatus);
console.log("Test Duration: " + duration);
console.log("==========================================");