function sum (array) {
  // your code here
  return array.reduce((previous, current) => {
    return previous + current;
  });
};

function productAll (array) {
  return array.reduce(function (outerAcc, outerValue) {
    return outerValue.reduce(function (innerAcc, innerVal) {
      return innerAcc * innerVal;
    }, 1) * outerAcc;
  }, 1);
}

function objectify (array) {
  return array.reduce(function (accumulator, currentVal) {
    accumulator[currentVal[0]] = currentVal[1];
    return accumulator;
  }, {});
}

// function objectify (array) {
//   return array.reduce((a, b) => (a[b[0]] = b[1]) && a, {});
// }

function luckyNumbers (array) {
  return array.reduce((a, b, i) => i === array.length - 1 ? `${a} and ${b}` : `${a} ${b}, `, 'Your lucky numbers are:');
}

// function luckyNumbers (array) {
//   return array.reduce(function(acc, value, index, arr) {
//     return (index ===)
//   })
// };

module.exports = {
  sum: sum,
  productAll: productAll,
  objectify: objectify,
  luckyNumbers: luckyNumbers
};
