// ## Exercise 1: Age Range Validation

// **Scenario:** Validate that a user's age is within the acceptable range for test automation training (18-65).

// **Requirements:**
// 1. Create a variable `age` with value `25`
// 2. Write an if-else statement that:
//    - Checks if age is >= 18 AND <= 65
//    - If yes, print: `"✅ Valid age range (18-65)"`
//    - If no, print: `"❌ Age must be between 18 and 65"`

// **Test Cases:**
// Try running your code with these values:
// - `18` → Valid (boundary)
// - `17` → Invalid (too young)
// - `65` → Valid (boundary)
// - `66` → Invalid (too old)
// - `25` → Valid (in range)

// **Example Output:**
// ```
// Age: 25
// ✅ Valid age range (18-65)
// ```
 let age =25;

 if(age>=18 && age <=65){
    console.log("✅ Valid age range (18-65)");
 }else{
    console.log("❌ Age must be between 18 and 65");
 }

  console.log("=================================================================");

//  # Exercise 2: Login Credentials Validator

// **Scenario:** A user can login with EITHER (username AND password) OR email.

// **Requirements:**
// 1. Create three variables:
//    - `username` with value `"testuser"`
//    - `password` with value `"Test@123"`
//    - `email` with value `""`
// 2. Write an if-else statement that:
//    - Checks if (username is NOT empty AND password is NOT empty) OR email is NOT empty
//    - If yes, print: `"✅ Sufficient login credentials"`
//    - If no, print: `"❌ Insufficient credentials - provide username+password OR email"`

// **Hint:** Use parentheses to group the AND condition:
// ```javascript
// if ((condition1 && condition2) || condition3) {
// ```

// **Test Cases:**
// - `username="testuser"`, `password="Test@123"`, `email=""` → Valid
// - `username="testuser"`, `password=""`, `email=""` → Invalid
// - `username=""`, `password=""`, `email="test@example.com"` → Valid

// **Example Output:**
// ```
// Checking credentials...
// Username: testuser
// Password: ******** (8 characters)
// Email: (empty)

// ✅ Sufficient login credentials
// ```

// Exercise 2: Login Credentials Validator

let username = "testuser";
let password = "Test@123";
let email = "";

console.log("Checking credentials...");
console.log("Username:", username);
console.log("Password:",password ? "******** (" + password.length + " characters)" : "(empty)");
console.log("Email:", email ? email : "(empty)");

if ((username !== "" && password !== "") || email !== "") {
  console.log("✅ Sufficient login credentials");
} else {
  console.log("❌ Insufficient credentials - provide username+password OR email");
}

console.log("=================================================================");


// ## Exercise 3: Test Status Validator

// **Scenario:** A test is considered successful if status is "PASSED" OR "SKIPPED", AND there are no errors.

// **Requirements:**
// 1. Create two variables:
//    - `status` with value `"PASSED"`
//    - `errorCount` with value `0`
// 2. Write an if-else statement that:
//    - Checks if (status is "PASSED" OR "SKIPPED") AND errorCount equals 0
//    - If yes, print: `"✅ Test completed successfully"`
//    - If no, print: `"❌ Test has issues"`

// **Test Cases:**
// - `status="PASSED"`, `errorCount=0` → Success
// - `status="SKIPPED"`, `errorCount=0` → Success
// - `status="PASSED"`, `errorCount=2` → Issues
// - `status="FAILED"`, `errorCount=0` → Issues

// **Example Output:**
// ```
// Test Status: PASSED
// Error Count: 0

// Validation:
//   Status is acceptable: true
//   No errors: true

// ✅ Test completed successfully


let status = "PASSED";
let errorCount = 0;

console.log("Test Status:", status);
console.log("Error Count:", errorCount);

console.log("\nValidation:");

if (status === "PASSED" || status === "SKIPPED") {
  console.log("Status is acceptable: true");
} else {
  console.log("Status is acceptable: false");
}

if (errorCount === 0) {
  console.log("No errors: true");
} else {
  console.log("No errors: false");
}

if ((status === "PASSED" || status === "SKIPPED") && errorCount === 0) {
  console.log("\n✅ Test completed successfully");
} else {
  console.log("\n❌ Test has issues");
}

console.log("=================================================================");
// ## Exercise 4: Response Time Validator

// **Scenario:** Performance test - response time must be less than 3 seconds.

// **Requirements:**
// 1. Create a variable `responseTime` with value `2.5`
// 2. Write an if-else statement that:
//    - Checks if responseTime < 3
//    - If yes, print: `"✅ Performance test PASSED (response time: X seconds)"`
//    - If no, print: `"❌ Performance test FAILED (response time: X seconds, threshold: 3 seconds)"`

// **Test Cases:**
// - `2.5` → PASSED
// - `3.0` → FAILED (not less than 3)
// - `2.999` → PASSED
// - `3.5` → FAILED

// **Example Output:**
// ```
// Response Time Test
// Threshold: 3 seconds
// Actual: 2.5 seconds

// ✅ Performance test PASSED (response time: 2.5 seconds)

// Exercise 4: Response Time Validator

let responseTime = 2.5;
let threshold = 3;

console.log("Response Time Test");
console.log("Threshold:", threshold, "seconds");
console.log("Actual:", responseTime, "seconds");

if (responseTime < threshold) {
  console.log("\n✅ Performance test PASSED (response time: " + responseTime + " seconds)");
} else {
  console.log("\n❌ Performance test FAILED (response time: " + responseTime + " seconds, threshold: " + threshold + " seconds)");
}