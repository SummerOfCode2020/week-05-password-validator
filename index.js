// Do work!
function validatePassword (password) {
    let finalCheck = true
    let numberOfCharacters = true
    let oneLowerCase = true    
    let oneUpperCase = true
    let numericValue = true
    let specialCharacter = true
    let loCase = /[a-z]/
    let upCase = /[A-Z]/
    let numValue = /[0-9]/
    let speChar = /[!@#$%^&*()_+=<>?/"':;,.{}]/

    if(password.length >= 8) {
        numberOfCharacters = true
        
    }else{
        numberOfCharacters = false
    }

    if(upCase.test(password)){
        oneUpperCase = true
    }else{
        oneUpperCase = false
    }

    if(loCase.test(password)){
        oneLowerCase = true 
    }else{ 
        oneLowerCase = false
    }
    
    if(numValue.test(password)){
        numericValue = true 
    }else{ 
        numericValue = false 
    }

    if(speChar.test(password)){
        specialCharacter = true
    }else{
        specialCharacter = false
    }

    if (numberOfCharacters == true && oneUpperCase == true && specialCharacter == true && numericValue == true && oneLowerCase == true ){
        finalCheck = true
    }else{
        finalCheck = false 
    }
        return finalCheck
}

module.exports = validatePassword