function multiplyBy10 (array) {
  return array.map(function(element) {
    return element * 10;
  })
};

function shiftRight (array) {
  var results = array.map(function(element, index, arr) {
    if (index === 0) {
      return arr [arr.length - 1];
    }
    return arr[index-1];
  });
  return results;
}

function onlyVowels (array) {
 // your code here
};

function doubleMatrix (array) {
 // your code here
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};

let numbers = [1, 5, 10, 15];

let doubles = numbers.map(function(x) {
  return x*2;
});
