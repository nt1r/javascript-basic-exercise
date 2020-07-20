export default function countCharacter(string, prediction) {
  // This function will count the character number in a string which satisfies specific prediction.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in character_counter_spec.js.
  // * Please do NOT modify the signature of the function.

  let countNumber = 0;
  // check if the input `${string}` have been defined, null or not a typeof 'String'
  if (string === undefined || string === null || typeof string !== 'string') {
    return countNumber;
  }

  // check if the input `${prediction}` has been defined or null
  if (prediction === undefined || prediction === null) {
    // if undefined, make sure every character satisfies `${prediction}`
    prediction = () => true;
  }

  // for-loop every character in `${string}`
  for (let char of string) {
    // check if current character satisfies `${prediction}`
    if (prediction(char)) {
      countNumber++;
    }
  }

  return countNumber;
}
