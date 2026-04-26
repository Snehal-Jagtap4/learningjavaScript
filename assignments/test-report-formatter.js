
// ### Part 2: Design a Test Report

// Create a new file called `test-report-formatter.js` and write code to print a test execution report for any application you've tested.

// **Requirements:**
// 1. Print a test suite name (e.g., "Login Test Suite")
// 2. Print 5 different test cases with names
// 3. Each test should have a status: PASSED, FAILED, or SKIPPED
// 4. Use blank lines to make it readable
// 5. Print a summary at the end (e.g., "3 Passed, 2 Failed")

// **Example Output:**
// ```
// ==========================================
//         LOGIN TEST SUITE
// ==========================================

// Test 1: Login with valid credentials
// Status: PASSED

// Test 2: Login with invalid password
// Status: FAILED

// Test 3: Login with empty username field
// Status: FAILED

// Test 4: Login with special characters in username
// Status: PASSED

// Test 5: Remember me checkbox functionality
// Status: PASSED

// ==========================================
//         TEST SUMMARY
// ==========================================
// Total Tests: 5
// Passed: 3
// Failed: 2
// ==========================================
// ```

// **Hints:**
// - Use `console.log("")` for blank lines
// - Use `console.log("==========")` for borders
// - You can use any test cases from your real testing experience!

console.log("========================================================");
console.log("              📊 DASHBOARD TEST SUITE");
console.log("========================================================");
console.log("");

console.log("1️.Test: Dashboard loads successfully after login");
console.log("  Status: ✅ PASSED");
console.log("");

console.log("2️.Test: Verify dashboard widgets display correct data");
console.log("  Status: ✅ PASSED");
console.log("");

console.log("3️.Test: Navigation from dashboard to other modules");
console.log("  Status: ❌ FAILED");
console.log("");

console.log("4️.Test: Dashboard data refresh functionality");
console.log("  Status: ✅ PASSED");
console.log("");

console.log("5️.Test: Dashboard responsive UI on different devices");
console.log("  Status: ❌ FAILED");
console.log("");

console.log("========================================================");
console.log("              📋 TEST SUMMARY REPORT");
console.log("========================================================");

console.log("🧪 Total Tests   : 5");
console.log("✅ Passed        : 3");
console.log("❌ Failed        : 2");
console.log("⏱ Execution Time: 2.5s");