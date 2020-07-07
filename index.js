// Password Validator code


function isLowerCase(str) {
  if (str.toUpperCase() === str) {
    return false
  }
  else return true
}
function isUpperCase(str) {
  let str2 = str.toLowerCase()

  if (str2 !== str) {
    return true
  }
  else return false
}
function isMinimum(str) {
  let pwarr = str.split('')

  if (pwarr.length >= 8) {
    return true
  }
  else return false
}
function isNum(str) {
  let pwarr = str.split('')
  let toggle = false

  for (let index = 0; index < pwarr.length; index++) {
    let num = parseInt(pwarr[index])

    if (Number.isInteger(num)) {
      toggle = true
    }
  }

  return toggle
}

function isSpecialCharcter(str) {
  let pwarr = str.split('')
  let valid = false


  for (let index = 0; index < pwarr.length; index++) {
    switch (pwarr[index]) {
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
      default: valid = false
    }
  }

  return valid
}
function validatePassword(str) {
  let count = 0

  if (isLowerCase(str)) {
    count++
  }
  if (isMinimum(str)) {
    count++
  }
  if (isNum(str)) {
    count++
  }
  if (isUpperCase(str)) {
    count++
  }
  if (isSpecialCharcter(str)) {
    count++
  }
  if (count === 5) {
    return true
  }
  else return false
}


module.exports = validatePassword
