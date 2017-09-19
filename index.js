const chalk = require('chalk')
var inquire = require('inquirer')

let questions = [{
    message : "What size of pizza do you need:",
    type : "list",
    small : "small",
    medium : "medium",
    large : "large",
    xlarge : "xlarge",
    jumbo : "jumbo is the way to go"
},{
    message : "Would you like extra cheese?",
    type : "confirm"
}]

inquire.prompt([questions]).then(function (answers){
console.log(answers)
})