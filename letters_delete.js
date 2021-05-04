---
function solution(s)
{
    let answer = 0;
    while (s.length > 1) {
      for(let i = 0; i<s.length; i++) {
              if(s[i] === s[i +1]) s.split('').splice(i, 2);
             }
    }
          if(s.length=== 0) answer = 1; 
     
    return answer;
}

/// 

function solution(s) {
    let answer = 0;
    let arr = [];
     for (let i = 0; i <s.length; i++) {
         if(arr.length === 0 || arr[arr.length - 1] !== s[i] ) {
             arr.push(s[i]);
         }
         else if (s[i] === arr[arr.length-1] )  {
             arr.pop();
         }
     }
    if(arr.length === 0) answer = 1; 
    return answer;
}
