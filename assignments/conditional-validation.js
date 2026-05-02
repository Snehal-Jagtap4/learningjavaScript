// ## Exercise 1: Email Validation

// **Scenario:** Before running login tests, validate the test email address.

// **Requirements:**
// 1. Create a variable `email` with value `"testuser@example.com"`
// 2. Write an if-else statement that:
//    - Checks if email contains both `@` AND `.`
//    - If yes, print: `"✅ Valid email format"`
//    - If no, print: `"❌ Invalid email format"`

// **Hint:** Use the `.includes()` method:
// ```javascript
// email.includes("@")  // Returns true if email contains @
// ```

// **Test Cases:**
// - `"testuser@example.com"` → Valid
// - `"notanemail"` → Invalid
// - `"missing@domain"` → Invalid (no dot)

// **Example Output:**
// ```
// Testing email: testuser@example.com
// ✅ Valid email format

console.log("-------------Output:Exercise 1: Email Validation-------------------");

let email = "testuser@example.com";
if(email.includes(".") && email.includes(".") && email.indexOf("@") < email.lastIndexOf(".")){
    console.log("✅ Valid email format");
}else{
    console.log("❌ Invalid email format");
}


// ## Exercise 2: Test Result Categorizer

// **Scenario:** Your test framework returns different status codes. You need to display appropriate messages.

// **Requirements:**
// 1. Create a variable `testResult` with value `"PASSED"`
// 2. Write an if-else-if statement that handles:
//    - `"PASSED"` → Print: `"✓ Test passed successfully"`
//    - `"FAILED"` → Print: `"✗ Test failed - check logs"`
//    - `"SKIPPED"` → Print: `"⊘ Test skipped"`
//    - Anything else → Print: `"? Unknown test status"`

// **Test Cases:**
// Try running your code with each of these values:
// - `"PASSED"`
// - `"FAILED"`
// - `"SKIPPED"`
// - `"PENDING"`

// **Example Output:**
// ```
// Test Status: PASSED
// ✓ Test passed successfully
// ```
console.log("-------------Output:Exercise 2: Test Result Categorizer using if-else-if-------------------");
let testResult = "PASSED";
if(testResult==="PASSED"){
    console.log("Test Status:"+testResult);
    console.log("✓ Test passed successfully");
}else if(testResult==="FAILED"){
    console.log("Test Status:"+testResult);
    console.log("✗ Test failed - check logs");
}else if(testResult==="SKIPPED"){
    console.log("Test Status:"+testResult);
    console.log("⊘ Test skipped");
}else{
    console.log("Test Status:"+testResult);
    console.log("? Unknown test status");
}


// ## Exercise 3: Password Strength Checker

// **Scenario:** Validate password strength for test user creation.

// **Requirements:**
// 1. Create a variable `password` with value `"Test@123"`
// 2. Write an if-else-if statement that checks password length:
//    - Less than 6 characters → `"❌ Weak password - too short"`
//    - Less than 10 characters → `"⚠️ Medium password strength"`
//    - 10 or more characters → `"✅ Strong password"`

// **Test Cases:**
// - `"Test"` (4 chars) → Weak
// - `"Test@123"` (8 chars) → Medium
// - `"Test@12345"` (10 chars) → Strong

// **Hint:** Use `.length` property:
// ```javascript
// password.length  // Returns the number of characters
// ```

// **Example Output:**
// ```
// Password: Test@123
// Length: 8 characters
// ⚠️ Medium password strength
// ```

console.log("-------------Output:Exercise 3: Password Strength Checker-------------------");

let password="Test@123";

if(password.length<6){
    console.log("Password:"+password);
    console.log("Length:"+password.length+" characters");
    console.log("❌ Weak password - too short");
}else if(password.length<10){
    console.log("Password:"+password);
    console.log("Length:"+password.length+" characters");
    console.log("⚠️ Medium password strength");
}else {
    console.log("Password:"+password);
    console.log("Length:"+password.length+" characters");
    console.log("✅ Strong password");
}

// ## Exercise 4: Test Score Grading

// **Scenario:** Convert test automation scores to letter grades.

// **Requirements:**
// 1. Create a variable `score` with value `85`
// 2. Write an if-else-if statement that assigns grades:
//    - 90 or above → `"Grade: A (Excellent)"`
//    - 80-89 → `"Grade: B (Good)"`
//    - 70-79 → `"Grade: C (Average)"`
//    - 60-69 → `"Grade: D (Pass)"`
//    - Below 60 → `"Grade: F (Fail)"`

