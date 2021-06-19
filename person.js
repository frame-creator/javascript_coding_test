//듣도 못한 사람의 명단과, 보도 못한 사람의 명단이 주어질 때, 듣도 보도 못한 사람의 명단을 구하는 프로그램을 작성하시오.
//첫째 줄에 듣도 못한 사람의 수 N, 보도 못한 사람의 수 M이 주어진다. 
// 이어서 둘째 줄부터 N개의 줄에 걸쳐 듣도 못한 사람의 이름과, N+2째 줄부터 보도 못한 사람의 이름이 순서대로 주어진다. 
//이름은 띄어쓰기 없이 영어 소문자로만 이루어지며, 그 길이는 20 이하이다. N, M은 500,000 이하의 자연수이다.
//듣도 못한 사람의 명단에는 중복되는 이름이 없으며, 보도 못한 사람의 명단도 마찬가지이다.


///
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
const n = +input[0];
const m = +input[1];
const n_arr = input.slice(2, n+2);
const m_arr = input.slice(n+2);

function binary_search(arr, name) {
    let high = arr.length-1;
    let low = 0;
    let mid;

    while (low <= high) {
        mid = Math.floor((high + low)/2);
        if (arr[mid] > name) high = mid - 1;
        else if (arr[mid] < name) low = mid + 1;
        else return true;
    }
    return false;
}
const [long, short] = n_arr.length > m_arr.length ? [n_arr, m_arr] : [m_arr, n_arr];
long.sort();
const dbj = short.filter(name => binary_search(long, name));

console.log(dbj.length+"\n"+dbj.sort().join("\n"));

