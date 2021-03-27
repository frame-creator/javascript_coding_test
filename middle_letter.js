function solution(s) {
    var answer = '';
    if (s.length % 2 === 0) {
        answer+= s[s.length/2-1];
        answer+= s[s.length/2];
       } ;
    else {
        answer = s[Math.floor(s.length/2)] ;
    }
        return answer;
}

///
function solution(s) {
    let answer = '';
    let mid = Math.floor(s.length/2) ;
    if (s.length%2 === 0) 
        answer = s.substr(mid-1, 2);
       
    else 
        answer = s.substr(mid, 1);
    
        return answer;
}
