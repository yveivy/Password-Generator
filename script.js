// lowercase, uppercase, numbers, special characters
var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers ="0123456789";
var specialchar ="!@#$%^&*()_+='";


var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var password = "";

  // Prompt the user for password length
  var passwordLength = prompt("Please enter the number of characters you would like, between 8 and 128, in your password.");

  // Check if user input is a number
  if (isNaN(passwordLength)) {
    alert("Please enter a valid number.");
    return;
  }

  passwordLength = parseInt(passwordLength);
  // password length 8 < 128 alerts
  if (passwordLength <8) {
    alert("Password must have more than 7 characters");
    return;
  }
  if (passwordLength >128) {
    alert("Password must have less than 128 characters");
    return;
  }
  // Confirm lowercase letters
  var includeLowercase = confirm("Would you like to include lowercase letters in your password?");
  // Confirm uppercase letters
  var includeUppercase = confirm("Would you like to include uppercase letters in your password?");
  // Confirm numbers
  var includeNumbers = confirm("Would you like to include numbers in your password?");
  // Confirm special characters
  var includeSpecial = confirm("Would you like to include special characters in your password?");

  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecial) {
    alert("Please select at least one password criteria");
    return;
  }

  if (includeLowercase) {
    password += lowercaseLetters;
  }
  if (includeUppercase) {
  password += uppercaseLetters;
  }
  if (includeNumbers) {
    password += numbers;
  }
  if (includeSpecial) {
  password += specialchar;
  }
  
  var newPassword = "";

  for (var i = 0; i < passwordLength; i++) {
    newPassword += password.charAt(Math.floor(Math.random() * password.length));

  }
  
  return newPassword;

}




function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


