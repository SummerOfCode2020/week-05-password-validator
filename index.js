
function validatePassword(password) {
  let eightChar = true
  let oneUpperCase = true
  let finalValidation = true
  let oneLowerCase = true
  let numVal = true
  let specChar = true

  if (password.length >= 8) {
    eightChar = true
  }

  else {
    eightChar = false
  }

  const arrPassword = password.split()
  let upperCase = []

  for (let i = 0; i < arrPassword.length; i++) {
    if (arrPassword[i] == arrPassword[i].toUpperCase()) {
      upperCase.push(arrPassword[i])
    }
    if (upperCase.length >= 0) {
      oneUpperCase = true
    }
    if (upperCase.length < 1) {
      oneUpperCase = false
    }
  }

  let lowerCase = /[a-z]/

  if (lowerCase.test(password)) {
    oneLowerCase = true
  }
  else {
    oneLowerCase = false
  }

  

  let allDigit = /[0-9]/

  if (allDigit.test(password)) {
    numVal = true
  }
  else {
    numVal = false
  }

  let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/

  if (format.test(password)) {

    specChar = true
  }
  else {
    specChar = false
  }

  if (eightChar == true && oneUpperCase == true && lowerCase == true && numVal == true && specChar == true) {

    finalValidation = true
  }

  else {
    finalValidation = false
  }

  // return finalValidation
  return oneLowerCase
  // return oneUpperCase
  // return numVal
}

// console.log("no number should be false", validatePassword('Password!'))
// console.log("no uppercase should be true", validatePassword('p455w0Rd'))
// console.log("no special character, should be true", validatePassword('P455w0rd1!'))
console.log(" lowercase should be false", validatePassword('P455W0RE!'))

module.exports = validatePassword;

