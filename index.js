// create a validatePassword function which will return true when the password meets all requirements.
/*  

requirenments are as follows 
- minimum of 8 characters
- lower case letter
- upper case letter
- numeric value
- special character

*/



function validatePassword(password) {
    
    let passwordValidationPassed = false;
    
    /* here I am checking the length of the password and it must be equal or grater than 8 */ 
    if(password.length >= 8) {
        /* here I am looping through the password to see if a special characters ASCII 32-47 and     */
        for (passwordChar = 0; passwordChar < password.length; passwordChar++){
            if (password.charCodeAt(passwordChar) >= 32 && password.charCodeAt(passwordChar) <= 47
            || password.charCodeAt(passwordChar) >= 58 && password.charCodeAt(passwordChar) <= 64
            || password.charCodeAt(passwordChar) >= 91 && password.charCodeAt(passwordChar) <= 96
            || password.charCodeAt(passwordChar) >= 123 && password.charCodeAt(passwordChar) <= 126) {
                /* looping through each character to check for uppercase letters*/
                for (passwordChar = 0; passwordChar < password.length; passwordChar++) {
                    if (password.charCodeAt(passwordChar) >= 65 && password.charCodeAt(passwordChar) <= 90) {
                        /* looping through each character to check for lowercase*/
                        for (passwordChar = 0; passwordChar < password.length; passwordChar++) {
                            if (password.charCodeAt(passwordChar) >= 97 && password.charCodeAt(passwordChar) <= 122) {
                               /* looping through validating if a number is present */
                                for (passwordChar = 0; passwordChar < password.length; passwordChar++) {
                                    if (password.charCodeAt(passwordChar) >= 48 && password.charCodeAt(passwordChar) <= 57 ) 
                                    passwordValidationPassed = true;
                                };
                            };
                        };
                    };
                };                         
            };
        };
    };
    return passwordValidationPassed; 
};


module.exports = validatePassword;