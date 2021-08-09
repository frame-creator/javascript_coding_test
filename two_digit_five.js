//2진수가 주어졌을 때, 8진수로 변환하는 프로그램을 작성하시오.

///
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = "";
rl.on("line", function (line) {
	input = line.toString();
}).on("close", function () {
	let result = "";

let start = input.length - 3;
let mid = input.length - 2;
let end = input.length - 1;

while (true) {
	result =
		String(
			Number(!input[start] ? 0 : input[start]) * 4 +
				Number(!input[mid] ? 0 : input[mid]) * 2 +
				Number(!input[end] ? 0 : input[end])
		) + result;
	start -= 3;
	mid -= 3;
	end -= 3;
	if (start < 0 && mid < 0 && end < 0) break;
}

console.log(result);
	process.exit();
});
 

