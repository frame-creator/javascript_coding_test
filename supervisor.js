// 총 N개의 시험장이 있고, 각각의 시험장마다 응시자들이 있다. i번 시험장에 있는 응시자의 수는 Ai명이다.
// 감독관은 총감독관과 부감독관으로 두 종류가 있다. 총감독관은 한 시험장에서 감시할 수 있는 응시자의 수가 B명이고, 부감독관은 한 시험장에서 감시할 수 있는 응시자의 수가 C명이다.
// 각각의 시험장에 총감독관은 오직 1명만 있어야 하고, 부감독관은 여러 명 있어도 된다.
// 각 시험장마다 응시생들을 모두 감시해야 한다. 이때, 필요한 감독관 수의 최솟값을 구하는 프로그램을 작성하시오.



///
const input = require("fs").readFileSync("/dev/stdin").toString().split(/\s/).map(i => parseInt(i));
const n = input[0];
const a = input.slice(1, n+1);
const b = input[n+1];
const c = input[n+2];
let count = 0;
for (let i=0; i<n; i++) {
    if (a[i] <= b) count++;
    else count += Math.floor((a[i]-b)/c) + ((a[i]-b) % c ? 2 : 1);
}
console.log(count);