// **Test Cases:**
// - `95` → A
// - `85` → B
// - `75` → C
// - `65` → D
// - `50` → F

// **Important:** Pay attention to the ORDER of conditions! Most specific first.

// **Example Output:**
// ```
// Test Score: 85
// Grade: B (Good)
// ```

console.log("-------------Output:Exercise 4: Test Score Grading-------------------");
scores =59;
if(scores>=90){
    console.log("Test Score: "+scores);
    console.log("Grade: A (Excellent)");
}else if(scores>=80 && scores<=89){
    console.log("Test Score: "+scores);
    console.log("Grade: B (Good)");
}else if(scores>=70 && scores<=79){
    console.log("Test Score: "+scores);
    console.log("Grade: C (Average)");
}else if(scores>=60 && scores<=69){
    console.log("Test Score: "+scores);
    console.log("Grade: D (Pass)");
}else {
    console.log("Test Score: "+scores);
    console.log("Grade: F (Fail)");
}

// ## Exercise 5: Early Return Pattern

// **Scenario:** Refactor a nested validation function to use guard clauses.

// **Part A — Understand the nested version:**
// ```javascript
// function checkTestData(result, duration) {
//     if (result !== null) {
//         if (duration >= 0) {
//             if (duration <= 10) {
//                 return "Valid: " + result + " in " + duration + "s";
//             } else {
//                 return "Error: Duration too long";
//             }
//         } else {
//             return "Error: Negative duration";
//         }
//     } else {
//         return "Error: No result";
//     }
// }
// ```

// **Part B — Rewrite using early return (guard clauses):**
// - Check each error condition first and return immediately
// - The happy path should be the last line

// **Test with:** `(null, 3)`, `("PASSED", -1)`, `("PASSED", 15)`, `("PASSED", 2)`

// **Expected Output (same for both versions):**
// ```
// Error: No result
// Error: Negative duration
// Error: Duration too long
// Valid: PASSED in 2s

console.log("-------------Output:Exercise 5: Early Return Pattern-------------------");
let result;
let duration;
function checkTestData(result, duration) {
    if(result===null){
         return console.log("Error: No result");
    }
    if(duration<0){
         return console.log("Error: Negative duration");
    }
    if(duration>10){
       return console.log("Error: Duration too long"); 
    }
     return console.log("Valid: " + result + " in " + duration + "s");
}

checkTestData(null, 3);
checkTestData("PASSED", -1);
checkTestData("PASSED", 15);
checkTestData("PASSED", 2);


// ## Exercise 6: Switch — Basic Value Matching

// **Scenario:** Exercise 2 used if-else-if to handle test results. Rewrite it using `switch` and notice how much cleaner it reads when matching one variable against several fixed values.

// **Requirements:**
// 1. Create a variable `testResult` with value `"FAILED"`
// 2. Use a `switch` statement to print:
//    - `"PASSED"` → `"✓ Test passed successfully"`
//    - `"FAILED"` → `"✗ Test failed - check logs"`
//    - `"SKIPPED"` → `"⊘ Test skipped"`
//    - `"PENDING"` → `"⏳ Test pending - not yet run"`
//    - anything else → `"? Unknown test status"`

// **Starter template:**
// ```javascript
// let testResult = "FAILED";

// switch (testResult) {
//     case "PASSED":
//         // your code
//         break;
//     // add remaining cases
// }
// ```

// **Test with:** `"PASSED"`, `"FAILED"`, `"SKIPPED"`, `"PENDING"`, `"UNKNOWN"`

// **Tricky question:** What happens if you remove all the `break` statements? Predict before trying.
//Answer : if we remove all the 'break' statements it will continue execution and print all case 

console.log("-------------Output:Exercise 6: Switch — Basic Value Matching-------------------");
console.log("-------------Output:Test Result Categorizer using switch case-------------------");
testResult = "FAILED";
switch(testResult){
    case "PASSED":
            console.log("Test Status:"+testResult);
            console.log("✓ Test passed successfully");
            break;
    case "FAILED":
            console.log("Test Status:"+testResult);
            console.log("✗ Test failed - check logs");
            break;
     case "SKIPPED":
            console.log("Test Status:"+testResult);
            console.log("⊘ Test skipped");
            break;
    case "PENDING":
            console.log("Test Status:"+testResult);
            console.log("⏳ Test pending - not yet run");
            break;
    default :
             console.log("Test Status:"+testResult);
             console.log("? Unknown test status");
}

