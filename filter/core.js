// Teddi's code below

// function onlyEven (array) {
//   return array.filter(function(element) {
//     return element%2 === 0;
//   });
// }


function onlyEven (array) {
  return array.filter(e => e % 2 === 0);
};

// ---

//Matt's way below

function onlyOneWord (array) {
  return array.filter((e) => {
    return e.indexOf(' ') === -1;
  })
};

//Jodie's way below

// function onlyOneWord (array) {
//   return array.filter((phrase) => {
//     if (!phrase.match(/[^a-z]/i)) {
//       return phrase;
//     }
//   })
// }

//Sean's way below

// function onlyOneWord (array) {
//   return array.filter(e => e.indexOf(' ') < 0);
// }

// ---

// function positiveRowsOnly (array) {
//   return array.filter(checkElementsForNegativeNumbers);
//
//   function checkElementsForNegativeNumbers(e) {
//     for (var i = 0; i < e.length; i++) {
//       if (e[i] < 0) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

//Adam's code below

function positiveRowsOnly (array) {
  return array.filter((innerArray) => {
    return innerArray.every((number) => {
      return number >= 0;
    })
  })
}

function allSameVowels (array) {
  return array.filter(checkStringForDuplicateVowels);

// ---

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
}

//Brennen's code below

// function allSameVowels (array) {
//   return array.filter((e) => {
//     let array = e.split('');
//     let vowel;
//
//     for (let i=0; i<array.length; i++) {
//       if (array[i].match(/[aeiou]/)) {
//         if (val === undefined) {
//           vowel = array[i];
//         } else if (vowel !== array[i]) {
//           return false;
//         }
//       }
//     }
//     return true;
//   });
// }

//Matt's code below

// function allSameVowels (array) {
//   return array.filter((word) => {
//     let vowels = word.split('').filter(letter => letter.match(/[aeiou]/gi));
//     return vowels.every((vowel) => vowel === vowels[0]);
//   })
// }


module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  allSameVowels: allSameVowels
};
