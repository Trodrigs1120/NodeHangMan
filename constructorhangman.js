var inquirer = require("inquirer");
var WordBank = require("./WordCon.js")
var WinStreak = 0;
var InitialWordBank = new WordBank("Countries","")

MainMenu()

function MainMenu() {
    Selection = "Countries"
    inquirer.prompt([{
        type: "list",
        choices: ["Start game", "Check Score", "Close game"],
        name: "start",
        message: "Select your menu option"
    }, ]).then(function(user) {
        if (user.start === "Start game") {
            InitialWordBank.ChangeWords()
            
        } else if (user.start === "Check Score") {
            console.log("Current winstreak: " + WinStreak)
            MainMenu()
        } 
             else {
            console.log("well then why dont you kids go back to your call of black ops 3 or whatever it is you people play now adays")
        }

    })
}





   
