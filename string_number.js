function solution(s) {
    let answer = true;
    for (let x of s) {
     if (isNaN(x)) answer =false;
    }
     if (s.length !== 4 && s.length !== 6) {
         let answer = false;   
     }
    
    return answer;
}
