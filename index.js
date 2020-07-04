
function validatePassword(password) {
  let eightChar = true
  let oneUpperCase = true
  let finalValidation = true
  // let oneLowerCase = true
  // let numVal = true
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
  
  // let lowerCase = []

  // for (let i = 0; i < arrPassword.length; i++) {
  //   if (arrPassword[i] === arrPassword[i].toLowerCase()) {
  //     lowerCase.push(arrPassword[i])
  //   }
  //   if (lowerCase.length >= 0) {
  //     oneUpperCase = true
  //   }
  //   if (lowerCase.length < 1) {
  //     oneUpperCase = false
  //   }
  // }
  //&&oneLowerCase == true && numVal == true && specChar == true

  if (eightChar === true && oneUpperCase === true ) {

    finalValidation = true
  }

  else {
    finalValidation = false
  }
  return finalValidation

}
console.log(validatePassword('p455w0Rd'))
module.exports = validatePassword;

