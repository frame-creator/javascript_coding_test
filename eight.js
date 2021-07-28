//8진수가 주어졌을 때, 2진수로 변환하는 프로그램을 작성하시오.

///
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim();
let result = [];

for (let i = 0; i < input.length; i++) {
	let number = Number(input[i]);
	let changeTwo = number.toString(2);
	if (i !== 0) {
		if (changeTwo.length < 3) {
			changeTwo = "0".repeat(3 - changeTwo.length) + changeTwo;
			result.push(changeTwo);
		}
		else {
			result.push(changeTwo);
		}
	}
	else {
		result.push(changeTwo);
	}
}

console.log(result.join(''));
