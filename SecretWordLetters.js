var SecretWordLetters = function(){
    this.Letter = [];
    this.isrevealed = isrevealed;
    // new function which adds letters to the letter array? So that way it can hold all the letters?
    // see below and modify
    this.addLetters = function(name, favoriteSub, gpa) {
        this.students.push(new Student(name, favoriteSub, gpa));
      };
}

var CurrentSWord = new SecretWordLetters ("a", false)
console.log (CurrentSWord)
module.exports = SecretWordLetters

