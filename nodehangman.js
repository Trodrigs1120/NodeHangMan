var inquirer = require("inquirer");
var WinStreak = 0;
var WordBank = "";
MainMenu()

function MainMenu() {
    inquirer.prompt([{
        type: "list",
        choices: ["Start game", "Check Score", "Change WordBank", "Close game"],
        name: "start",
        message: "Select your menu option"
    }, ]).then(function(user) {
        if (user.start === "Start game") {
            LetsPlayAGame()
        } else if (user.start === "Check Score") {
            console.log("Current winstreak: " + WinStreak)
            MainMenu()
        } else if (user.start === "Change WordBank") {
            ChangeWordBank()
        } else {
            console.log("well then why dont you kids go back to your call of black ops 3 or whatever it is you people play now adays")
        }

    })
}

function ChangeWordBank() {
    inquirer.prompt([{
        type: "list",
        choices: ["Countries", "States", "Foods"],
        name: "choice",
        message: "Food= Easiest, States=Medimum Countries = Default & Hardest"
    }, ]).then(function(user) {

        WordBank = user.choice;
        MainMenu()


    })
}
// saw2.jpg
function LetsPlayAGame() {
    // If arewedontyet is set to true, stop serving questions?
    var LifeCounter= 7;
    var SecretWord = [];
    var RemainingLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var GuessInput;
    CreateSecretWord()
    GuessLetters()
    var StopPlaying = false;



    function GuessLetters() {
        if (LifeCounter>0){
            inquirer.prompt([{
                type: "input",
                name: "guess",
                message: "Pick a letter!"
            }, ]).then(function(user) {
                FixedInput = user.guess
    
                for (var i = 0; i < RemainingLetters.length; i++) {
                    if (FixedInput == RemainingLetters[i]) {
                        console.log("guessing: " + RemainingLetters[i])
                        RemainingLetters[i] = " "
                        // Variable to pass this value to be checked against secret word
    
                        GuessInput = FixedInput
                        console.log(GuessInput)
                        break;
                    }
                    if (i === 25) {
                        console.log("You've already used the letter " + user.guess)
                        // need to add a condition for gett ing the letter wrong
                    }
                }
                console.log("Letter selected: " + GuessInput)
                CheckSecretWord()
                if (StopPlaying === false) {
                    GuessLetters()
                } else {
                    MainMenu()
                }
    
            })
        } else {
        
        }
   
    }

    function CheckSecretWord() {
        var UnderScoreCounter = 0;
        var Match=false;
        for (var i = 0; i < SecretWord.length; i++) {
            console.log(SecretWord[i][0])
            if (GuessInput == SecretWord[i][0] && SecretWord[i][1] == false) {
                SecretWord[i][1] = true;
                Match=true;
                console.log("matched with " + SecretWord[i][0])

            } 
            if (Match===false){
                LifeCounter--
            }
        }
        // making thing to output _ or a letter
        var Output = "";
        for (var i = 0; i < SecretWord.length; i++) {

            if (SecretWord[i][1] == true) {
                Output = Output + " " + SecretWord[i][0]
                UnderScoreCounter++;
                if (UnderScoreCounter === SecretWord.length) {
                    StopPlaying = true;
                    WinStreak++
                    YouDidit()
                }
            } else {
                Output = Output + " _"
            }

        }
        console.log(Output)
    }

    function CreateSecretWord() {
        if (WordBank === "Countries") {
            var WordArray = ["italy", "japan", "brazil", "austria", "denmark", "sweden", "lichtenstein", "andorra", "lithuania"]

        } else if (WordBank === "States") {
            var WordArray = ["ohio", "kentucky", "alabama", "vermont", "georgia", "california"]
        } else if (WordBank === "Foods") {
            var WordArray = ["corn", "tacos", "chili", "pizza", "cheese", "burrito"]
        } else {
            var WordArray = ["italy","belarus","belize","japan", "brazil", "austria", "denmark", "sweden", "lichtenstein", "andorra", "lithuania"]
        }

        var string = WordArray[Math.floor((Math.random() * WordArray.length) + 1)]
        console.log("Selected word: " + string)
        console.log("Hint: they're all countries")
        for (var i = 0; i < string.length; i++) {
            var result = string.slice(i, i + 1)
            var PlaceholderArray = [result, false];

            SecretWord.push(PlaceholderArray)

        }
        var Output=""
        for (var i = 0; i < SecretWord.length; i++){
            Output = Output + " _"
            
        }
        console.log(Output)    
        
    }

}

function YouDidit() {
    console.log("Yay you did it!!")
}