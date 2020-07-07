function validatePassword(password) {
  if (password.length >= 8) { // if the password length is 8 or more then do code after
    let upperCase = password.toUpperCase()
    let lowerCase = password.toLowerCase()

    if (upperCase === password || lowerCase === password) {
      return false
    } else {
      for (let index = 0; index < password.length; index++) {
        if (password.charCodeAt(index) >= 32 && password.charCodeAt(index) <= 47 || password.charCodeAt(index) >= 58 && password.charCodeAt(index) <= 64 || password.charCodeAt(index) >= 91 && password.charCodeAt(index) <= 96 || password.charCodeAt(index) >= 123 && password.charCodeAt(index) <= 126) {
          return true
        }
      }
    }
  } else {
    return false
  }
}
module.exports = validatePassword
