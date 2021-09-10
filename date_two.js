//홍익대학교는 1946년에 개교하였다.
//특정 년도가 주어졌을 때, 그 해가 개교 몇 주년인지 출력하라.
//단, 홍익대학교는 없어지지 않는다고 가정한다.



///
const fs = require('fs'); 
const input = fs.readFileSync("/dev/stdin").toString().trim(); 
const schoolBirthday = 1946; 
console.log(Number(input) - schoolBirthday);

