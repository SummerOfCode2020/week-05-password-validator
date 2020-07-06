// Do work!
// in Slack, JR instructed us not to use regular expressions
function validatePassword(pword) {
  const minLength = 8
  const lower = 'abcdefghijklmnopqrstuvwxyz'
  const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const digit = '0123456789'
  const special = '!@#$%^&*()_+=-{}[]'
  let lengthCheck = false
  let lowerCheck = false
  let upperCheck = false
  let numberCheck = false
  let specialCheck = false

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
    if (digit.search(pword[x]) >= 0) {
      numberCheck = true
    }
    if (special.search(pword[x]) >= 0) {
      specialCheck = true
    }
  }

  return lengthCheck && lowerCheck && upperCheck && numberCheck && specialCheck
}
module.exports = validatePassword
