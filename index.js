// Password Validator code
let valid = false

function isLowerCase(str) {
  if (str.toUpperCase() !== str) {
    valid = true
  }
}
function isUpperCase(str) {
  if (str.toLowerCase() !== str) {
    valid = true
  }
}
function isMinimum(str) {
  let pwarr = str.split()

  if (pwarr.length >= 8) {
    valid = true
  }
}
function isNum(str) {
  let pwarr = str.split()

  for (let index = 0; index < pwarr.length; index++) {
    if (Number.isInteger(parseInt(pwarr[index]))) {
      valid = true
    }
  }
}
function isSpecialCharcter(str) {
  let pwarr = str.split()

  for (let index = 0; index < pwarr.length; index++) {
    const element = pwarr[index]

    switch (element) {
      case '@': valid = true
        break
      case '!': valid = true
        break
      case '#': valid = true
        break
      case '$': valid = true
        break
      case '%': valid = true
        break
      case '*': valid = true
        break
      case '&': valid = true
        break
      case '?': valid = true
        break
      case '<': valid = true
        break
      case '>': valid = true
        break
      case '+': valid = true
        break
      case '-': valid = true
        break
      case '=': valid = true
        break
      case '_': valid = true
        break
      case '|': valid = true
        break
      case '~': valid = true
        break

      default:
        break
    }
  }
}
function validatePassword(str) {
  isLowerCase(str)
  isMinimum(str)
  isNum(str)
  isUpperCase(str)
  isSpecialCharcter(str)

  return valid
}
module.exports = validatePassword
