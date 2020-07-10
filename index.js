

function validatePassword(password) {
    let upperCaseCheck = false
    let lowerCaseCheck = false 
    let numbersCheck = false
    let specialCheck = false

    if (password.length >= 8) { //checking for password length if true to the following 
        // this for loop loops through each letter the password
        for(let i = 0; i < password.length; i++){
            if (password.charAt(i) != password.charAt(i).toUpperCase()) {
                upperCaseCheck = true
            }
            if (password.charAt(i) != password.charAt(i).toLowerCase()) {
                lowerCaseCheck = true
            }
            if (/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(password.charAt(i))){
                specialCheck = true
            }
            if (!isNaN(password.charAt(i))) {
                numbersCheck = true
            }

        }
        if (upperCaseCheck == true && lowerCaseCheck == true && specialCheck == true && numbersCheck == true) {
            return true
            
        } else {
            return false
        }
    } else { 
        return false
    }

   


}


module.exports = validatePassword