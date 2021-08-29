//n이 주어졌을 때, 1부터 n까지 합을 구하는 프로그램을 작성하시오.


///
const fs = require('fs'); 
const input = fs.readFileSync("/dev/stdin").toString().trim(); 
let inputNumber = Number(input) 
let answer = 0; 
for(let i = 1; i<=inputNumber; i++) { 
     answer += i 
} 
console.log(answer);





