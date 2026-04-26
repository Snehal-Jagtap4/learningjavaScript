// ## 📋 Exercise Instructions

// ### Part 1: Test Environment Variables

// Create a new file called `test-environment-config.js` and create variables for a test environment configuration.

// **Requirements:**
// - Use `const` for values that never change
// - Use `let` for values that might change
// - Create at least 6 variables
// - Print them in a formatted way

// **Variables to create:**
// 1. Application URL (constant)
// 2. Application name (constant)
// 3. Environment name (QA, Staging, Production)
// 4. Current tester name
// 5. Test execution date
// 6. Is automation enabled? (we'll use text for now)

// **Example Output:**
// ```
// ==========================================
//      TEST ENVIRONMENT CONFIGURATION
// ==========================================
// App Name: MyShop E-commerce
// App URL: https://qa.myshop.com
// Environment: QA
// Tester: Priya Sharma
// Date: 2024-01-16
// Automation Enabled: Yes
// ==========================================
// ```

// **Hints:**
// - `const APP_NAME = "MyShop E-commerce";`
// - Use uppercase for constants that never going to change(common convention but not a MUST)
// - `let currentTester = "Your Name";`

// ---


const APP_NAME = "MyShop E-commerce";
const APP_URL = "https://myeshop.com";

let environment = "QA";
let currentTester = "Snehal Jagtap";
let executionDate = "2026-04-26";
let automationEnabled = "Yes";

console.log("==========================================");
console.log("     TEST ENVIRONMENT CONFIGURATION");
console.log("==========================================");

console.log("App Name: " + APP_NAME);
console.log("App URL: " + APP_URL);
console.log("Environment: " + environment);
console.log("Tester: " + currentTester);
console.log("Date: " + executionDate);
console.log("Automation Enabled: " + automationEnabled);

console.log("==========================================");