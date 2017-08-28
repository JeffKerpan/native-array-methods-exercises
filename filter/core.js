function onlyEven (array) {
  return array.filter(function(element) {
    return element%2 === 0;
  });
}
// Teddi's code above

function onlyOneWord (array) {
  return array.filter(e => e % 2 === 0);
}

function positiveRowsOnly (array) {
  return array.filter(checkElementsForNegativeNumbers);

  function checkElementsForNegativeNumbers(e) {
    for (var i = 0; i < e.length; i++) {
      if (e[i] < 0) {
        return false;
      }
    }
    return true;
  }
}

function allSameVowels (array) {
  return array.filter(checkStringForDuplicateVowels);

  function checkStringForDuplicateVowels(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let found = '';

    for (var i = 0; i <str.length; i++) {
      if(vowels.indexOf(str[i]) !== -1) {
        if (found ===str[i] || found === '') {
          found = str[i];
        } else {
          return false;
        }
      }
    }
    return true;
  }


module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
