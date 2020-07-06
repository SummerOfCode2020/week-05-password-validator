
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

  let upperCase = /[A-Z]/

  if (upperCase.test(password)) {
    oneUpperCase = true
  }
  else {
    oneUpperCase = false
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

  if (eightChar == true && oneUpperCase == true && oneLowerCase == true && numVal == true && specChar == true) {

    finalValidation = true
  }

  else {
    finalValidation = false
  }

   return finalValidation
  // return oneLowerCase
  // return oneUpperCase
  // return numVal
  // return specChar
}

// console.log("no number should be false", validatePassword('Password!'))
// console.log("no uppercase should be true", validatePassword('p455w0Rd'))
// console.log("no special character, should be true", validatePassword('P455w0rd1!'))
// console.log(" lowercase should be false", validatePassword('P455W0RE!'))
console.log("  should be false", validatePassword('PaaaWaRD!'))

module.exports = validatePassword;

