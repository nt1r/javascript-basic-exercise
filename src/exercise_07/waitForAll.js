export default function waitForAll(...promises) {
  // This function returns a promise which will be triggered when all the `promises` are completed.
  //
  // If all the `promises` are resolved, then the returned promise will be resolved. Otherwise,
  // if one of the `promises` is rejected, then the returned promise will be rejected.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in wait_for_all_spec.js.
  // * Please do NOT modify the signature of the function.

  // check if all input parameters are all 'Promise' type
  for (let promise of promises) {
    if (Promise.resolve(promise) !== promise) {
      throw new Error('Not all elements are promises.')
    }
  }

  // check if `${promises}` is empty
  if (promises.length === 0) {
    return new Promise(_ => 'Empty input');
  }

  return new Promise((resolve, reject) => {
    const promiseResultList = [];

    function addOnePromiseResult(promiseResult) {
      // push one result to list
      promiseResultList.push(promiseResult);

      // when the list is full
      if (promiseResultList.length === promises.length) {
        // judge if any promise result fail
        for (let onePromiseResult of promiseResultList) {
          if (onePromiseResult.success === false) {
            reject();
            return;
          }
        }
        // if all result are succeeded
        resolve();
      }
    }

    // for-loop each promise
    for (let promise of promises) {
      promise.then(
        (value) => {
          addOnePromiseResult({
            success: true
          })
        }, (reason) => {
          addOnePromiseResult({
            success: false
          })
        }
      );
    }
  })
}
