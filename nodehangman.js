var inquirer = require("inquirer");

inquirer.prompt([
    {
        type: "list",
        choices: ["Start game", "Close game"],
        name: "start",
        message: "Shall we begin??"
      },
    ]).then(function(user) {
 if (user.start==="Start game"){
     LetsPlayAGame()
 } else {
     console.log("well then why dont you kids go back to your call of black ops 3 or whatever it is you people play now adays")
 }
    
    })


// saw2.jpg
function LetsPlayAGame(){
// If arewedontyet is set to true, stop serving questions?
var SecretWord=[];
var RemainingLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var GuessInput;
CreateSecretWord()
GuessLetters()

    


function GuessLetters() {
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
            }
        }
        console.log("Letter selected: " + GuessInput)
        CheckSecretWord()

        GuessLetters()
    })
}
function CheckSecretWord(){
    // console.log(SecretWord[0][0])
    for (var i = 0; i<SecretWord.length; i++){
        console.log(SecretWord[i][0])
        if (GuessInput==SecretWord[i][0] && SecretWord[i][1]==false){
            SecretWord[i][1]=true;
            console.log("matched with"+ SecretWord[i][0])
        }
    }
    // making thing to output _ or a letter
    var Output="";
    for (var i = 0; i<SecretWord.length; i++){
        
        if (SecretWord[i][1]==true){
            Output= Output+" "+SecretWord[i][0] 
        } else {
             Output = Output + " _"
        }
        
    }
    console.log(Output)
}
function CreateSecretWord(){
    var WordArray=["italy", "japan", "brazil","austria","denmark","sweden","lichtenstein","andorra","lithuania"]
    
    var string = WordArray[Math.floor((Math.random() * WordArray.length) + 1)]
    console.log ("Selected word: " + string)
    console.log("Hint: they're all countries")
   for (var i =0; i<string.length;i++){
        var result = string.slice(i, i+1)
      var PlaceholderArray= [result, false];
   
        SecretWord.push(PlaceholderArray)
    
        } 
         
    }

}


