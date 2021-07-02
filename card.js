//준규는 숫자 카드 N장을 가지고 있다. 숫자 카드에는 정수가 하나 적혀있는데, 적혀있는 수는 -262보다 크거나 같고, 262보다 작거나 같다.
//준규가 가지고 있는 카드가 주어졌을 때, 가장 많이 가지고 있는 정수를 구하는 프로그램을 작성하시오. 만약, 가장 많이 가지고 있는 정수가 여러 가지라면, 작은 것을 출력한다.




///
const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function mergeSort(arr) {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length/2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));

    let i = 0; let j = 0;
    const sorted = [];

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sorted.push(left[i]);
            i++;
        }
        else {
            sorted.push(right[j]);
            j++;
        }
    }

    if (i < left.length) sorted.push(...left.slice(i));
    if (j < right.length) sorted.push(...right.slice(j));

    return sorted;
}

const sorted_arr = mergeSort(arr.map(v => BigInt(v)));
let maxCount = 0;
let curCount = 0;
let prevNumber = "";
let largest = 2**62;
sorted_arr.forEach(v => {
    if (prevNumber !== v) {
        prevNumber = v;
        curCount = 0;
    }
    curCount++;
    if ((curCount > maxCount) || (curCount === maxCount && largest > v)) {
        maxCount = curCount;
        largest = v;
    }
});
console.log(String(largest));
