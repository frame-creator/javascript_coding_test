//에라토스테네스의 체는 N보다 작거나 같은 모든 소수를 찾는 유명한 알고리즘이다.
//이 알고리즘은 다음과 같다.
//2부터 N까지 모든 정수를 적는다.
//아직 지우지 않은 수 중 가장 작은 수를 찾는다. 이것을 P라고 하고, 이 수는 소수이다.
//P를 지우고, 아직 지우지 않은 P의 배수를 크기 순서대로 지운다.
//아직 모든 수를 지우지 않았다면, 다시 2번 단계로 간다.
//N, K가 주어졌을 때, K번째 지우는 수를 구하는 프로그램을 작성하시오.


///
const [n, k] = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(v => +v);
const arr = [];
for (let i=2; i<=n; i++) arr.push(i);
let count = 0;
let prime;
let nth;
while (count < k) {
    prime = arr[0];
    arr.some(v => {
        if (v % prime === 0) {
            arr.splice(arr.indexOf(v), 1);
            nth = v
            count++;
        }
        if (count === k) return true;
    });
}
console.log(nth);
