+++
 function solution(s) {
    let answer = 0;
    let temp = 0;
    for (let i = 0; i<s.length; i++) {
        if(s[i] === 'O'){
            if(i === 0 ) {
                answer++;
            } else {
                if(s[i-1]=== '0') {
                    temp++;
                    answer += temp;
                } 
            }
        } 
    }
    return answer;
}

////
  let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let number = Number(input[0]);

for (let i = 1; i <= number; i++) {
  let count = 0;
  let sum = 0;

  for(let j = 0; j < input[i].length; j++) {
    if (input[i][j] === 'O') {
      count++;
    } else {
      count = 0;
    }
    sum += count;
  }
  console.log(sum);
}
