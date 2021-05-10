---
function solution(progresses, speeds) {
    let answer = [];
    let n = progresses.length;
    
    let tp;
    while (n === 0) {
        
          progresses.push(progresses.shift() +speeds[i]);
          if(progresses.shift() >=100 ) tp++;
    }
     answer.push(tp);
    tp = 0;
    return answer;
}


