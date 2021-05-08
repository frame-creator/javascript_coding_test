---
function solution(n, lost, reserve) {
    let answer = 0;
    let temp = [];
    let number = lost.length;
    lost.sort((a,b) => a-b);
    reserve.sort((a,b) => a-b);
    console.log(lost);
    console.log(reserve);
    for (let i =0; i< lost.length; i++){
       for(let j=0; j< reserve.length; j++) {
           if(reserve.indexOf(lost[i]) !== -1) {
              temp.push(lost[i]);
              lost.splice(i, 1); 
              reserve.splice(reserve.indexOf(lost[i]), 1);   
               
           }
       }
    }
    for (let x of lost){
       for(let y of reserve) {
           if ( y === x - 1) {
              temp.push(y);
              lost.splice(lost.indexOf(x), 1); 
              reserve.splice(reserve.indexOf(y), 1); 
     
           }
           if ( y === x + 1) {
              temp.push(y);
              lost.splice(lost.indexOf(x), 1); 
              reserve.splice(reserve.indexOf(y), 1); 
      
           }
       }
        
    }
  
  
  ---
    function solution(n, lost, reserve) {
    let answer = n - lost.length;
   lost.sort((a, b) => (a-b));
    reserve.sort((a, b) => (a-b))
    
    
    lost.forEach( e => {
           if(reserve.indexOf(e) !== -1 ) {
             lost.splice(lost.indexOf(e), 1);  
             reserve.splice(reserve.indexOf(e), 1);  
              answer ++;
             
             
             
              
           }
    }
    )
    lost.forEach(e => {
       
           if ( reserve.indexOf(e - 1) !== -1) {
              lost.splice(lost.indexOf(e), 1); 
              reserve.splice(reserve.indexOf(e-1), 1); 
               answer ++;
      
           }
           if ( reserve.indexOf(e + 1) !== -1) {
               lost.splice(lost.indexOf(e), 1); 
               reserve.splice(reserve.indexOf(e+1), 1); 
               answer ++
      
           }
      
    }
      )  
    
     return answer;
}
  
  ---
    function solution(n, lost, reserve) {
    let answer = n - lost.length;
    
    
    
    lost.forEach( e => {
           if(reserve.indexOf(e) !== -1 ) {
             reserve.splice(reserve.indexOf(e), 1);  
             answer++;
              
           }
    }
    )
    lost.forEach(e => {
       
           if ( reserve.indexOf(e - 1) !== -1 ) {
              lost.splice(lost.indexOf(e), 1); 
              reserve.splice(reserve.indexOf(e-1), 1); 
               answer ++;
      
           }
           if ( reserve.indexOf(e + 1) !== -1) {
               lost.splice(lost.indexOf(e), 1); 
               reserve.splice(reserve.indexOf(e+1), 1); 
               answer ++
      
           }
      
    }
      )  
    
     return answer;
}
  
  ----
  function solution(n, lost, reserve) {
    let answer = 0;
    let temp = [];
    let number = lost.length;
    
    lost.forEach( e => {
           if(reserve.indexOf(e) !== -1) {
              temp.push(e);
              lost.splice(lost.indexOf(e), 1); 
              reserve.splice(reserve.indexOf(e), 1);   
              
           }
    }
    )
    lost.forEach(e => {
       
           if ( reserve.indexOf(e - 1) !== -1) {
              temp.push(e);
              lost.splice(lost.indexOf(e), 1); 
              reserve.splice(reserve.indexOf(e-1), 1); 
      
           }
           if ( reserve.indexOf(e + 1) !== -1) {
              temp.push(e);
              lost.splice(lost.indexOf(e), 1); 
              reserve.splice(reserve.indexOf(e+1), 1); 
      
           }
      
    }
      )  
    
    answer = n - number + temp.length;
    
    return answer;
}
  
   

///
function solution(n, lost, reserve) {
    let l_arr = lost.filter(x => !reserve.includes(x));
    let r_arr = reserve.filter(y => !lost.includes(y));
    
    let len = l_arr.filter(e => {
        let spare = r_arr.find(z => Math.abs(z-e) <= 1);
        if(!spare) return e;
        r_arr = r_arr.filter(r => r !== spare);
    }).length;
    
    return n - len;
}
