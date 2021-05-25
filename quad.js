///
function solution(arr) {
    const answer = [0, 0];
    let len = arr.length;

    while (len >= 2) {
        let tmp = [];
        for (let i = 0; i < arr.length; i += len) {
            for (let j = 0; j < arr[i].length; j += len) {
                let result = arr.slice(i, i + len).map(e => e.slice(j, j + len));
                let sum = result.flatMap(e => e).reduce((a, b) => a + b);
                sum % (len * len) === 0 ? answer[sum / (len * len)]++ : tmp.push(result);
            }
        }
        arr = tmp.flatMap(e => e);
        len /= 2;
    }

    arr.flatMap(e => e).forEach(e => answer[e]++);
    return answer;
}
