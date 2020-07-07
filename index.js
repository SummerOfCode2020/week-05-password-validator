/* eslint-disable indent */
// // Make a password function
// function validatePassword(password) {
// let status = []

//     if () {
//         let status = true;
//     }



// // Success! 

// // Not long enough, needs >= 8 chars
//     if (password.length < 8) {
//         let status = false;
//     }
// // Missing a lower case letter
//     if (password.case) {

//     }
// // Missing an upper case letter

// // Missing a numeric value

// // Missing a special character

// }





function validatePassword(password) {
    const validLength = (password.length >= 8)

    const validChars = pushCharacters(password)

    if (validLength && validChars) {
        return true
    }

    return false
}

function pushCharacters(password) {
    let specChars = '`~!@#$%^&*()_+'

    let charStatus = {
        'uppercase': false,
        'lowercase': false,
        'numerical': false,
        'special': false
    }


    let passwordArray = password.split('')

    passwordArray.forEach((character) => {
        switch (true) {
            case (specChars.indexOf(character) !== -1):
                charStatus.special = true
                break
            case (character === character.toUpperCase()):
                charStatus.uppercase = true
                break
            case (character === character.toLowerCase()):
                charStatus.lowercase = true
                break
            case (Number.isInteger(parseInt(character)) === true):
                charStatus.numerical = true
                break
            default:
                break
        }
    })

     return verifySpecCharStatus(charStatus)
}

 function verifySpecCharStatus(charStatus) {
     if (Object.values(charStatus).includes(false)) {
         return false
     }

     return true
 }

module.exports = validatePassword
