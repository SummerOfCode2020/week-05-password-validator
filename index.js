// Do work!
// in Slack, JR instructed us not to use regular expressions
function validatePassword(pword) {
  const minLength = 8
  const lower = 'abcdefghijklmnopqrstuvwxyz'
  let lengthCheck = false
  let lowerCheck = false

  if (pword.length >= minLength) {
    lengthCheck = true
  }

  for (let x = 0; x < pword.length; x++) {
    if (lower.search(pword[x]) >= 0) {
      lowerCheck = true
    }

    return lengthCheck && lowerCheck
  }
}
module.exports = validatePassword
