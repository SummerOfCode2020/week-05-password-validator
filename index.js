/* eslint-disable nonblock-statement-body-position */
function validatePassword(password) {
  let requirementsMet = true

  // Determine if the password length is more than or equal to 8 then..
  if (password.length >= 8) {
    requirementsMet = true
    // Using ASCII index and charCodeAt method (thanks to Jkearns!)
  } else { requirementsMet = false }
  // Test further requirements
  // Test for uppercase characters
  for (let i = 0; i < password.length; i++) {
    if (password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90) {
      requirementsMet = true
      // Test for lowercase characters
    } else { requirementsMet = false }
    if (password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122) {
      requirementsMet = true
      // Test for numeric value
    } else { requirementsMet = false }
    if (password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57) {
      requirementsMet = true
      // Test for special characters
    } else { requirementsMet = false }
    if (password.charCodeAt(i) >= 33 && password.charCodeAt(i) <= 47) {
      requirementsMet = true
    } else { requirementsMet = false }
    requirementsMet = true

    requirementsMet = false }

  return requirementsMet
}


module.exports = validatePassword
