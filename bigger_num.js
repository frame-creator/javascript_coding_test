----
function solution(number, k) {
    let answer = 0;
    let temp = Array.from({length: k});
    let result
    function DFS (L, arr, n) {
        if(L === n) {
            temp = temp.slice();
            for(let j =0; j<temp.length; j++){
             result= number.split('').splice(temp[j], 1);
            }
            answer = Math.max(answer, Number(result.join('')));
            answer = String(answer);
        }
        else {
            for (let i = 0 ; i< arr.length; i++) {
               temp[L] = i;
               DFS(L+1, i+1);
            }
            
        }
        
    }
    DFS (0, number, k);
    return answer;
}

///
function solution(number, k) {
    let answer = 0;
    let temp = [];
    for (let i = 0 ; i< number.length; i++) {
      while(k >0 && temp[temp.length-1] < number[i] ) {
          temp.pop();
          k--;
      } 
        temp.push(number[i]);
           
      }
    if(k> 0) temp.splice(temp.length -k, k);
    answer = temp.join('');
    return answer;
}
