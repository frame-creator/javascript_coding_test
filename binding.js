///
function solution(s){
    let answer = true;
    let arr = [] ;
    for (let e of s) {
     if (e === '(') {
        arr.push(e);
     }
    else {
        if(arr.length === 0) return false;
        arr.pop();
    }
    }
    if(arr.length > 0) return false;
     return answer;
}
