---
function solution(n) {
    let answer = 0;
    let tmp = 0;
    function isTwoDigit(m) {
      function DFS(m){
           if (m === 0) return;
           else {
               DFS(parseInt(m/2));
               tmp += String(n%2)
           }
       }
        DFS(n);
    return tmp;
    } 
    console.log(isTwoDigit(n));
    return answer;
}


///
function solution(n) {
    let answer = n+1;
    let first_num ;
    let second_num ;
    while (answer > n) {
      first_num = n.toString(2).split('').filter(x => (x === '1')).length;
      second_num = answer.toString(2).split('').filter(x => (x === '1')).length;
        if(first_num === second_num ) { 
         break;
          }
        answer++;
        
    }
    return answer;
}
