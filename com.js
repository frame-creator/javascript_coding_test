//재용이는 최신 컴퓨터 10대를 가지고 있다. 어느 날 재용이는 많은 데이터를 처리해야 될 일이 생겨서 각 컴퓨터에 1번부터 10번까지의 번호를 부여하고, 
//10대의 컴퓨터가 다음과 같은 방법으로 데이터들을 처리하기로 하였다.
//1번 데이터는 1번 컴퓨터, 2번 데이터는 2번 컴퓨터, 3번 데이터는 3번 컴퓨터, ... ,
//10번 데이터는 10번 컴퓨터, 11번 데이터는 1번 컴퓨터, 12번 데이터는 2번 컴퓨터, ...
//총 데이터의 개수는 항상 a의 b승 개의 형태로 주어진다. 재용이는 문득 마지막 데이터가 처리될 컴퓨터의 번호가 궁금해졌다. 이를 수행해주는 프로그램을 작성하라.

///
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin")
	.toString()
	.trim()
	.split("\n")
	.map((el) => el.split(" ").map((el) => Number(el)));
input.shift();
let result = [];

for (let i = 0; i < input.length; i++) {
	let rotationNum = [];
	let startNum = 1;
	while (true) {
		let value = String(Number(input[i][0]) ** startNum);
		if (rotationNum.includes(value[value.length - 1])) break;
		rotationNum.push(value[value.length - 1]);
    startNum++;
	}
	if (input[i][1] % rotationNum.length === 0) {
    if(rotationNum[rotationNum.length - 1] === '0') result.push('10');
    else result.push(rotationNum[rotationNum.length - 1]);
  }
	else {
    result.push(rotationNum[(input[i][1] % rotationNum.length) - 1]);
  }
}

console.log(result.join('\n'));
