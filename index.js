/* eslint-disable nonblock-statement-body-position */
function validatePassword(password) {
  let allRequirementsMet = false
  let specCharacters = '!"#$%&/' / '()*+,-.'

  // Determine if the password length is more than or equal to 8 then..
  if (password.length >= 8) {
    // Using ASCII index and charCodeAt method (thanks to Jkearns!)
    // Test further requirements
    // Test for uppercase characters
    for (let i = 0; i < password.length; i++) {
      if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90)
      // Test for lowercase characters
        for (let i = 0; i < password.length; i++) {
          if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122)
          // Test for numeric value
            for (let i = 0; i < password.length; i++) {
              if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57)
                // Test for special characters
                for (let i = 0; i < password.length; i++) {
                  if (password.charCodeAt(i) >= 33 && password.charCodeAt(i) <= 46)
                    allRequirementsMet = true
                }
            }
        }
    }
  }

  return allRequirementsMet
}
module.exports = validatePassword
