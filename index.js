const chalk = require('chalk')
var inquirer = require('inquirer')

let questions = [{
    type : "list",
    message : "What size of pizza would you like?",
    name: "size",
    choices : ["Small", "Medium", "Large", "XLarge", "Jumbo"]
},{
    type : "confirm",
    message : "Would you like extra cheese?",
    name: "cheese"
},{
    type : "checkbox",
    message : "What toppings would you like?",
    name : "toppings",
    choices : ["pepperoni", "sausage", "ham", "bacon", "peppers", "onions", "pineapple", "mushrooms", "beef"]
}]

let order = [{
    type : "confirm",
    message : "Is your order correct?",
    name : "order"
}]

console.log(chalk.bold.cyan("*******************************************************"))
console.log(chalk.bold.cyan("*                                                     *"))
console.log(chalk.bold.cyan("*            Welcome to Everything Pizza!             *"))
console.log(chalk.bold.cyan("*              Please take your order                 *"))
console.log(chalk.bold.cyan("*                                                     *"))
console.log(chalk.bold.cyan("*******************************************************"))

inquirer.prompt(questions).then(function (answers){
console.log(chalk.underline.red("***Your order is listed below***"))
console.log(chalk.cyan("Size: " + chalk.bold.white(answers.size)))

if(answers.cheese == true){
    console.log(chalk.cyan("Extra Cheese: ") + chalk.bold.white("Yes"))
}
else{
    console.log(chalk.cyan("Extra Cheese: ") + chalk.bold.white("No"))
}

console.log(chalk.cyan("Toppings: ") + chalk.bold.white(answers.toppings))
console.log(" ")

inquirer.prompt(order).then(function(answers){
    if(answers.order == true){
        console.log(chalk.yellow("Hoorayy! Your order is on the way!! :-)"))
    }
    else{
        console.log(chalk.red("Oh no!! Sorry for the inconvience :-("))
    }
})
})

