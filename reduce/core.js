function sum (array) {
  // your code here
};

function productAll (array) {
  return array.reduce(function (outerAcc, outerValue) {
    return outerValue.reduce(function (innerAcc, innerVal) {
      return innerAcc * innerVal;
    }, 1) * outerAcc;
  }, 1);
}

function objectify (array) {
  return array.reduce(function (acc, currentVal) {
    acc[currentVal[0]] = currentVal[1];
    return acc;
  }, {});
}

function luckyNumbers (array) {
  return array.reduce(function(acc, value, index, arr) {
    return (index ===)
  })
};

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
