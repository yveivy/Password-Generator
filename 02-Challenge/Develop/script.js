// // Assignment Code
var generateBtn = document.querySelector("#generate");

// lowercase, uppercase, numbers, special characters
var lowercaseLetters = ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");

var uppercaseletters = ("A","B","C","D","E","F","G","H","I","J","K","L","M","N",
"O","P","Q","R","S","T","U","V","W","X","Y","Z");

var numbers =("0","1","2","3","4","5","6","7","8","9");

var specialchar =("@","#","$","%","^","&","*");

function generatePassword(){
// Prompt the user for password length
var passwordLength = prompt("Please enter a the number of characters you would like, between 8 and 128, in your password.");
passwordLength = parseInt(passwordLength);

// password lenth 8 < 128 alerts
if (passwordLength <8) {alert("Password must have more than 7 characters");
return "";
}

if (passwordLength >128) {alert("Password must have less that 128 characters");
return "";
}

// Confirm lowercase letters
var lowerCaseletters = confirm("Would you like to include lowercase letters in your password?")

if (lowerCaseletters) {
  password +=lowerCaseletters;
}

// Confirm uppercase letters
var upperCaseletters = confirm("Would you like to include uppercase letters in your password?")

if (upperCaseletters) {
  password +=upperCaseletters;
}


    // Generate password
    // Display password to the 
    
   return password
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);










// var passwordLength = prompt("Please enter the number of characters you would like in your password")

// if userChoice =




// // Write password to the #password input
// function writePassword() {
  
  

// Need the following variables:
// selected length of the password
// array of lowercase letters
// array of uppercase letters
// array of numbers
// array of special characters
// to hold the password we're building

  // prompt for password length-->stored in a variable.
  // Validate the user input -->if user choosed <8 or >128, alert that they need to chooose a valid password length, then they're going to need to restart OR call the function that prompts for length again
  // prompt --> Do they want uppercase letters?
  // prompt --> Do they want lowercase letters?
  // prompt --> Do they want numbers?
  // prompt --> Do they want special characters?
  // With each of those prompts, you need an array of those character types]]
  // There needs to be at least one of each selected  character type included in the password
  // Randomly generate a character from each character set as its chosen and add it to the end of the password that you're building (.push() for an array or .concat() for a string)
  // for loop:
      // for (var i = ???; i < passwordLenth; i++)
       // EITHER keep the character sets separate OR combine them to a mega-array to pull the rest of the characters from 
      // IF keeping the character sets separate, randomly generate a number to tell which array you're pulling from, then randomly generate a number to pull the character from the array (character will by array[number])
      // IF pushing to a mega-array randomly generate a number to pull a character from the array
      // IF pushing to a mega-array, remember to set the array back to any empty array at the start of the process/
      // return the generated password


  

// ## Acceptance Criteria

// ```
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
