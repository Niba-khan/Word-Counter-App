#! /usr/bin/env node
 //This is Shahbang line:

 // Import the "inquirer" module, which is a command line interface for Node.js:
 import inquirer from "inquirer"
 import chalk from "chalk";
 
 // Declare a constant 'answer' assign it to the result of inquirer.prompt function:

 console.log(chalk.blue.underline("\n \t!!WELCOME TO WORD COUNTER APP!!\n"));

 const answers:{
    sentence: string 
 } = await inquirer.prompt(
   [
    {
        name: "sentence",
        type: "input",
        message: (chalk.red.italic("Enter your sentence to count the words:"))
    }
  ]
);

 const words = answers.sentence.trim().split(" ");

 //Print the array of words to the console:
 console.log(words);

//Print the word count of the sentence to the console:
console.log((chalk.yellow.bold`your sentence word count is:${words.length}`));
