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

// Delay function for waiting between numbers
function delay(ms) {
  // Return a new promise that resolves after specified time
  return new Promise((resolve) => {
    // Use setTimeout to wait
    setTimeout(resolve, ms)
  })
}

// Recursive async countdown function
async function countdown(seconds) {
  // Base case
  if(seconds === 0) {
    console.log('Blastoff!!')
    return;
  }
  // Print current number
  console.log(`${seconds}...`)
  // Wait for 1 second
  setTimeout();
  // Recursive call with decremented seconds
  await countdown(seconds - 1)
}
// Get input and validate it
async function getValidInput() {
  // While loop until valid input is received
  while(true) {
    // Get input from user
    const input = await ask('Enter a number to start countdown: ')
    // Convert input to number
    const number = parseInt(input)
    // Check if input is valid
    if(!isNaN(number) && number >= 0) {
      return number
    }
    // Provide specific error messages
    if(isNaN(number)) {
      console.log('Please enter a valid number!')
    } else if(number < 0) {
      console.log('Please enter a positive number!')
    }
  }
}
// Main function to run the countdown program
async function startCountdown() {
  // Get valid number from user
  const number = await getValidInput();
  // Start the countdown process
  await countdown(number)
}
// Initialize program
console.log('Welcome to Recursive Countdown!\n')
// Start the countdown program
startCountdown()