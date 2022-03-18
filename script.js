// Assignment code here
//define variables
var lengthcheck;
var uppercasecheck;
var numbercheck;
var specialcheck;

// //function for user determined password length
function asklength(){
  lengthcheck = prompt("How long do you want your password? (Must be 8-128 characters)")
      if (lengthcheck<8){
        alert("Too short!");
        asklength();
      }
      else if (lengthcheck>128){
        alert("Too long!");
        asklength();
      }
      else if (isNaN(lengthcheck)){
        alert("Gotta be a number.");
        asklength();
      }
      else{
        return lengthcheck;
      }
}

// //function for user determined uppercase letter inclusion
function askupper(){
  uppercasecheck = prompt("Do you want uppercase letters in your password? Reply YES or NO")
    if (uppercasecheck.toUpperCase() === 'YES'){
      uppercasecheck = true
    }
    else if (uppercasecheck.toUpperCase() === 'NO'){
      uppercasecheck = false
    }
    else{
      alert("Not Valid, Please enter YES or NO.");
      askupper();
    }
}

// //function for user determined number inclusion
function asknumber(){
  numbercheck = prompt("Do you want numbers in your password? Reply YES or NO")
  if (numbercheck.toUpperCase() === 'YES'){
    numbercheck = true
  }
  else if (numbercheck.toUpperCase() === 'NO'){
    numbercheck = false
  }
  else{
    alert("Not Valid, Please enter YES or NO.");
    asknumber();
  }
}

// //function for user determined special character inclusion
function askspecial(){
  specialcheck = prompt("Do you want special characters in your password? Reply YES or NO")
  if (specialcheck.toUpperCase() === 'YES'){
    specialcheck = true
  }
  else if (specialcheck.toUpperCase() === 'NO'){
    specialcheck = false
  }
  else{
    alert("Not Valid, Please enter YES or NO.");
    askspecial();
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//generate random password
function generatePassword( len ) {
//call all prompts
  asklength();
  askupper();
  asknumber();
  askspecial();
//def variable strings
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var upper = lower.toUpperCase();
  var numbers = '0123456789';
  var special = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  var password = "";
  //Make random array for included characters
  var randomchar = lower;
  randomchar += uppercasecheck?upper:"";
  randomchar += numbercheck?numbers:"";
  randomchar += specialcheck?special:"";
  //loop through array and add single random character
  while( password.length<lengthcheck ) {
      password += randomchar.charAt(Math.trunc((randomchar.length + 1) * Math.random()));
  }
  console.log(randomchar);
  return password;
}