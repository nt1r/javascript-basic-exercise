export default function formatNumber(number, option) {
  // This function will format the number to a fixed number string. The decimal part should 2.
  // That means the number 2 will be formatted as '2.00'. The `option` is an object which contains
  // a `currency` property. If the property is `true`, a dollar sign will be added to the result.
  //
  // Your target:
  //
  // * Please implement the function and pass all the tests in format_number_spec.js.
  // * Please do NOT modify the signature of the function.

  // check if input parameters are null
  expect(number != null && option != null);

  // check if number is type of 'Number'
  expect(typeof number === 'number');

  // fix number part
  let formattedNumberStr = `${number.toFixed(2)}`;

  // check if '$' sign should be added
  if (option !== undefined && option.hasOwnProperty('currency') && option.currency === true) {
    formattedNumberStr = `$ ${formattedNumberStr}`;
  }

  return formattedNumberStr;
}
