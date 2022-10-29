// Targets generate ID
var generateBtn = document.querySelector("#generate");

// Randomize output from the selected items
function randomMath(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var somethingRandom = Math.random()
  return Math.floor(min*(1 - somethingRandom) + somethingRandom *max)
}
// Create list of randomized items
function randomizeItem(list) {
  
  return list[randomMath(list.length)]
}


function generatePassword () {

  var userInput = window.prompt('Please choose a number between 8 and 128 for your password length.')

  // Make sure the input is a number. 
  var inputLength = parseInt(userInput)
    if (isNaN(inputLength)) {
      window.alert('Please choose a number.')
      return
    }
    // make sure the input is the appropriate length of characters
    if (inputLength < 8 || inputLength > 128) {
    window.alert('Please choose between 8 and 128')
    return
  }
// User selection choices
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const lowerCase = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*'];

// Let user choose what their password is made of. These also pop up the window for user to make selection.
  var inputNumbers = window.confirm ('Would you like numbers in your password?')
  var inputUpper = window.confirm ('Would you like Uppercase letters in your password?')
  var inputLower = window.confirm ('Would you like Lowercase letters in your password?')
  var inputSpecial = window.confirm ('Would you like special characters in your password?')

// This is our greater list, if the inputs are confirmed they go in here.
var inputSelection = []
 
// If the user wants numbers, we will add them to the greater list. So if true, add to larger list.
  if (inputNumbers === true) {
    inputSelection.push(numbers)
  }
  if (inputUpper === true) {
    inputSelection.push(upperCase)
  }
  if (inputLower === true) {
    inputSelection.push(lowerCase)
  }
  if (inputSpecial === true) {
    inputSelection.push(specialChar)
  }

  // Time to make the password!
  var generatePassword = ""

  for (var i = 0; i < inputLength; i++){
    var randomizedList = randomizeItem(inputSelection)
    var randomChar = randomizeItem(randomizedList)
    generatePassword += randomChar
  }
  return generatePassword
}




function writePassword() {
      
  var password = generatePassword();
  // this is where the generated password displays on the screen.
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}



// adds the functionality of the button click and starts the prompt
generateBtn.addEventListener('click', writePassword);