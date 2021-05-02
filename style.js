---
  
function solution(clothes) {
    let answer = 0;
    let temp = 1;
    let sum_arr = new Map();
    for (let [key, value] of clothes) {
        if (sum_arr.has(key)) sum_arr.set(key, clothes.get[key] + 1);
        else sum_arr.set(key, 1);
    }
   for (let [key, value] of sum_arr) {
       temp  *= value+1; 
   } 
    answer = temp-1;
    
    return answer;
}


---
   function solution(clothes) {
    let answer = 1;
    let sum_arr = new Map();
    for (let [a, b] of clothes) {
        if (sum_arr.has(b)) sum_arr.set(b, sum_arr.get[b] + 1);
        else sum_arr.set(b, 1);
    }
   for (let [key, val] of sum_arr) {
       answer *= (val+1); 
   }     
    return answer - 1 ;
}

+++
  
function solution(clothes) {
    let key = new Map()
    for(let i = 0 ; i < clothes.length ; i ++){
        if(key.has(clothes[i][1])){
            key.set(clothes[i][1], key.get(clothes[i][1])+1)
        }else{
            key.set(clothes[i][1],1)
        }
    }
    let answer = 1
    for(let a of key.values()){
        answer *= (a+1)
    }


    return answer-1
  
  
  +++
 
function solution(clothes) {
    const map = new Map();
    let count = 1;

    for(let [c,t] of clothes){
        if(map.has(t)) map.set(t, map.get(t)+1);
        else map.set(t, 1);
    }

    for(let x of map.values()) count*=(x+1);
    return count-1;

}
  
  ///
  function solution(clothes) {
    let answer = 1;
    let temp = [];
    let arr = new Map();
    for (let i =0 ; i< clothes.length; i++) {
        if (arr.has(clothes[i][1])) arr.set(clothes[i][1], arr.get(clothes[i][1]) + 1);
        else arr.set(clothes[i][1], 1); 
    }
   console.log(arr);
   for (let [key, val] of arr) {
       temp.push(val + 1); 
   } 
    for (let x of temp) {
       answer *= x
   } 
    return answer -1 ;
}
  
///final
  function solution(clothes) {
    let answer = 1;
    let arr = new Map();
    for (let [a, b] of clothes) {
        if (arr.has(b)) arr.set(b, arr.get(b) + 1);
        else arr.set(b, 1); 
    }
    for (let [key, val] of arr) {
        answer *= (val +1) 
   } 
    return answer - 1 ;
}
  
