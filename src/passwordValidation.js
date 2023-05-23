export const forbiddenPasswords = ["amG84h6yeQ", "mc9Q20pdjH", "jnT6Q2f8U5"];

/**
 * @param {string} password
 * @returns {boolean}
 */
export default function isValidPassword(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  // * * * YOUR CODE GOES IN HERE . * * *
  if (password.length !== 10) {
    return false;
  }

  const isNumberedCharacter = /\d/;
  const singleCharacter = /^\d+$/;
  const symbolCharacter = /^[a-zA-Z0-9]+$/;
  const uppercaseCharacter = /^[A-Z0-9]+$/;
  const lowercaseCharacter = /^[a-z0-9]+$/;
  const forbiddenPasswords = forbiddenPasswords.includes(password);
  const response = false;
  const regexNumbered = /\d+/g;
  const Numbered = password.match(regexNumbered).join("");
  const reversNumber = Numbered.split("").reverse().join("");
  const setOfPassword = new Set([...password]);



  if (!isNumberedCharacter.test(password)) {
    return false;
  }

  if(singleCharacter.test(password)){
    return false;
  }

  if(!symbolCharacter.test(password)){
    return false;
  }

  if(uppercaseCharacter.test(password)){
    return false;
  }

  if(lowercaseCharacter.test(password)){
    return false
  }

  if(forbiddenPasswords){
    return false
  }
  
  for (let i = 0; i <= Numbered.length - 1; i++) {
    if (
      parseInt(Numbered[i]) + 1 === parseInt(Numbered[i + 1]) 
    ) {
      response = true;
    }
    if (
      parseInt(reversNumber[i]) + 1 === parseInt(reversNumber[i + 1])
    ) {
      response = true;
    }
  }
    // If validity is checked it returns true, otherwise false
  if (response) {
    return false;
  }
  if (setOfPassword.size < 4) {
    return false;
  }
  return true;
}
