function validatePassword (password) {
  var charCount = (password.length >= 8)
  var checkUpCase = true
  var charLength = true
  var charLowCase = true
  var charNumVal = true
  var specCharVal = true



  var upperCase = /[A-Z]/
  var lowerCase = /[a-z]/
  var numValue = /[0-9]/
  var specChar = /[!@#&*._]/


  if (charCount) {
      charLength = true
  } else {
      charLength = false
  }


  if (upperCase.test(password)) {
    checkUpCase = true
        
  } else {
    checkUpCase = false
  }

  if (lowerCase.test(password)) {
      charLowCase = true

  } else {
      charLowCase = false
  }

  if (numValue.test(password)) {
      charNumVal = true
      
  } else {
      charNumVal = false
  }

  if (specChar.test(password)) {
      specCharVal = true
  } else {
      specCharVal = false

  }

  var passwordValidator = checkUpCase == true && charLength == true && charLowCase == true && charNumVal == true && specCharVal == true
  if (passwordValidator) {
    passwordValidator = true
  } else {
    passwordValidator = false
  }
  return passwordValidator


}

module.exports = validatePassword