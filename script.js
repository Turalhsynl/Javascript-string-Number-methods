//Task 1

// let str = "hello";
// console.log(str[0].toUpperCase() + str.slice(1));

//Task 2
// let str = "Hello World";

// function checkSubstr(text, inputText){
//     return text.includes(inputText);
// };

// console.log(checkSubstr(str,"World"));

//Task 3
// let text = "salam"

// function repeatt(text,n){
//     return text.repeat(n);
// }

// console.log(repeatt(text,5));

//Task 4

// let str  = "Hello this is StepIT Academy";

// function replaceDemo(str,text_1,text_2){
//     return str.replaceAll(text_1,text_2);
// }

// console.log(replaceDemo(str,"Hello","Salam"));

//Task 5
// let str  = "Hello this is StepIT Academy";

// function countWord(str){
//     return str.split(" ").length
// }

// console.log(countWord(str));

//Task 6
// let text = "Hello";

// function reverseChar(text){
//     return text.split("").reverse().join("");
// }
// console.log(reverseChar(text));

//Task 7
// let text = "Hello [World]"

// function extractChars(str, start, end) {
//     const startIndex = str.indexOf(start);
//     const endIndex = str.indexOf(end, startIndex + 1);
  
//     if (startIndex !== -1 && endIndex !== -1) {
//       return str.slice(startIndex + 1, endIndex);
//     }
//     else {
//         return null;
//     }
// }

// console.log(extractChars(text,"[","]"));

//Task 8
// let text = "Hello World"

// function toSnakeCase(str) {
//     const words = str.split(" ");
//     let result = "";
  
//     for (let i = 0; i < words.length; i++) {
//       result += words[i].toLowerCase();
//       if (i < words.length - 1) {
//         result += "_";
//       }
//     }
//     return result;
// }

// console.log(toSnakeCase(text));

//Task 9
// const text = "   Hello    World   ";

// function cleanSpaces(str) {
//     const words = str.trim().split(' ');
//     let result = "";
  
//     for (let i = 0; i < words.length; i++) {
//       if (words[i] !== "") {
//         result += (result ? " " : "") + words[i];
//       }
//     }
//     return result;
// }

// console.log(cleanSpaces(text));

//Task 10
// let text = "I love programming";

// function findLongestWord(str) {
//     const words = str.split(" ");
//     let longestWord = "";
  
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > longestWord.length) {
//         longestWord = words[i];
//       }
//     }
//     return longestWord;
// }

// console.log(findLongestWord(text));



//------------------Number method tasks-----------------//

//Task 1
// let text = "123";
// let text_2 = "abc"

// function convertToNumber(str) {
//     const num = Number(str);
//     return num;
// }

// console.log(convertToNumber(text));
// console.log(convertToNumber(text_2));

//Task 2
// let number = 3.14159;

// function roundTwoDecimalPlaces(number){
//     const num = number.toFixed(2);
//     return num;
// }

// console.log(roundTwoDecimalPlaces(number));

//Task 3
// let number = 5;

// function upToSquare(number){
//     const num = number ** 2;
//     return num;
// }

// console.log(upToSquare(number));
  
//Task 4
// let str = "2.454";

// function parseToFloat(str){
//     const num = parseFloat(str);
//     return num;
// }

// console.log(parseToFloat(str));

//Task 5
// let str = "55";

// function parseToInt(str){
//     const num = parseInt(str);
//     return num;
// }

// console.log(parseToInt(str));

//Task 6
// function checkIsNaN(value) {
//     return isNaN(value);
// }

// console.log(checkIsNaN("ereferf"));
// console.log(checkIsNaN("23"));

//Task 7
// function sumOfDigits(num) {
//     const digits = num.toString().split('');
//     let sum = 0;
  
//     for (let i = 0; i < digits.length; i++) {
//       sum += Number(digits[i]);
//     }
//     return sum;
// }

// console.log(sumOfDigits(123));

//Task 8
// function countDigits(num) {
//     return num.toString().length;
// }
  
// console.log(countDigits(1234));

//Task 9
// let arr = [1, 3, "5"];

// function sumArrayItems(arr) {
//     let sum = 0;
  
//     for (let i = 0; i < arr.length; i++) {
//       sum += Number(arr[i]);
//     }
//     return sum;
// }
  
// console.log(sumArrayItems(arr));

//Task 10
// function fixNearestInt(num){
//     return Number((num).toFixed(0));
// }

// console.log(fixNearestInt(3.14));


