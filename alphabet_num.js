//알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 단, 대문자와 소문자를 구분하지 않는다.
//첫째 줄에 이 단어에서 가장 많이 사용된 알파벳을 대문자로 출력한다. 단, 가장 많이 사용된 알파벳이 여러 개 존재하는 경우에는 ?를 출력한다.


///
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().toLowerCase().split("");
let alpha = input.filter((el, idx) => input.indexOf(el) === idx);
let count = new Array(alpha.length).fill(0);

for (let i = 0; i < input.length; i++) {
	count[alpha.indexOf(input[i])]++;
}

let max = count[0];

for (let j = 1; j < count.length; j++) {
	if (max < count[j]) max = count[j];
}

if (count.filter((el) => el === max).length > 1) console.log("?");
else {
	console.log(alpha[count.indexOf(max)].toUpperCase());
