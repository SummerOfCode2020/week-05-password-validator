/* eslint-disable no-console */
function validatePassword(password) {
  if (password.length >= 8 && characterValidation(password)) {
    return true
  } else {
    return false
  }
}

// Create a function to test each password as an array and loop through each item.

function characterValidation(password) {
  // Create const variables to compare the elements in the password to:
  // eslint-disable-next-line max-len
  const upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  // eslint-disable-next-line max-len
  const lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  // eslint-disable-next-line max-len
  const specialCharacters = ['!', '"', '#', '$', '%', '&', '\'', '(', ')', '*', '+', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', '_', '`', '{', '|', '}', '\\', '~']

  // set all rules to false to start; perform tests to see if they are true
  let upperCaseCheck = false
  let lowerCaseCheck = false
  let numericCheck = false
  let specialCharCheck = false

  // split the password into an array to perform a loop to search for each rule
  const characterArray = password.split('')

  // check the password for uppercase letters
  characterArray.forEach((character) => {
    if (upperCase.includes(character)) {
      upperCaseCheck = true
    }

    // check the password for lowercase letters
    if (lowerCase.includes(character)) {
      lowerCaseCheck = true
    }

    // check for numeric value
    if (!isNaN(parseInt(character))) {
      numericCheck = true
    }

    // check for special characters
    if (specialCharacters.includes(character)) {
      specialCharCheck = true
    }
  })
  // this will see if each test together is true, then return true for the entire character validation.

  return (upperCaseCheck && lowerCaseCheck && numericCheck && specialCharCheck)
}

module.exports = validatePassword

// testing
console.log(validatePassword('P455w0rd!'))
console.log(validatePassword('P4w0rd!'))
console.log(validatePassword('P455W0RD!'))
console.log(validatePassword('p455w0rd!'))
console.log(validatePassword('Password!'))
console.log(validatePassword('P455w0rd1'))
