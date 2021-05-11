///
    function solution(s) {
    let answer = [];
    let temp = s.split(' ');
    answer.push(Math.min(...temp), Math.max(...temp));
    return answer.join(' ');
}
