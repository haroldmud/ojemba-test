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

  let isNumerous = /\d/;
  let single = /^\d+$/;
  let symb = /^[a-zA-Z0-9]+$/;
  let majiscule = /^[A-Z0-9]+$/;
  let miniscule = /^[a-z0-9]+$/;
  let forbPass = forbiddenPasswords.includes(password);
  let response = false;
  let regexNumbered = /\d+/g;
  let Numbered = password.match(regexNumbered).join("");
  let reversNumber = Numbered.split("").reverse().join("");
  const setOfPassword = new Set([...password]);



  if (
    !isNumerous.test(password) ||
    single.test(password) ||
    !symb.test(password) ||
    majiscule.test(password) ||
    miniscule.test(password) ||
    forbPass
  ) {
    return false;
  }
  for (let i = 0; i <= Numbered.length - 1; i++) {
    if (
      parseInt(Numbered[i]) + 1 === parseInt(Numbered[i + 1]) ||
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
