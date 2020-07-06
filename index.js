// Do work!

// We need to create a function to check the validity of a password. It must have at least 8 characters and must have at least one of each of the following:
// lower case letter, upper case letter, numeric value, special character. If any of these conditions are not met, the password is invalid.

// Let's start by checking for validity and then move on to false returns.

module.exports = validatePassword


function validatePassword(password) {
  // Check if it's at least 8 characters & has all necessary charcters by checking seperate characterChecker function
  return (password.length >= 8 && characterChecker(password) === true)
}

// Put character checking into its own function, to be called by main validate function

function characterChecker(password) {
  // Split paasword into array to make it iterable and define charcter arrays to check it against
  let passwordArray = password.split('')
  let specialCharacters = '!@#$%^&*'
  let lowerCharacters = 'abcdefghijklmnopqrstuvwxyz'
  let upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

  // Let all checks equal false to start and flip them to true if necessary conditions are met
  let passwordValid = false
  let upperCheck = false
  let lowerCheck = false
  let numberCheck = false
  let specialCheck = false

  // Perform these checks for every character in the password
  passwordArray.forEach(character => {
    // if the character returns false for NaN, it is a number and we can flip that check to true
    if (isNaN(parseInt(character)) === false) {
      numberCheck = true
    }
    // Original method of using toUpperCase and toLowerCase was returning false positives on non-letter characters, so switched to index of method
    // that I had already used for the special character check
    if (upperCharacters.indexOf(character) !== -1) {
      upperCheck = true
    }
    // As soon as a match is found between our password and the character arrays, flip the check to true
    if (lowerCharacters.indexOf(character) !== -1) {
      lowerCheck = true
    }

    if (specialCharacters.indexOf(character) !== -1) {
      specialCheck = true
    }
  })
  // If all checks are true then password is valid
  if (upperCheck === true && lowerCheck === true && numberCheck === true && specialCheck === true) {
    passwordValid = true
  }
  // Returns true or false to easily pass into main validate function

  return passwordValid
}

// Passing all tests!