// ## Exercise 7: Switch — Grouping Cases (Multiple Cases, One Outcome)

// **Scenario:** Map HTTP status codes to categories. Some codes share the same message — use fall-through to group them.

// **Requirements:**

// ```javascript
// let statusCode = 401;

// switch (statusCode) {
//     case 200:
//         // "✅ 200 OK — request successful"
//         break;
//     case 201:
//         // "✅ 201 Created — resource created"
//         break;
//     case 400:
//     case 401:
//     case 403:
//         // Group these: "❌ Client error — check your request"
//         // (400, 401, and 403 all print the same message — intentional fall-through)
//         break;
//     case 404:
//         // "❌ 404 Not Found — endpoint does not exist"
//         break;
//     case 500:
//     case 502:
//     case 503:
//         // Group these: "🔥 Server error — backend issue"
//         break;
//     default:
//         // "? Unknown status code: " + statusCode
// }
// ```

// **Test with:** `200`, `201`, `400`, `401`, `403`, `404`, `500`, `502`, `503`, `418`

// **Key concept:** When multiple `case` labels appear with no `break` between them, they all fall through to the same block. This is the **only** intentional use of fall-through.

console.log("-------------Output:## Exercise 7: Switch — Grouping Cases (Multiple Cases, One Outcome)-------------------");
let statusCode;
function checkStatusCode(statusCode){
    switch (statusCode) {
    case 200:
        console.log("✅ 200 OK — request successful");
        break;
    case 201:
        console.log("✅ 201 Created — resource created");
        break;
    case 400:
    case 401:
    case 403:
        console.log("Group these: ❌ Client error — check your request");
        console.log ("400, 401, and 403 all print the same message — intentional fall-through");
        break;
    case 404:
        console.log ("❌ 404 Not Found — endpoint does not exist");
        break;
    case 500:
    case 502:
    case 503:
        console.log("Group these: 🔥 Server error — backend issue");
        break;
    default:
        console.log ("? Unknown status code: " + statusCode);
   }
}
checkStatusCode(200);
checkStatusCode(201);
checkStatusCode(400);
checkStatusCode(401);
checkStatusCode(403);
checkStatusCode(404);
checkStatusCode(500);
checkStatusCode(502);
checkStatusCode(503);
checkStatusCode(418);


// ## Exercise 8: Switch with Expressions

// `switch` compares using `===`. So you can switch on **any expression** that produces a value — not just a plain variable.

// ### 8a: Switch on a computed value (grade buckets)

// Instead of `if (score >= 90)` chains, compute the "tens digit" and switch on that:

// ```javascript
// let score = 85;

// // Math.floor(85 / 10) = 8  → maps to grade B
// switch (Math.floor(score / 10)) {
//     case 10:
//     case 9:
//         console.log("Grade: A (Excellent)");
//         break;
//     case 8:
//         console.log("Grade: B (Good)");
//         break;
//     case 7:
//         console.log("Grade: C (Average)");
//         break;
//     case 6:
//         console.log("Grade: D (Pass)");
//         break;
//     default:
//         console.log("Grade: F (Fail)");
// }
// ```

// **Test with scores:** `100`, `95`, `85`, `75`, `65`, `55`

// **Why `case 10` and `case 9` are grouped:** A score of 100 gives `Math.floor(100/10) = 10`, so it needs its own case that falls through to the grade A block.

console.log("-------------Output:## Exercise 8: Switch with Expressions-------------------");
console.log("-------------Output:## Exercise 8a: Switch on a computed value (grade buckets)-------------------");

let score = 93;

// Math.floor(85 / 10) = 8  → maps to grade B
switch (Math.floor(score / 10)) {
    case 10:
    case 9:
        console.log("Grade: A (Excellent)");
        break;
    case 8:
        console.log("Grade: B (Good)");
        break;
    case 7:
        console.log("Grade: C (Average)");
        break;
    case 6:
        console.log("Grade: D (Pass)");
        break;
    default:
        console.log("Grade: F (Fail)");
}


// ### 8b: Switch on `true` — range matching with expressions

