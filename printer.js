---
function solution(priorities, location) {
    let answer = 0;
    let temp = [];
    let arr = [];
    for (let i =0; i< priorities.length; i++ ) {
        temp.push([priorities[i], i]);
        arr.push([priorities[i], i]);
    }
 //   console.log(temp);
    
    arr.sort((a,b) => b[0]-a[0]);
    console.log(arr);
    
               
     

    return answer;
}

 ---
function solution(priorities, location) {
    let answer = 0;
    let index = location ;
    
    while (priorities.length > 0) {
    let temp = priorities.shift();
    if (priorities.filter(e => e > temp).length > 0) {
        priorities.push(temp);
        
           }
    else {
        answer++;
        if (index === 0) return answer;
    }
        index--;
        if( index === -1 ) {
            index === priorities.length -1;
        }
    }
    

    return answer;
}



  
  
 ///
function solution(priorities, location) {
    let answer = 0;
    let num = 0;
    let index = location;
    while (priorities.length > 0) {
       if (priorities.filter((e) => e > priorities[0]).length > 0) {
           priorities.push(priorities.shift());
        } else {
            priorities.shift();
            num ++;
            if (index == 0) {
             return num; 
            }
        }       
        index --;       
        if (index === -1) {
           index = priorities.length - 1
        }

    }
    return answer;
}
  
