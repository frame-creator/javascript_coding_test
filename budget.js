function solution(d, budget) {
    let answer = 0;
    let m= d.sort((a,b) => a-b);
        for(let x of m) {
        budget -= x;
        if(budget >= 0) answer++;
            }
    return answer;
}
