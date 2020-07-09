


function validatePassword(password) {
    if (password.length < 8) return false

    const stringOfNumbers = '1234567890'
    const stringOfSpecialChars = '`~!@#$%^&*()_+-=[]\\{}|;\':",./<>?'
    const stringOfAlaphabet = 'abcdefghijklmnopqrstuvwxyz'

    let upper = 0
    let lower = 0
    let numeric = 0
    let special = 0

    for (let i = 0; i < password.length; i++) {
        if (stringOfAlaphabet.includes(password[i])) {
            lower++
        } else if (stringOfAlaphabet.toUpperCase().includes(password[i])) {
            upper++
        } else if (stringOfNumbers.includes(password[i])) {
            numeric++
        } else if (stringOfSpecialChars.includes(password[i])) {
            special++
        }
    }
    
    return lower > 0 && upper > 0 && numeric > 0 && special > 0
}

module.exports = validatePassword