// Do work!

// We need to create a function to check the validity of a password. It must have at least 8 characters and must have at least one of each of the following:
// lower case letter, upper case letter, numeric value, special character. If any of these conditions are not met, the password is invalid.

// Let's start by checking for validity and then move on to false returns.

module.exports = validatePassword

let password = 'P455w0rd!'

function validatePassword(password) {
  // Check if it's at least 8 characters
  return (password.length >= 8 && characterChecker(password) === true)
}

function characterChecker(password) {
  let passwordArray = password.split('')
  let specialCharacters = '!@#$%^&*'
  let passwordValid = false

  let upperCheck = false
  let lowerCheck = false
  let numberCheck = false
  let specialCheck = false

  passwordArray.forEach(character => {
    if (isNaN(parseInt(character)) === false) {
      numberCheck = true
    }

    if (character === character.toUpperCase()) {
      upperCheck = true
    }

    if (character === character.toLowerCase()) {
      lowerCheck = true
    }
    if (specialCharacters.indexOf(character) !== -1) {
      specialCheck = true
    }
  })

  if (upperCheck === true && lowerCheck === true && numberCheck === true && specialCheck === true) {
    passwordValid = true
  }

  return passwordValid
}

console.log(validatePassword('P455w0rd!'))
