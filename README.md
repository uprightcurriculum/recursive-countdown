# Recursive Countdown

## Overview
In this exercise you'll create an interactive countdown program that uses recursion and asynchronous programming to count down from a user-provided number to zero, with 1 second delay between each number. Begin in ```recursiveCountdown.js``` and complete the code according to the preexisting scaffolding.


## Objective
- Create a recursive async function
- Implement continuous input validation 
- Work with Promises and async / await
- Practice user input and output
- Use setTimeout with Promises

## Topics
- Recursion
- Async / Await
- Promises
- Input validation
- User input / output

## Context
1. Create a function ```delay``` that returns a promise that resolves after a specified time. Inside the Promise use setTimeout to wait.
2. Create an async function called ```countDown``` that takes one parameter:
- A number to count down from ```(number)```
3. The function should:
- Recursively count down from the input number to zero
- Wait 1 second between each number
- Print each number to the console
- Print "Blastoff!" when reaching zero
3. Create input validation that:
- Continuously prompts for input until valid
- Checks for positive numbers
- Provides helpful error messages

## Hint
1. Create a while loop for continuous input validation
2. Create a separate functin for getting and validating input
3. Remember that recursive functions need a base case
4. Remember to convert your user input from a string to a number