function multiplyBy10 (array) {
  return array.map(function(number) {
    return number * 10;
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
  return array.map(function(word) {
    return word.replace(/[^aeiou]/gi,"");
  })
};

function doubleMatrix (array) {

  return array.map(function(innerArray) {
    return innerArray.map(function(number) {
      return number * 2;
    })
  })
};

module.exports = {
  multiplyBy10: multiplyBy10,
  shiftRight: shiftRight,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix
};
