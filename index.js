// Do work!
// in Slack, JR instructed us not to use regular expressions
function validatePassword(pword) {
  const minLength = 8
  let lengthCheck = false

  if (pword.length >= minLength) {
    lengthCheck = true
  }

  return lengthCheck
}

module.exports = validatePassword
