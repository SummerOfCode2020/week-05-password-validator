function validatePassword(password) {
  let isSpecial = false
  let isNumeric = false
  const stringOfNums = '0123456789'

  if (password.length >= 8) { // if the password length is 8 or more then do code after
    let upperCase = password.toUpperCase()
    let lowerCase = password.toLowerCase()

    if (upperCase === password || lowerCase === password) {
      return false
    } else {
      for (let index = 0; index < password.length; index++) {
        if (password.charCodeAt(index) >= 33 && password.charCodeAt(index) <= 47 ||
        password.charCodeAt(index) >= 58 && password.charCodeAt(index) <= 64 ||
        password.charCodeAt(index) >= 91 && password.charCodeAt(index) <= 96 ||
        password.charCodeAt(index) >= 123 && password.charCodeAt(index) <= 126) {
          isSpecial = true
        }
        if (stringOfNums.includes(password[index])) {
          isNumeric = true
        }
      }
    }
  }

  return isSpecial && isNumeric
}
module.exports = validatePassword
