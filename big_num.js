---
function solution(numbers) {
    let answer = 0;
    let ch = Array.from({length: numbers.length}, ()=>0);
    let temp = Array.from({length: numbers.length}, ()=>0);
    function Recursion(L, n) {
         if(L === n.length) {
             answer= Math.max(answer, Number(temp.slice().join('')))
            } 
         else {
            for (let i=0 ; i<n.length; i++){
                if(ch[i] === 0) {
                    ch[i]=1;
                    temp[L] = String(n[i]);
                    Recursion(L+1, n);
                    ch[i]=0;
                }
            }           
        }        
    }
    Recursion(0 , numbers)
    return String(answer);
}

///
function solution(numbers) {
    let answer ;
    answer = numbers.map(e => String(e)).sort((x, y) => (y+x) - (x+y)).join('');
    if(answer[0] === '0') answer = answer[0];
    return answer;
}
