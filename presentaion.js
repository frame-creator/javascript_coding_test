///
function solution(n) {
    let answer = 0;
    let temp = Array.from({length:n}, (v, i)=> i+1);
    let rt = 0; 
    let sum =0;
    let lt = 0;
    for (let rt=0; rt<n; rt++) {
        sum+= temp[rt];
        if(sum === n) answer++;
        while(sum >= n) {
         sum -= temp[lt++];
        if (sum === n) answer++;
        } 
        }
    
    return answer;
}
