//(A+B)%C는 ((A%C) + (B%C))%C 와 같을까?
//(A×B)%C는 ((A%C) × (B%C))%C 와 같을까?
//세 수 A, B, C가 주어졌을 때, 위의 네 가지 값을 구하는 프로그램을 작성하시오.



///
const fs = require('fs'); 
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(Number); 
const first = (input[0] + input[1]) % input[2]; 
const second = ((input[0] % input[2]) + (input[1] % input[2])) % input[2]; 
const third = (input[0] * input[1]) % input[2]; 
const fourth = ((input[0] % input[2]) * (input[1] % input[2])) % input[2]; 
console.log(`${first}\n${second}\n${third}\n${fourth}`);







