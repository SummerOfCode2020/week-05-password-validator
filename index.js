/* Do work! Below are the requirements for the Password Validator from the README for quick reference
Your task is to create a `validatePassword` function which will return `true` when the password meets all requirements.

- minimum of 8 characters

Must contain at least one

- lower case letter
- upper case letter
- numeric value
- special character */

module.exports = function validatePassword(password) {
  for (let initialChar = 0; initialChar < password.length; initialChar++) {
    if (password.length >= 8) {
      return true
    } else {
      return false
    }
  }
}
