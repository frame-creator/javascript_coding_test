---
function solution(s) {
    let answer = '';
    
    for (let i = 0; i< s.length; i++) {
        if(s[i] === ' ') {
           
            answer += ' ';
                 }
        else {
        if(i%2 === 1) {
            answer += s[i].toLowerCase();
           }        
        if(i%2 === 0) {
            answer += s[i].toUpperCase();
             }
          
        }
    }        
     return answer;
}

////
function solution(s) {
    let answer = '';
    let index = 0;
    for (let i = 0; i< s.length; i++) {
        if(s[i] === ' ') {
            index= 0;
            answer += ' ';
                 }
        else {
        if(index%2 === 1) {
            answer += s[i].toLowerCase();
           }        
        if(index %2 === 0) {
            answer += s[i].toUpperCase();
             }
            index++;
        }
    }        
     return answer;
}

+++
function solution(s) {
  s.split(" ")
    .map((i) =>
      i
        .split("")
        .map((c, i) => (i % 2 ? c.toLowerCase() : c.toUpperCase()))
        .join("")
    )
    .join(" ");
}

+++
function solution(s) {
    let index = 0
    let result = ""
    for(let i = 0; i < s.length; i++){
        if(s[i] === " ") {
            index = 0
            result += " "
        }
        else {
            result += index % 2 ? s[i].toLowerCase() : s[i].toUpperCase()
            index++    
        }

    }
    return result
}
