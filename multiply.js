/// 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.

+++
function solution(N) {
    let answer;
    DFS(m) {
        if(m === 1) {
           return 1;
           } else {
           return m * DFS(m-1);
           }
    }
    answer = DFS(N);
    return answer;
}
---
  
let input = require('fs').readFileSync('/dev/stdin').toString();
function solution(N) {
    let answer;
    DFS(m) {
        if(m === 1) {
           return 1;
           } else {
           return m * DFS(m-1);
           }
    }
    answer = DFS(N);
    return answer;
}

console.log(solution(input));

///

let input = require('fs').readFileSync('/dev/stdin').toString();


function factorial(num) {
    if (num <= 1) {
        return 1;
    }
    
    return num * factorial(num - 1);
}

console.log(factorial(input));
