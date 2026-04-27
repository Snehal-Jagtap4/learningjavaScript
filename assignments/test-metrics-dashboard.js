
// ### Part 2: Test Metrics Dashboard

// Create `test-metrics-dashboard.js` showing test execution metrics.

// **Use these data types:**
// - Total tests (number)
// - Passed tests (number)
// - Failed tests (number)
// - Pass rate (number with decimal)
// - Test suite name (string)
// - All tests passed? (boolean)

// ---


let totalTests = 100;          // Number
let passedTests = 85;          // Number
let failedTests = 15;          // Number
let passRate = 85.0;           // Number (decimal)
let testSuiteName = "Login Test Suite"; // String
let allTestsPassed = false;    // Boolean

console.log("===== TEST METRICS DASHBOARD =====");

console.log("Test Suite Name:", testSuiteName);
console.log("Total Tests:", totalTests);
console.log("Passed Tests:", passedTests);
console.log("Failed Tests:", failedTests);
console.log("Pass Rate:", passRate);
console.log("All Tests Passed:", allTestsPassed);