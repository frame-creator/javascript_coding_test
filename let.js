---
function solution(s) {
    let answer = '';
    let temp = '';
    
    for (let x of s) {
        if (x === x.toLowerCase()) answer+= x;
        else temp += x;
        
    }
   answer.split('').reverse();
    if (temp.length > 0) {
        for (let y of temp) answer += y;
    }
    return answer;
}


///function solution(s) {
    let answer = s.split('').sort().reverse().join('');
    return answer;
}
