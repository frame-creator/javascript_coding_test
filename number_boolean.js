function solution(x) {
    let answer = false;
    let st = String(x).split('');
    let sum = 0;
    for (let y of st) sum+= Number(y);
   if (x % sum === 0) answer = true;
    return answer;
}
