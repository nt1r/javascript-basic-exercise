export default function flattenArray(array) {
  // This function flattens a nested array into a sequence.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in flatten_array_spec.js.
  // * Please do NOT modify the signature of the function.

  // check if the input array is valid
  if (array === undefined || array == null) {
    throw new Error('Flatten undefined or null array');
  }

  let flattenedArray = [];

  // for-loop each element in `${array}`
  for (let element of array) {
    // directly output if the element type is 'number'
    if (typeof element === 'number') {
      flattenedArray.push(element);
    } else if (element instanceof Array) {
      // if the element type is 'array' output each element in current element
      for (let subElement of element) {
        flattenedArray.push(subElement);
      }
    }
  }

  return flattenedArray;
}
