export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  // node structure of my list:
  // next: point to next node
  // value: the value of current node
  class Node {
    constructor(value, lastNode) {
      this.value = value;
      this.next = null;
      if (lastNode !== null) {
        lastNode.next = this;
      }
    }
  }

  // check if input parameter is valid
  if (array === undefined || array === null) {
    throw new Error('Creating list from undefined array');
  }

  // check if input parameter is empty
  if (array.length == 0) {
    throw new Error('Creating list from empty array');
  }

  let headNode = null;
  let lastNode = null;
  for (let num of array) {
    let currentNode = new Node(num, lastNode);
    lastNode = currentNode;
    if (headNode == null) {
      headNode = currentNode;
    }
  }

  return headNode;
}
