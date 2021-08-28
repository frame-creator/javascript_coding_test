//Byteland Airlines recently extended their aircraft fleet with a new model of a plane. 
//The new acquisition has n1 rows of seats in the business class and n2 rows in the economic class. 
//In the business class each row contains k1 seats, while each row in the economic class has k2 seats.
//Write a program which:
//reads information about available seats in the plane,
//calculates the sum of all seats available in that plane,
//writes the result.
//In the first and only line of the standard input there are four integers n1, k1, n2 and k2 (1 ≤ n1, k1, n2, k2 ≤ 1 000), separated by single spaces.


///
const fs = require('fs');
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(i => Number(i)); 
let n1 = input[0] 
let k1 = input[1] 
let n2 = input[2] 
let k2 = input[3] 
console.log((n1*k1)+(n2*k2));




