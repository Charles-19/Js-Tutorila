let Phrase = require("rojo-charles-palindrome");
let string = prompt("Please enter a string for a palindrome testing:");
let phrase = new Phrase(string);

if (phrase.palindrome()) {
  alert(`"${phrase.content}" is a palindrome!`);
} else {
  alert(`"${phrase.content}" is not a palindrome`);
}
