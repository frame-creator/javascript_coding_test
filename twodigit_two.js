//두 개의 이진수를 입력받아 이를 더하는 프로그램을 작성하시오.

///
const readline = require("readline"); const rl = readline.createInterface({ input: process.stdin, output: process.stdout, }); 
let input = []; 
rl.on("line", function (line) { input = line .toString() .split(" ") 
  .map((el) => el.split("").reverse()); })
 .on("close", function () { 
  let longNum, shortNum; 
  if (input[0].length < input[1].length) { 
    longNum = input[1]; shortNum = input[0]; 
  } else { 
    longNum = input[0]; shortNum = input[1]; } 
  let result = ""; 
  let save = 0; 
  for (let i = 0; i < longNum.length; i++) { 
    if (shortNum[i] === undefined) shortNum[i] = 0; 
    if (+longNum[i] + +shortNum[i] + save === 0) {
      result = "0" + result; save = 0; 
    } else if (+longNum[i] + +shortNum[i] + save === 1) {
      result = "1" + result; save = 0; } 
    else if (+longNum[i] + +shortNum[i] + save === 2) { 
      result = "0" + result; save = 1; } 
    else if (+longNum[i] + +shortNum[i] + save === 3) {
      result = "1" + result; save = 1; 
    } } 
  result = save === 0 
    ? result 
  : save + result; 
  let findOne = result.indexOf("1"); 
console.log(result.slice(findOne)); process.exit(); }); 
