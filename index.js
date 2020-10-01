// Do work!
function validatePassword (password) {
    let finalCheck = true
    let characterCount = true
    let oneLowerCase= true
    let oneUpperCase = true
    let oneNumericValue = true
    let specialCharacter = true 
    let upCase = /[A-Z]/
    let loCase = /[a-z]/
    let nuvalue = /[0-9]/
    let speCharacter = /[@,#,$,%,!]/


    if(password.length >= 8 ) {
        characterCount = true
    }   else{
        characterCount = false
    }
    if (upCase.test(password)){
        oneUpperCase = true
    }   else {
        oneUpperCase = false
    }
    
    if(loCase.test(password)){
        oneLowerCase = true
    }   else {
        oneLowerCase = false
    }
    if (nuvalue.test(password)){
        oneNumericValue = true
    } else {
        oneNumericValue = false
    }
    if (speCharacter.test(password)){
        specialCharacter = true
    }   else {
        specialCharacter = false
    }
     if (characterCount == true && oneUpperCase == true && oneLowerCase == true && oneNumericValue ==true && specialCharacter == true){
        finalCheck =true
    } else {
        finalCheck = false
    }
    return finalCheck
}

module.exports = validatePassword 