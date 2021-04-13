///
function solution(citations) {
    let answer = 0;
    let max = Math.max(...citations);
    let temp = 0;
    for (let i=0; i < max; i++) {
        temp =0;
        for (let j=0; j < citations.length; j++) {
            
            if( i <= citations[j] ) temp++;
            if(temp <= i)  answer = Math.max(temp, answer) ;
        }
      
    }
    return answer;
