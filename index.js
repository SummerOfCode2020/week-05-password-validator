const lowerCase= []


function validatePassword(password) {

  let validation = true

  
  
  if (password.length >= 8) {

    validation = true
  }

  else {
    validation = false
  }

  return validation

}


module.exports = validatePassword;

