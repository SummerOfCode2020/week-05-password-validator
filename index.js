const { expect } = require('chai')

// Function returns true when all requirements are met
module.exports = function validatePassword(password) {
  // password has lowercase letters //
  if (password.match(/[a-z]/) &&
  // password has uppercase letters //
        password.match(/[A-Z]/) &&
  // password has numerical values //
        password.match(/[0-9]/) &&
  // password has special characters //
      password.match(/[!@#$%^&*()]/) &&
  // password has minimum of 8 characters //
        password.length >= 8) {
    password = true
  } else {
    password = false
  }

  return password
}



