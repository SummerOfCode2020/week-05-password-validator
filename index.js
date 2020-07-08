function validatePassword(password) {
  const secureLength = (password.length >= 8) ? true : false


  if(secureLength === false){
    $('#length').removeClass('valid').addClass('invalid');
  } else {
    $('#length').removeClass('invalid').addClass('valid');
  }

  const secureCharacters = parseCharacters(password)

	if (secureCharacters.lowercase) {
			$('#lower').removeClass('invalid').addClass('valid');
		} else {
			$('#lower').removeClass('valid').addClass('invalid');
    }
    
    if (secureCharacters.uppercase) {
			$('#upper').removeClass('invalid').addClass('valid');
		} else {
			$('#upper').removeClass('valid').addClass('invalid');
    }
    
    if (secureCharacters.numeric) {
			$('#numeric').removeClass('invalid').addClass('valid');
		} else {
			$('#numeric').removeClass('valid').addClass('invalid');
    }
    
    if (secureCharacters.special) {
			$('#special').removeClass('invalid').addClass('valid');
		} else {
			$('#special').removeClass('valid').addClass('invalid');
		}

  if(secureLength === true && !Object.values(secureCharacters).includes(false)){
    $('#submit').prop('disabled', false);
    return true
    
  } else {
    $('#submit').prop('disabled', true);
    return false
  }
}

// create our function to parse each character
function parseCharacters(password) {
  // declare our list of special characters we accept
  let specialCharacterList = '!@#$%^&*()_+`~'

  // declare our default secure character object to add keys to later
  let secureCharacterFlags = {
    'lowercase': false,
    'uppercase': false,
    'numeric': false,
    'special': false
  }

  // split our password into an array so we can parse each character
  var passwordArray = password.split('')

  // Create a forEach loop to check each one to see if its valid
  passwordArray.forEach((character) => {
    // create our switch to change our secureCharacterFlag array depending on
    // the character
    switch (true) {
      // First test for special characters and change our flag to true
      // by scanning our list of special characters and making sure
      // our character in question is on the list.
      case (specialCharacterList.indexOf(character) !== -1):
        secureCharacterFlags.special = true
        break
      // Now test if it is numeric by seeing if isNaN is returned when
      // multiplying the number, if so it's not a number
      case (isNaN(parseInt(character)) === false):
        secureCharacterFlags.numeric = true
        break
      // Now test if it is uppercase by seeing if it's the same as 
      // upper of itself
      case (character === character.toUpperCase()):
        secureCharacterFlags.uppercase = true
        break
      // Now test if it is lowercase by seeing if its NOT the same as
      // upper of itself
      case (character !== character.toUpperCase()):
        secureCharacterFlags.lowercase = true
        break
      // If none of these are true, make no changes
      default:
        break
    }
  })

  // now send back our answer of is this password valid by calling our
  // verify function to parse our array has all true answers
  return secureCharacterFlags
}

$(document).ready(function(){
	
	$('input[type=password]').keyup(function() {
		var password = $(this).val();
		
		const valid = validatePassword(password)
		
	}).focus(function() {
		$('#pswd_info').show();
	}).blur(function() {
		$('#pswd_info').hide();
	});
	
});

// export our function to test
module.exports = validatePassword
