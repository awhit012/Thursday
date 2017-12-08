// Verbal Questions
// 2. parameter is a type of variable that a function takes in and is how the input is represented in the fuction, while argument is an input that is provided when calling a function
// 3.return statements specify the output of a function with the return statment and a return value of a function can be used to pass as data, while a console.log can not be used to pass as data.
//Palindrome
// const checkPalindrome = (myString) => {
//   const upperCase= myString.toUpperCase();
//   const reverseString = upperCase.split('').reverse().join('');
//   if (upperCase === reverseString) {
//     console.log('true')
//   } else {
//       console.log('false');
//   }
// }

//**Digit Sum**
//   const sumDigits = (number) => {
//   const str = number.toString();
//   const sum = 0;
//
//   for (const i = 0; i < str.length; i++) {
//   }
// }

// Pythagoras
// const calculateSide = (sideA, sideB) => {
//   return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2))
// }
//
// console.log(calculateSide(10, 10));

// Sum Array
// const sumArray = (array) => {
//   for (i = 0; i < array.length; i++) {
//     array.reduce(function(prev, cur)) {
//         return prev + cur;
//     }
//   }
// }
//
// console.log(sumArray([1, 2, 3, 4, 5, 6]));
//
// Prime Numbers
const checkPrime = (num) => {
    for(let i = 2, r = Math.sqrt(num); i <= r; i++)
        if(num % i === 0) console.log(false);
    console.log(num !== 1);
}

const printPrimes = (num) => {
    for (let num = 1; num <= 101; num++)
      if(checkPrime(num) == true) {
        console.log(num);
      }
}

console.log(checkPrime(11));
console.log(printPrimes(11));

//Insert Dash
