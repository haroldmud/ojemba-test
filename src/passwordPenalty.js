/**
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensuitem, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);
  if (!password || password === "" || password == "null") {
    return 0;
  } else {
    let item = 0;
    let numerous = /(\d)\1+/;
    let letter = /(\w)\1+/;
    let doubling = password.match(numerous);
    let seek = password.match(letter);
    // * Calculates the sum of penalty points for a given password.
    if (doubling && seek) {
      item = item + doubling[0].length + seek[0].length;
    }
    // Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
    if (doubling) {
      item = item + doubling[0].length;
    }
    // It returns the sum of penalty points for a password or 0.
    if (seek) {
      item = item + seek[0].length;
    }
    if (item === 0) {
      return 0;
    } else if (item <= 2) {
      return 1;
    } else {
      return 2;
    }
  }
}
