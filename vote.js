function solution(s) {
    let answer = 0;
    let arr = new Map();
    for (let x of arr) {
    if (arr.has(x)) arr.set(x, arr.get(x)+1);
      else arr.set (x, 1);
    }
     let max = Number.MIN_SAFE_INTIGER 
     for (let [key, val] of arr) {
       if (val > max) {
        max=val ;
        answer = key;
       }
    }
  
  
    return answer;
}

let s = "BADDCCCBBBAAAAA"
