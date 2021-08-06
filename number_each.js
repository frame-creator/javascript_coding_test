//두 정수 A와 B가 주어졌을 때, A와 B를 비교하는 프로그램을 작성하시오.
//첫째 줄에 다음 세 가지 중 하나를 출력한다.
//A가 B보다 큰 경우에는 '>'를 출력한다.
//A가 B보다 작은 경우에는 '<'를 출력한다.
//A와 B가 같은 경우에는 '=='를 출력한다.

////
let fs = require("fs"); 
let input = fs.readFileSync("/dev/stdin").toString().split(" "); 
let a = parseInt(input[0]); 
let b = parseInt(input[1]); 
function solution () {
  if(a < b) console.log('<'); 
  else if(a > b)
    console.log('>'); 
  else console.log('=='); 
} 
solution();
