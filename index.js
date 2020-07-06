// Do work!
// in Slack, JR instructed us not to use regular expressions
function validatePassword(pword) {
  const minLength = 8
  const lower = 'abcdefghijklmnopqrstuvwxyz'
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let lengthCheck = false
  let lowerCheck = false
  let upperCheck = false

  if (pword.length >= minLength) {
    lengthCheck = true
  }

  for (let x = 0; x < pword.length; x++) {
    if (lower.search(pword[x]) >= 0) {
      lowerCheck = true
    }
    if (upper.search(pword[x]) >= 0) {
      upperCheck = true
    }
  }

  return lengthCheck && lowerCheck && upperCheck
}
module.exports = validatePassword
