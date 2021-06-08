//M과 N이 주어질 때 M이상 N이하의 자연수 중 완전제곱수인 것을 모두 골라 그 합을 구하고 그 중 최솟값을 찾는 프로그램을 작성하시오. 
//예를 들어 M=60, N=100인 경우 60이상 100이하의 자연수 중 완전제곱수는 64, 81, 100 이렇게 총 3개가 있으므로 그 합은 245가 되고 이 중 최솟값은 64가 된다.


///
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const m = parseInt(input[0]);
const n = parseInt(input[1]);
const arr = [];
for (let i=Math.ceil(Math.sqrt(m)); i<= Math.floor(Math.sqrt(n)); i++) arr.push(i**2);
if (arr.length) {
    console.log(arr.reduce((acc, i) => acc + i, 0));
    console.log(arr[0]);
} else console.log(-1);
