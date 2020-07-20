export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  // check if input parameters are valid
  expect(start !== undefined && end !== undefined && typeof start === 'number' && typeof end == 'number');

  let rangeResult = [];
  let step = 0;
  // judge which one is larger than another
  if (start === end) {
    return rangeResult;
  } else if (start < end) {
    // plus one each time
    step = 1;
  } else {
    // minus one each time
    step = -1;
  }

  // for-loop each number within range
  for (let num = start; num != end; num += step) {
    rangeResult.push(num);
  }

  return rangeResult;
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  let sumResult = 0;
  // check if `${numbers}` has been defined or null
  if (numbers === undefined || numbers === null) {
    return sumResult;
  }

  for (let num of numbers) {
    sumResult += num;
  }

  return sumResult
}
