---
  function solution(n,a,b) {
    let answer = 0;
while (b > a+1 || a > b+1 ) {
    if(a % 2 === 0) {
        a = a/2;
    } 
    if( b% 2 === 0 ) {
        b = b/2
    }
        if(a % 2 === 1) {
        a = a + 1/2;
    } 
    if( b% 2 === 1 ) {
        b = b + 1/2
    }
    answer++;
    
}
    return answer;
}

///
   function solution(n,a,b) {
   let answer = 1;
   while (Math.ceil(a/2) !== Math.ceil(b/2) ) {
    a = Math.ceil(a/2);
    b = Math.ceil(b/2);
    answer++;
    
}
    return answer;
}
