//N개의 수로 된 수열 A[1], A[2], …, A[N] 이 있다. 이 수열의 i번째 수부터 j번째 수까지의 합 A[i] + A[i+1] + … + A[j-1] + A[j]가 M이 되는 경우의 수를 구하는 프로그램을 작성하시오.


///
const [N, M, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/).map(v => +v);
let count = 0;
for (let i=0; i<N; i++) {
    let sum = arr[i];
    let idx = i;
    while (sum < M && idx < N-1) {
        idx++;
        sum += arr[idx];
    }
    if (sum === M) count++;
}
console.log(count);
