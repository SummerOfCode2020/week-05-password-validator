// Do work!
// Create our main function
function validatePassword(password) {
  // create our variable which determines if the length is long enough
  const secureLength = (password.length >= 8) ? true : false
  // now run our parseCharacters function to examine each character to make
  // sure we have numbers, special chars, uppercase, and lowercase letters
  const secureCharacters = parseCharacters(password)

  // if all of the above is true, we have a good password!
  // return true if both are true, and false if they are both false
  return (secureLength === true && secureCharacters === true)
}

// create our function to parse each character
function parseCharacters(password) {
  // declare our list of special characters we accept
  let specialCharacterList = '!@#$%^&*()_+`~'

  // declare our default secure character object to add keys to later
  let secureCharacterFlags = {
    'lowercase': false,
    'uppercase': false,
    'numeric': false,
    'special': false
  }

  // split our password into an array so we can parse each character
  var passwordArray = password.split('')

  // Create a forEach loop to check each one to see if its valid
  passwordArray.forEach((character) => {
    // create our switch to change our secureCharacterFlag array depending on
    // the character
    switch (true) {
      // First test for special characters and change our flag to true
      // by scanning our list of special characters and making sure
      // our character in question is on the list.
      case (specialCharacterList.indexOf(character) !== -1):
        secureCharacterFlags.special = true
        break
        // Now test if it is numeric by seeing if isNaN is returned when
        // multiplying the number, if so it's not a number
      case (isNaN(parseInt(character)) === false):
        secureCharacterFlags.numeric = true
        break
        // Now test if it is uppercase by seeing if it's the same as 
        // upper of itself
      case (character === character.toUpperCase()):
        secureCharacterFlags.uppercase = true
        break
        // Now test if it is lowercase by seeing if its NOT the same as
        // upper of itself
      case (character !== character.toUpperCase()):
        secureCharacterFlags.lowercase = true
        break
        // If none of these are true, make no changes
      default:
        break
    }
  })

  // now send back our answer of is this password valid by calling our
  // verify function to parse our array has all true answers
  return verifySpecialCharacterFlags(secureCharacterFlags)
}

// create quick function to parse our specialCharactersFlag to make sure
// they are all true. Check if any values in the object are equal to false, 
// if so this is not a valid password. We can check this by seeing if any of our
// keys have a value of false if so then the password is not meeting our requirements, 
// return false. If there is no false, we are all good so return true.
function verifySpecialCharacterFlags(specialCharactersFlags) {
  return !Object.values(specialCharactersFlags).includes(false)
}


// export our function to test
module.exports = validatePassword