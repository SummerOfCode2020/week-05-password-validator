
function validatePassword(password) {
  let eightChar = true
  let oneUpperCase = true
  let finalValidation = true
  let oneLowerCase = true
  let numVal = true
  // let specChar = true

  if (password.length >= 8) {
    eightChar = true
  }

  else {
    eightChar = false
  }

  const arrPassword = password.split()
  let upperCase = []

  for (let i = 0; i < arrPassword.length; i++) {
    if (arrPassword[i] === arrPassword[i].toUpperCase()) {
      upperCase.push(arrPassword[i])
    }
    if (upperCase.length >= 0) {
      oneUpperCase = true
    }
    if (upperCase.length < 1) {
      oneUpperCase = false
    }
  }

  let lowerCase = []

  for (let i = 0; i < arrPassword.length; i++) {
    if (arrPassword[i] === arrPassword[i].toLowerCase()) {
      lowerCase.push(arrPassword[i])
    }
    if (lowerCase.length >= 0) {
      oneLowerCase = true
    }
    if (lowerCase.length < 1) {
      oneLowerCase = false
    }
  }

  let oneNumber = []
  for (let i = 0; i < arrPassword.length; i++) {
    if (arrPassword[i] === Number.isInteger(arrPassword[i])) {
      oneNumber.push(arrPassword[i])
    }
    if (oneNumber.length >= 0) {
      numVal = true
    }
    if (oneNumber.length < 1) {
      numVal = false
    }
  }

  //  && specChar == true

  if (eightChar === true && oneUpperCase === true && lowerCase === true && numVal === true) {

    finalValidation = true
  }

  else {
    finalValidation = false
  }
  return finalValidation

}
console.log("no uppercase", validatePassword('p455w0Rd'))
console.log("no number", validatePassword('Password!'))
module.exports = validatePassword;

