// this wont do because we need constructors
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
