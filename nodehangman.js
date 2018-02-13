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
var AreWeDoneyet=false;
var RemainingLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
CreateSecretWord()

inquirer.prompt([
    {
        type: "input",
        name: "guess",
        message: "Pick a letter!"
      },
    ]).then(function(user) {
console.log("Letter selected: "+ user.guess)
    })
}


function EndGame(){
    if (AreWeDoneyet===true){
        console.log("some stuff about you winning")
        
    }
    // When the word is completed we'll change AreWeDontYet to True and this will run instead of prompting 
}

function TrimLetters(){
    // Function loops through Remaining letters to see if an input is valid
    // perhaps just flags letter as used
}
function CheckSecretWord(){
    // checks secret word for letters to see if they are marked as used
}

function CreateSecretWord(){
    var WordArray=["Italy", "Japan", "Brazil","Austria","Denmark","Sweden","Lichtenstein","Andorra","Lithuania"]
    var SecretWord=[];
    var string = WordArray[Math.floor((Math.random() * WordArray.length) + 1)]
    console.log ("Selected word: " + string)
   for (var i =0; i<string.length;i++){
        var result = string.slice(i, i+1)
      var PlaceholderArray= [result, false];
   
        SecretWord.push(PlaceholderArray)
    
        } 
        console.log(SecretWord)
    }