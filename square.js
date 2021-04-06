///
function solution(n) {
    let answer = -1;
    if (Math.sqrt(n)*10 % 10 === 0) answer = (Math.sqrt(n) + 1) *  (Math.sqrt(n) + 1)
    return answer;
}
