var SecretWordLetters = function(){
    this.Letter = [];
    this.isRevealed = [];
    // new function which adds letters to the letter array? So that way it can hold all the letters?
    // see below and modify
    this.addLetters = function(input, state) {
            // we need to push a precreated element into the letter array like they do in the other project
        this.input= input;    
        this.Letter.push(this.input);
        this.state=state
        this.isRevealed.push(this.state)
      };
      
}

// var CurrentSWord = new SecretWordLetters ("a", false)

module.exports = SecretWordLetters

// 
// we also need to edit the function to check our arrays on the secret words function
// I think we can keep all the actual functions in the main code and keep our constructors and such in the extra files