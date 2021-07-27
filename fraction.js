// 1/1 -> 1/2 -> 2/1 -> 3/1 -> 2/2 -> … 과 같은 지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.
//X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.
//첫째 줄에 X(1 ≤ X ≤ 10,000,000)가 주어진다.
//첫째 줄에 분수를 출력한다.

///
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let number = Number(input);
let value = 1;
while (true) {
	number -= value;
	if (number <= 0) {
		number += value;
		break;
	}
	value++;
}

if (value % 2 === 1) {
	console.log(`${value - (number - 1)}/${1 + (number - 1)}`);
} else {
	console.log(`${1 + (number - 1)}/${value - (number - 1)}`);
