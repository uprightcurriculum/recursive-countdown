//-------------------- Do Not Change -------------------------
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

function ask(questionText) {
  return new Promise((resolve) => {
    rl.question(questionText, resolve)
  })
}
// -------------- Your Code Below -----------------------------

// FUNCTION Delay function for waiting between numbers

  // Return a new promise that resolves after specified time
  
    // Use setTimeout to wait
    



// ASYNC FUNCTION Recursive async countdown function

  // Base case
 
  // Print current number
  
  // Wait for 1 second
 
  // Recursive call with decremented seconds


// ASYNC FUNCTION Get input and validate it

  // While loop until valid input is received
 
    // Get input from user
    
    // Convert input to number
  
    // Check if input is valid
   
    // Provide specific error messages
 
// ASYNC FUNCTION Main function to run the countdown program

  // Get valid number from user
 
  // Start the countdown process

// Initialize program
console.log('Welcome to Recursive Countdown!\n')
// Start the countdown program
startCountdown()