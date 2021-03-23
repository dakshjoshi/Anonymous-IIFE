// Do the below programs in anonymous function and IIFE

// PRINT ODD NUMBERS IN AN ARRAY
var num = [100, 101, 102, 103, 104, 105, 106, 107, 108];
//console.log(typeof (num[1]));

//Ananymous
var oddPrinter = () => {
  let a = num.filter((b) => b % 2 != 0);
  console.log(a);
};

oddPrinter();

//IIFE
(function OddPrinterIIFE() {
  let a = num.filter((b) => b % 2 != 0);
  console.log(a);
})();

// Convert all the strings to title caps in a string array

//Anonymous
var stringAlpha = [`Apple`, `Rhino`, `Pikachu`, `Alaadin`];

var toLittleCaps = () => {
  let a = stringAlpha.map((b) => b.toLowerCase());
  console.log(a);
};

toLittleCaps();

//IIFE
(function toLittleCaps2() {
  let a = [];
  for (i = 0; i < stringAlpha.length; i++) {
    //console.log(stringAlpha[i])
    a.push(stringAlpha[i].toLowerCase());
  }
  console.log(a);
})();

// Sum of all numbers in an array
//Anonymous
let nums = [1, 2, 3, 4, 5, 6];

var sum = () => {
  let soom = nums.reduce((a, b) => {
    return b + a;
  }, 0);

  console.log(soom);
};

sum();

(function summation() {
  var a2 = 0;
  for (i = 0; i < nums.length; i++) {
    a2 = a2 + nums[i];
  }
  console.log(a2);
})();

// Return all the prime numbers in an array
var Nums2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 15, 17, 19, 25];
//Anonymous
var primeSelector = () => {
  var PrimeNums = [];
  for (i = 0; i < Nums2.length; i++) {
    for (j = 2; j < +Nums2[i]; j++) {
      if (
        Nums2[i] != 0 &&
        Nums2[i] != 1 &&
        Nums2[i] % 2 != 0 &&
        Nums2[i] % j != 0 &&
        Nums2[i] % Math.pow(Nums2[i], 1 / 2) != 0
      ) {
        //|| Nums2[i] == 0 || Nums2[i] == 1
        PrimeNums.push(Nums2[i]);
        break;
      }
    }
  }
  console.log(PrimeNums);
};
primeSelector();

//IIFE
(function PrimeFinder() {
  var PrimeNums = [];
  for (i = 0; i < Nums2.length; i++) {
    for (j = 2; j < +Nums2[i]; j++) {
      if (
        Nums2[i] != 0 &&
        Nums2[i] != 1 &&
        Nums2[i] % 2 != 0 &&
        Nums2[i] % j != 0 &&
        Nums2[i] % Math.pow(Nums2[i], 1 / 2) != 0
      ) {
        //|| Nums2[i] == 0 || Nums2[i] == 1
        PrimeNums.push(Nums2[i]);
        break;
      }
    }
  }
  console.log(PrimeNums);
})();

// Return all the palindromes in an array
var words = [`YoYo`, `Yaho`, `palilap`, `CompmoC`, `Dank`];
//Anonymous
var PalindromeReturner = () => {
  var Nonpalindromes = [];
  for (i = 0; i < words.length; i++) {
    for (j = 0; j < words[i].length; j++) {
      //console.log(words[i][j], words[i][words[i].length - j - 1])
      if (words[i][j] == words[i][words[i].length - j - 1]) {
        Nonpalindromes.push(words[i]);
        break;
      }
    }
  }
  console.log(Nonpalindromes);
};

//FILTER
// var result = arr.filter((e,i)=>{
//     if(i%2 ==0)
//     return true;
// })
// console.log(result);

PalindromeReturner();

//IIFE
(function PalindromeReturner() {
  var Nonpalindromes = [];
  for (i = 0; i < words.length; i++) {
    for (j = 0; j < words[i].length; j++) {
      ///console.log(words[i][j], words[i][words[i].length - j - 1])
      if (words[i][j] == words[i][words[i].length - j - 1]) {
        Nonpalindromes.push(words[i]);
        break;
      }
    }
  }
  console.log(Nonpalindromes);
})();

// Return median of two sorted arrays of same size
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [11, 22, 3, 4, 5];

//Anonymous
var median = () => {
  var arr3 = [...arr1, ...arr2];
  // ... is a spread operator, it speards the array where ... is mentioned, can be used in both arrays and objects
  var trueArray = arr3.sort(function (a, b) {
    return a - b;
  });
  console.log(
    (trueArray[trueArray.length / 2 - 1] + trueArray[trueArray.length / 2]) / 2
  );
};
median();

(function medianFinder() {
  var arr3 = [...arr1, ...arr2];
  // ... is a spread operator, it speards the array where ... is mentioned, can be used in both arrays and objects
  var trueArray = arr3.sort(function (a, b) {
    return a - b;
  });
  console.log(
    (trueArray[trueArray.length / 2 - 1] + trueArray[trueArray.length / 2]) / 2
  );
})();

// Remove duplicates from an array
var duplicateS = [0, 101, 55, 55, 99, 99, 7, 8, 7, 101];

//anonymous

var duplicateRemover = () => {
  var a = duplicateS.filter((b, i) => {
    return duplicateS.indexOf(b) == i;
  });
  console.log(a);
};
duplicateRemover();

//IIFE
(function uniqueProducer() {
  var a = duplicateS.filter((b, i) => {
    return duplicateS.indexOf(b) == i;
  });
  console.log(a);
})();

// Rotate an array by k times and return the rotated array

// Anonymous

var yarra = [`h`, `e`, `l`, `l`, `o`, `o`];
var k = 3;
// console.log(
//   `array to be rotated=`,
//   yarra,
//   `and the value by which it is supposed to be rotated is 3, but it can be changed to 4,5,6,7 or whatever, the code is dynamic`
// );

var rotate = () => {
  for (i = 0; i < k; i++) {
    yarra = [yarra.pop(), ...yarra];
  }
  console.log(yarra);
};
rotate();

//IIFE
var yarra2 = [`h`, `e`, `l`, `l`, `o`, `o`];
(function rotater() {
  for (i = 0; i < k; i++) {
    yarra2 = [yarra2.pop(), ...yarra2];
  }
  console.log(yarra2);
})();
