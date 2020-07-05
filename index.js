// Do work!

function validatePassword(password) {
  let allRequirements = false
  let specCharacters = '!@#$%^&*()_+`~'

  // If passes first requirement, minimum of 8 characters...
  if (password.length >= 8) {
  // Continue on to check the rest of the requirements.
    // Using Ascii table to determine this
    // by implementing the charCodeAt method

    // Must contain at least one lower case letter
    for (let i = 0; i < password.length; i++) {
      if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
        // Must contain at least one upper case letter
        for (let i = 0; i < password.length; i++) {
          if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
            // Must contain at least one numeric value
            for (let i = 0; i < password.length; i++) {
              if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
                // Must contain at least one special character- use indexOf method to search through specCharacters
                // & return allRequirements to be true if index is found in that string
                for (let i = 0; i < password.length; i++) {
                  if (specCharacters.indexOf(password.charAt(i)) !== -1) {
                    // this means all requirements have been met if we made it to this point,
                    // and changes the initial value of it from false, to be true!
                    allRequirements = true
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  return allRequirements
}

module.exports = validatePassword
