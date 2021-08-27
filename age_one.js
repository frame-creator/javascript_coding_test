//You know a family with three children. Their ages form an arithmetic sequence: 
//the difference in ages between the middle child and youngest child is the same as the difference in ages 
//between the oldest child and the middle child. For example, their ages could be 5, 10 and 15, 
//since both adjacent pairs have a difference of 5 years.
//Given the ages of the youngest and middle children, what is the age of the oldest child?


///
const fs = require('fs'); 
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(i => Number(i)); 
let input1 = input[0] 
let input2 = input[1] 
console.log(input2+(input2-input1));






