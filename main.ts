#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgCyanBright("Welcome to Emad Ahmed`s quiz :"))
console.log(chalk.bgWhite ("you are required to gain maximum 5 points for pass."))

let points = 0
//Question no 1
let question1 = await inquirer.prompt([
    {
        name: "one",
        message: "typescript is a superset off?",
        type: "list",
        choices: ["python" ,"c++" ,"java" , "javascript"]
}
])

if(question1.one  ==  "javascript") {
    console.log(chalk.bgBlackBright("your answer is correct"))
    points++
} else {
    console.log(chalk.bgGray("incorrect answer"))
}
//Question no 2
let question2 = await inquirer.prompt([
    {
        name: "two",
        message: "who is the founder of microsoft?",
        type: "list",
        choices: ["obama" ,"mark henry" ,"bill gates" , "grant eillot"]
}
])

if(question2.two  ==  "bill gates") {
    console.log(chalk.bgBlackBright("your answer is correct"))
    points++
} else {
    console.log(chalk.bgGray("incorrect answer"))
}
//Question no3
let question3 = await inquirer.prompt([
    {
        name: "three",
        message: "capital on pakistan?",
        type: "list",
        choices: ["karchi" ,"lahore" ,"islamabad" , "multan"]
}
])

if(question3.three  ==  "islamabad") {
    console.log(chalk.bgBlackBright("your answer is correct"))
    points++
} else {
    console.log(chalk.bgGray("incorrect answer"))
}
//Question no 4
let question4 = await inquirer.prompt([
    {
        name: "four",
        message: "what is the current year?",
        type: "list",
        choices: ["2021" ,"2018" ,"2024" , "2004"]
}
])

if(question4.four  ==  "2024") {
    console.log(chalk.bgBlackBright("your answer is correct"))
    points++
} else {
    console.log(chalk.bgGray("incorrect answer"))
}
//Question no 5
let question5 = await inquirer.prompt([
    {
        name: "five",
        message: "who is the current caption on pakistan cricket team?",
        type: "list",
        choices: ["Shaheen" ,"Shahid Afridi" ,"Babar Azam" , "Virat kholi"]
}
])

if(question5.five  ==  "Babar Azam") {
    console.log(chalk.bgBlackBright("your answer is correct"))
    points++
} else {
    console.log(chalk.bgGray("incorrect answer"))
}

// output 
if (points >= 4) {
    console.log(chalk.bgRedBright("Congratulations!"))
    console.log(chalk.bgCyan(`your points:  ${points}`))
} else{
    console.log(chalk.bgGreenBright("you loss! try next time"))
    console.log(chalk.bgBlueBright(`your points: ${points}`))
}