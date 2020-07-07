

function isLowerCase(pwd, index) {
  return pwd.charCodeAt(index) >= 97 && pwd.charCodeAt(index) <= 122
}
function isUpperCase(pwd, index) {
  return pwd.charCodeAt(index) >= 65 && pwd.charCodeAt(index) <= 90
}
function isNumeric(pwd, index) {
  return !isNaN(pwd[index])
}
function validatePassword(pwd) {
  if (pwd.length < 8) return false
  let upper = 0
  let lower = 0
  let numeric = 0
  let special = 0

  for (let i = 0; i < pwd.length; i++) {
    if (isLowerCase(pwd, i)) {
      lower++
    } else if (isUpperCase(pwd, i)) {
      upper++
    } else if (isNumeric(pwd, i)) {
      numeric++
    } else {
      special++
    }
  }

  return lower > 0 && upper > 0 && numeric > 0 && special > 0
}
module.exports = validatePassword
