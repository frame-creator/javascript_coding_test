///
function solution(num) {
    let answer = 0 ;
    let stop ;
    function Recursion(L, n) {
     if(stop) return;
     if(n === 1) { 
       answer = L ;
       stop = 1;
     }
     if (L> 500) answer = -1;
        
      else {
            if(n % 2 === 0) Recursion(L+1, n/2 );
            if(n % 2 === 1) Recursion(L+1, n*3+1) ;
       }
    }
    Recursion(0, num);
    return answer;
        }
