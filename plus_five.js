//동호는 내년에 초등학교를 입학한다. 그래서 동호 어머니는 수학 선행 학습을 위해 쉽게 푸는 문제를 동호에게 주었다.
//이 문제는 다음과 같다. 1을 한 번, 2를 두 번, 3을 세 번, 이런 식으로 1 2 2 3 3 3 4 4 4 4 5 .. 이러한 수열을 만들고 어느 일정한 구간을 주면 그 구간의 합을 구하는 것이다.
//하지만 동호는 현재 더 어려운 문제를 푸느라 바쁘기에 우리가 동호를 도와주자.
//첫째 줄에 구간의 시작과 끝을 나타내는 정수 A, B(1 ≤ A ≤ B ≤ 1,000)가 주어진다. 즉, 수열에서 A번째 숫자부터 B번째 숫자까지 합을 구하면 된다.
//첫 줄에 구간에 속하는 숫자의 합을 출력한다.

////
const readline = require("readline"); const rl = readline.createInterface({ input: process.stdin, output: process.stdout, }); 
let input; 
rl.on("line", function (line) { input = line .toString() .split(" ") 
  .map((el) => Number(el)); })
  .on("close", function () { 
  let arr = [0]; l
  et num = 1; 
  let count = 0; 
  while (arr.length <= input[1]) { 
    arr.push(num); count++; 
    if (count === num) {
      num++; count = 0;
    } } 
  console.log( arr.slice(input[0], input[1] + 1)
              .reduce((past, curr) => 
                      past + curr, 0) ); 
  process.exit(); 
}); 
