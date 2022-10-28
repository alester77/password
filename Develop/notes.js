// const generatePassword = (length, hasNumbers, hasUpperCase, hasLowerCase, hasSpecial) =>{
//   const chosenCharacters = [
//     ...(hasNumbers ? numbers : []),
//     ...(hasUpperCase ? upperCase : []),
//     ...(hasLowerCase ? lowerCase : []),
//     ...(hasSpecial ? specialChar : []),
//   ];

// let password = "";
// if(chosenCharacters.length === 0) return "Must choose between 8 and 128 characters."
// for(let i = 0; i <length; i++){
// const randomIndex = Math.floor(Math.random() * chosenCharacters.length);
// password += chosenCharacters[randomIndex];
// }
// console.log(generatePassword(9, true, true, true));

// return password;