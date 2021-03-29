function solution(s){
    var answer = true;
    let temp = 0;
    for (let x of s) {
        if (x === 'p' || x === 'P') temp++;
        else if (x == 'y' || x === 'Y') temp--;
    } 
    if (temp !== 0) answer = false;
    return answer;
}
