// ## 📋 Exercises

// ### Part 1: Generate Test Emails

// Create `email-generator.js` that generates emails from names.

// **Requirements:**
// ```javascript
// let firstName = "John";
// let lastName = "Doe";

// Generate emails for 3 different users.
console.log("=============Generate emails using "+" (Concatenate strings with +)================")
let firstName = "John";
let lastName = "Doe";
console.log("Email ID is:"+firstName+lastName+"04@test.com")
firstName = "jully";
lastName = "doe";
console.log("Email ID is:"+firstName+lastName+"123@test.com")
firstName = "Sam";
lastName = "doe";
console.log("Email ID is:"+firstName+lastName+"83@test.com")

console.log("=============Generate emails using [ `` -backtick] template literals================")
firstName = "John";
lastName = "Doe";
console.log(`Email ID is:${firstName}${lastName}04@test.com`)
firstName = "Jully";
lastName = "doe";
console.log(`Email ID is:${firstName}${lastName}123@test.com`)
firstName = "Sam";
lastName = "doe";
console.log(`Email ID is:${firstName}${lastName}83@test.com`)