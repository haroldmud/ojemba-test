/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 3
export default function findLargestNumber(numbers) {
  let largest = numbers[0];
  const filtered = numbers.filter((item) => item > largest);
  largest = Math.max(...filtered);
  return largest;
}
