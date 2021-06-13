//숫자 카드는 정수 하나가 적혀져 있는 카드이다. 상근이는 숫자 카드 N개를 가지고 있다. 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 몇 개 가지고 있는지 구하는 프로그램을 작성하시오.

///
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
const n = parseInt(input[0]);
const n_arr = input.slice(1, n+1);
const [m, ...m_arr] = input.slice(n+1);

const myMap = new Map();
n_arr.forEach(v => {
    if (myMap.has(v)) myMap.set(v, myMap.get(v)+1);
    else myMap.set(v, 1);
});

const answer = [];
m_arr.forEach(v => answer.push(myMap.get(v)||0));
console.log(answer.join(" "));
