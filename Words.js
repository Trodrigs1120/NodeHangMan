// this wont do because we need constructors
var inquirer = require("inquirer");
var SecretWordLetters = require ("./SecretWordLetters.js")
var WordBank = function(BankName, Words ){
    this.BankName = BankName;
    this.Words = Words
  }
  var CountriesWordArray = ["italy", "japan", "brazil", "austria", "denmark", "sweden", "lichtenstein", "andorra", "lithuania"]
  var StatesWordArray = ["ohio", "kentucky", "alabama", "vermont", "georgia", "california"]
  var FoodWordArray = ["corn", "tacos", "chili", "pizza", "cheese", "burrito"]
  var WordBank;

  ChangeWordBank()
  

  function ChangeWordBank() {
    inquirer.prompt([{
        type: "list",
        choices: ["Countries", "States", "Foods"],
        name: "choice",
        message: "Food= Easiest, States=Medimum Countries = Default & Hardest"
    }, ]).then(function(user) {

        Selection = user.choice;
        CreateSecretWord()


    })
}
function CreateSecretWord() {
    if (Selection === "Countries") {
        var Words = new WordBank("Countries",CountriesWordArray);
    } else if (Selection === "States") {
        var Words = new WordBank("Countries",StatesWordArray);
    } else if (Selection === "Foods") {
        var Words = new WordBank("Countries",FoodWordArray);
    } else {
        var Words = new WordBank("Countries",CountriesWordArray);
    }
    // now this is us creating the secret word, we'll create thew constructor over in the secretwordletters.js and then ship it back over to the main program
    var string = Words.Words[Math.floor((Math.random() * Words.Words.length) + 1)]
    console.log("Selected word: " + string)
    console.log("Hint: they're all countries")
    for (var i = 0; i < string.length; i++) {
        var result = string.slice(i, i + 1)

        var CurrentSWord = new SecretWordLetters (result, false)
        //var PlaceholderArray = [result, false];
        
        //SecretWord.push(PlaceholderArray)
        console.log (CurrentSWord.Letter)
        console.log(CurrentSWord)
    }
    var Output=""
    for (var i = 0; i < string.length; i++){
        Output = Output + " _"
        
    }
    console.log(Output)    
    console.log(Words.Words)
    console.log(CurrentSWord)
}
module.exports = WordBank
// I dont know if I need to export this but its here just in case
module.exports = SecretWordLetters