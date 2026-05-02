let testCases = ["Login", "Logout", "Search", "Checkout"];
 
for(let i =0;i<=testCases.length-1;i++){
    console.log(testCases[i]);
}

/*
Assignment is -
1. Find the highest and lowest numbers in the below array.
 
let scores = [85, 92, 78, 95, 88, 73, 90];
 
2. Find a particular value in an array and also get its index position.
 
let tests = ["Login", "Logout", "Search", "Checkout", "Payment"];
 
3. IN the given array, we have provided the status of the test cases,  
 
let statuses = ["PASSED", "PASSED", "FAILED", "PASSED", "SKIPPED", "PASSED"];
 
You have to write a program whose outuput will tell you
- How many test cases passed
- How many failed
- How many skiped.
 
- Provide the pass percentages.
*/
 

//1. Find the highest and lowest numbers in the below array.
 
let scores = [100,85, 92, 78, 95, 88, 73, 90,2];
let max = scores[scores.length-1], min = scores[scores.length-1];
for(let i=0;i<scores.length;i++){
    
    if(scores[i]>max){
        max = scores[i];
    }
    else{
        max = max;
    }
}
console.log("Max no is:"+max);

for(let i=0;i<scores.length;i++){
   
    if(scores[i]>min){
        min = min;
    }
    else{
        min = scores[i];
    }
}
console.log("Min no is:"+min);