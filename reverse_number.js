function solution(n) {
    let answer = [];
    let temp = String(n).split('').reverse();
    for (let x of temp) answer.push(Number(x));
    return answer;
}
