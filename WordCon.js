// this wont do because we need constructors
var inquirer = require("inquirer");
var SecretWordLetters = require("./SecretWordLetters.js")
var LifeCounter = 7;
var RemainingLettersSource = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var RemainingLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var StopPlaying = false;
var WinStreak = 0;
var WordBank = function(BankName, Words) {
    this.BankName = BankName;
    this.Words = Words
    this.ChangeWords = function() {
        ChangeWordBank();
    }
}
var CountriesWordArray = ["italy", "japan", "brazil", "austria", "denmark", "sweden", "lichtenstein", "andorra", "lithuania"]
var StatesWordArray = ["ohio", "kentucky", "alabama", "vermont", "georgia", "california"]
var FoodWordArray = ["corn", "tacos", "chili", "pizza", "cheese", "burrito"]
//var WordBank;

//ChangeWordBank()


function ChangeWordBank() {
    inquirer.prompt([{
        type: "list",
        choices: ["Food", "States", "Countries"],
        name: "choice",
        message: "Food is the Easiest, States are Medimum and Countries are the hardest category"
    }, ]).then(function(user) {

        Selection = user.choice;
        CreateSecretWord()


    })
}
// if I move this back to the main js file does CountriesWordArray still work? I feel like no
function CreateSecretWord() {
    
    if (Selection === "Countries") {
        var Words = new WordBank("Countries", CountriesWordArray);
    } else if (Selection === "States") {
        var Words = new WordBank("States", StatesWordArray);
    } else if (Selection === "Food") {
        var Words = new WordBank("Food", FoodWordArray);
    }
    // now this is us creating the secret word, we'll create thew constructor over in the secretwordletters.js and then ship it back over to the main program
    var string = Words.Words[Math.floor((Math.random() * Words.Words.length) + 1)]
    var CurrentSWord = new SecretWordLetters()
    for (var i = 0; i < string.length; i++) {
        var result = string.slice(i, i + 1)


        CurrentSWord.addLetters(result, false)
        //var PlaceholderArray = [result, false];

        //SecretWord.push(PlaceholderArray)

    }
    
    
    var Output = ""
    for (var i = 0; i < CurrentSWord.Letter.length; i++) {
        Output = Output + " _"

    }
    console.log(Output)
    
    LetsPlayAGame()

   
    function LetsPlayAGame() {
        var GuessInput;
        StopPlaying = false;
        
        GuessLetters()

    }

    function GuessLetters() {
        if (LifeCounter > 0) {
            inquirer.prompt([{
                type: "input",
                name: "guess",
                message: "Pick a letter!"
            }, ]).then(function(user) {
                
                if (user.guess==""){
                    console.log("Please input a valid letter")
                    GuessLetters()
                    
                } else {
                FixedInput = user.guess.toLowerCase()

                // can add a split here if I have time
                for (var i = 0; i < RemainingLetters.length; i++) {
                    if (FixedInput == RemainingLetters[i]) {
                        console.log("guessing the letter: " + RemainingLetters[i])
                        console.log("")
                        RemainingLetters[i] = " "
                        // Variable to pass this value to be checked against secret word

                        GuessInput = FixedInput
                        
                        break;
                    }
                    if (i === 25) {
                        console.log("You've already used the letter " + user.guess)
                        // need to add a condition for gett ing the letter wrong
                    }
                }
                
                CheckSecretWord()
                if (StopPlaying === false) {
                    GuessLetters()
                } else {
                    console.log("Yay you did it!!")
                    console.log("Current Winstreak:" + WinStreak)
                    PlayAgain()
                }
            }
            })
        } else {
            WinStreak=0;
            console.log("")
            PlayAgain()
        }

    }
    function CheckSecretWord() {
        var UnderScoreCounter = 0;
        var Match = false;
        for (var i = 0; i < CurrentSWord.Letter.length; i++) {

            if (GuessInput == CurrentSWord.Letter[i] && CurrentSWord.isRevealed[i] == false) {
                CurrentSWord.isRevealed[i] = true;
                Match = true;
                console.log("matched with the letter: " + CurrentSWord.Letter[i])
                console.log("")

            }

        }
        if (Match === false) {
            LifeCounter--
            console.log("Nope, no '"+GuessInput+"'s")
            console.log("Lives Remaining: "+ LifeCounter )
        }
        // making thing to output _ or a letter
        var Output = "";
        for (var i = 0; i < CurrentSWord.Letter.length; i++) {

            if (CurrentSWord.isRevealed[i] == true) {
                Output = Output + " " + CurrentSWord.Letter[i]
                UnderScoreCounter++;
                if (UnderScoreCounter === CurrentSWord.Letter.length) {
                    StopPlaying = true;
                    WinStreak++
                    

                }
            } else {
                Output = Output + " _"
            }

        }
        console.log(Output)
    }

}


function PlayAgain() {
    inquirer.prompt([{
        type: "list",
        choices: ["Yes", "No"],
        name: "choice",
        message: "Play again?"
    }, ]).then(function(user) {

        Selection = user.choice;
        if (Selection === "Yes") {
            RemainingLetters = RemainingLettersSource
            LifeCounter = 7;
            ChangeWordBank()
        } else {
            console.log("adios mi amigo")
        }



    })
}


module.exports = WordBank;
// I dont know if I need to export this but its here just in case