// When you need range checks but want switch style, switch on the literal `true` and put the condition in each `case`:

// ```javascript
// let duration = 3.5;  // test duration in seconds

// switch (true) {
//     case duration < 1:
//         console.log("⚡ Very fast test");
//         break;
//     case duration < 3:
//         console.log("✅ Fast test");
//         break;
//     case duration < 6:
//         console.log("⚠️ Acceptable — consider optimising");
//         break;
//     default:
//         console.log("🐢 Slow test — needs attention");
// }
// ```

// **Test with durations:** `0.5`, `2`, `4`, `8`

// **Note:** `switch(true)` works because each `case` expression evaluates to `true` or `false`. The first `case` that equals `true` wins. Use this sparingly — if-else-if is often clearer for ranges.

console.log("-------------Output:## Exercise 8b: Switch on `true` — range matching with expressions-------------------");
duration = 2;  // test duration in seconds

switch (true) {
    case duration < 1:
        console.log("⚡ Very fast test");
        break;
    case duration < 3:
        console.log("✅ Fast test");
        break;
    case duration < 6:
        console.log("⚠️ Acceptable — consider optimising");
        break;
    default:
        console.log("🐢 Slow test — needs attention");
}

// ### 8c: Tricky questions — predict the output before running

// **Snippet A — what prints?**
// ```javascript
let priority = "high";

switch (priority) {
    case "High":
        console.log("Urgent");
        break;
    case "high":
        console.log("Also urgent");
        break;
}
//Output : Also urgent
// ```
// What does this show? Why? (Hint: `switch` uses `===`)

// **Snippet B — what prints?**
// ```javascript
let x = 2;

switch (x) {
    case 1:
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    default:
        console.log("other");
}
// output : all case block due to break is missing, will add break in all block
// What does this show? Why? How do you fix it to print only `"two"`?

// **Snippet C — switch vs if-else, which should you choose?**

// | Situation | Better choice |
// |---|---|
// | Matching one variable against 5+ fixed string/number values | `switch` |
// | Checking ranges (`score >= 80`) | `if-else-if` |
// | Multiple conditions combined with `&&` or `||` | `if-else-if` |
// | Grouping several values with the same outcome | `switch` (fall-through) |
// | Just two outcomes | ternary or `if-else` |


// ## Additional Challenges

// ### Challenge: Complete Test User Validation

// **Scenario:** Complete test user validation before creating test data.

// **Requirements:**
// Create a validation function that checks:
// 1. Username is not empty
// 2. Password is not empty
// 3. Password is at least 8 characters
// 4. Email contains `@` and `.`

// ```javascript
// function validateTestUser(username, password, email) {
//     console.log("Validating test user data...\n");

//     // Write your if-else-if logic here
//     // Check each condition and return appropriate message
// }

// // Test it
// let result = validateTestUser("testuser", "Test@123", "test@example.com");
// console.log(result);
// ```

// **Expected Output:**
// ```
// Validating test user data...

// Username: testuser ✓
// Password: Test@123 ✓
// Email: test@example.com ✓

// ✅ All validations passed - User data ready!
// ```

// **If validation fails:**
// ```
// Validating test user data...

// ❌ Error: Password must be at least 8 characters

console.log("-------------Additional Challenges:## Challenge: Complete Test User Validation-------------------");
function validateTestUser(username, password, email) {
    let validateTestUser = true;
    console.log("Validating test user data...\n"); 
    if(username!=="" ){
         console.log("Username:"+username+"  ✓");
    }else{
        console.log("Please Check!! Username is empty"+username+"  ❌")
        validateTestUser =false
    }
    if (password!=="" && password.length>=8 ){
        console.log("Password:"+password+"  ✓");
    }else{
        console.log("Please Check!! Password is Empty/less than 8 characters"+password+" ❌")
        validateTestUser=false
    }
    if(email.includes("@") && email.indexOf("@") < email.lastIndexOf(".")){
        console.log("Email:"+email+"  ✓");
    }else{
         console.log("Please enter correct Email:"+email+"  ❌")
         validateTestUser=false
    }

    if(validateTestUser===true){
         console.log("✅ All validations passed - User data ready!")
    }else{
         console.log("❌ All validations not passed")
    }

    return validateTestUser;

}

let result1 = validateTestUser("testuser", "Test@123", "test@example.com");
console.log(result1);

