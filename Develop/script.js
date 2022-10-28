// Assignment code here

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page


// Window stores the 



// Get references to the #generate element
// This targets the generate ID
var generateBtn = document.querySelector("#generate");
// Add choices (arrays).
function random (min, max) {
  return Math.floor(Math.random() *(max-min) + min)
}
function selectRandom (list) {
  return list[random(0, list.length - 1)]
}

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  const lowerCase = ['a','b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const specialChar = ['!', '@', '#', '$', '%', '^', '&', '*'];

// Create the function for generatePassword
function generatePassword () {
  // input is storing the information from the window prompt 
  var input = window.prompt('Please choose a number between 8 and 128 for your password length.');
  // turn the above into a number
  var inputLength = parseInt(input)
    if (isNaN(inputLength)) {
      window.alert('Please choose a number.')
      return
    }
    if (inputLength < 8 || inputLength > 128) {
    window.alert('Please choose between 8 and 128')
    return
  }
// Let user choose what their password is made of. These also pop up the window for user to make selection.
  var inputNumbers = window.confirm ('Would you like numbers in your password?')
  var inputUpper = window.confirm ('Would you like Uppercase letters in your password?')
  var inputLower = window.confirm ('Would you like Lowercase letters in your password?')
  var inputSpecial = window.confirm ('Would you like special characters in your password?')

  // This is our greater list
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

  var generatedPassword = ''

    for (var i = 0; i < inputLength; i++) {
      var randomItem = selectRandom (inputSelection)
      var randomInputs = selectRandom (randomItem)
      console.log (randomInputs);
    }
      
  }
  


  // Time to pseudocode. Gives idea of where you need to start. This is our plan.
// Step 1: Prompt user for password criteria
  // A: length between 8 and 128
  // B: If that want to include lower, upper, and special characters.

// Step 2: Validate input. Character length. Ensure each of one character type is selected.

// Step 3: Generate password



// Step 4: Display generated password on the page. That's our return.
  // return 'Generated password'; //you now see that in the text box. We'll need to return at the end



// Write password to the #password input
function writePassword() {
  // there is not generatePassword function yet. It is not defined yet, that's what we need to do.
  
  var password = generatePassword();
  // this is where the generated password displays on the screen.
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}





// Add event listener to generate button
// When the user clicks the button, it generates the password. It calls the 'writePassword' function
generateBtn.addEventListener("click", writePassword);
