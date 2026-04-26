// ### Part 2: Test Data Generator

// Create a new file called `test-user-generator.js` and create multiple test user credentials.

// **Requirements:**
// - Create 3 different test users
// - Each user should have: firstName, lastName, email, password
// - Use descriptive variable names (user1FirstName, user1Email, etc.)
// - Print all users in a formatted table-like structure

// **Example Output:**
// ```
// ========================================
//          TEST USER DATABASE
// ========================================

// USER 1:
// --------
// Name: John Doe
// Email: john.doe@test.com
// Password: JohnPass@123

// USER 2:
// --------
// Name: Jane Smith
// Email: jane.smith@test.com
// Password: JanePass@456

// USER 3:
// --------
// Name: Bob Johnson
// Email: bob.johnson@test.com
// Password: BobPass@789

// ========================================
// Total Users: 3
// ========================================
// ```

// **Hints:**
// - Create variables: `let user1FirstName = "John";`
// - Combine names: `console.log("Name: " + user1FirstName + " " + user1LastName);`
// - Use blank console.log() for spacing

// ---

let user1FirstName = "Snehal";
let user1LastName = "Jagtap";
let user1Email = "snehal.jagtap@test.com";
let user1Password = "Snehal@123";

let user2FirstName = "Aditi";
let user2LastName = "Vyas";
let user2Email = "aditi.vyas@test.com";
let user2Password = "Aditi@456";

let user3FirstName = "Savita";
let user3LastName = "Banger";
let user3Email = "savita.banger@test.com";
let user3Password = "Savita@789";

console.log("========================================");
console.log("          TEST USER DATABASE");
console.log("========================================");

console.log("");
console.log("USER 1:");
console.log("--------");
console.log("Name: " + user1FirstName + " " + user1LastName);
console.log("Email: " + user1Email);
console.log("Password: " + user1Password);

console.log("");
console.log("USER 2:");
console.log("--------");
console.log("Name: " + user2FirstName + " " + user2LastName);
console.log("Email: " + user2Email);
console.log("Password: " + user2Password);

console.log("");
console.log("USER 3:");
console.log("--------");
console.log("Name: " + user3FirstName + " " + user3LastName);
console.log("Email: " + user3Email);
console.log("Password: " + user3Password);

console.log("");
console.log("========================================");
console.log("Total Users: 3");
console.log("========================================");