//N이 주어졌을 때, 1부터 N까지의 수로 이루어진 순열을 사전순으로 출력하는 프로그램을 작성하시오.


///
const N = +require("fs").readFileSync("/dev/stdin").toString().trim();
let answer = [];
function f(nums, permutation) {
    if (nums === "") answer.push(permutation.split("").join(" "));
    else {
        for (let i=0; i<nums.length; i++) {
            f(nums.slice(0, i) + nums.slice(i+1), permutation+nums[i]);
        }
    }
}
let nums = "";
for (let i=1; i<=N; i++) nums += i;
f(nums, "");
console.log(answer.join("\n"));
