// Assignment Code


var generateBtn = document.querySelector("#generate");
const charNumbers = ["0","1","2","3","4","5","6","7","8","9"];
const charSpecial = [ "!", "@", "£", "%", "&", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
const charLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const charUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Write password to the #password input

let  charSet = []; 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;
}

function generatePassword() {
   let charSet = []

   var passwordLength = prompt("Please enter a password with a character length between 8 - 128")
   if (passwordLength < 8 || passwordLength > 128) {
    alert("Incorrect password length")
    generatePassword()
   } else if (passwordLength === "" || isNaN (passwordLength)) {
    alert("Please enter a password with a character length between 8 and 128")
    generateBtn()
   }

   var lowercase = confirm("Do you want lowercase letters in your password?");
   var uppercase = confirm("Do you want uppercase letters in your password?");
   var numbers = confirm("Do you want numbers in your password?");
   var special = confirm("Do you want special characters in your password?");

   if (lowercase == true){
    charSet = charSet.concat(charLowercase);
   }

   if (uppercase == true){
    charSet = charSet.concat(charUppercase);
   }

   if (numbers == true) {
    charSet = charSet.concat(charNumbers);
   }

   if (special == true){
    charSet = charSet.concat(charSpecial);
   }

   if (lowercase == false && uppercase == false && numbers == false && special ==false){
    alert("Please select one of the options")
   }

   console.log(charSet)

   var results = ""

   for(let i = 0, n = charSet.length; i <parseInt(passwordLength); i++){
    results += charSet[Math.floor(Math.random() *n)];
   }
   return results;

  }



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 