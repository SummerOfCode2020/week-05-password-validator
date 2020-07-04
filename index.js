
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

  arrPassword.forEach((char) => {
    if (char == char.toUpperCase()) {
      oneUpperCase = true
    }
    else {
      oneUpperCase = false
    }
  })

  arrPassword.forEach((char) => {
    if (char == char.toLowerCase()) {
      oneLowerCase = true
    }
    else {
      oneLowerCase = false
    }
  })

  arrPassword.forEach((char) => {
    if (Number.isInteger(char)) {
      numVal = true
    }
    else {
      numVal = false
    }
  })

  let format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/

  if (format.test(password)) {
    specChar = true;
  } else {
    specChar = false;
  }

  if (eightChar == true && oneUpperCase == true &&
    oneLowerCase == true && numVal == true && specChar == true) {
      
    finalValidation = true
  }

  else {
    finalValidation = false
  }

    return finalValidation

  }

module.exports = validatePassword

