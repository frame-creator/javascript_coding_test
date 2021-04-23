---
function solution(s, n) {
    let answer = '';
   let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let x of s.replace(/(\s*)/, "")) {
       console.log(s.replace(/(\s*)/, "").join(''));
        if(x.toUpperCase() === x) {
             answer += letters[letters.indexOf(x) + n] ;
                 }
       if(x.toUpperCase() !== x && x !== ' ') answer += letters[letters.indexOf(x) + n ].toLowerCase() ;
        }
     return answer;
}

///
function solution(s, n) {
    let answer = '';
 
   let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   let small_letters = 'abcdefghijklmnopqrstuvwxyz';
    for (let x of s) {
        if (x === " ") {
            answer += " ";
            continue;
        }
        if(x.toUpperCase() === x) {
            
         answer += letters[letters.indexOf(x) + n >= letters.length ? letters.indexOf(x) + n - letters.length : letters.indexOf(x) + n ] ;
                                    
        }
       if(x.toLowerCase() === x ) answer += small_letters[small_letters.indexOf(x) + n >= small_letters.length ? small_letters.indexOf(x) + n - small_letters.length : small_letters.indexOf(x) + n ] ;
        
    }
   
    return answer;
}

