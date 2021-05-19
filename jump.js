---
  function solution(n) {
  let answer = 0;
  let battery = 0;
   while (n !== 1)  {
    if(n % 2 === 0 ) {
       n = n/2;
   } else {
       n = n-1;
       battery++;
   }
     } 
    return battery > 0  ? battery +1 : 1  ;
}

///

function solution(n){
  let answer = 0
  let battery= 0
  while(n !== 1){
    if(n % 2 !== 0) {
      n = n-1
      battery++
    } else {
      n = n/2
    }
  }
  if(battery>0){
    answer = battery+1
  } else {
    answer = 1
  }
  return answer
}

