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
                console.log(i,j,temp,lost,reserve, 300);
           }
       }
    }
    for (let i =0; i< lost.length; i++){
       for(let j=0; j< reserve.length; j++) {
           if ( lost[i] === reserve[j] - 1) {
              temp.push(lost[i]);
              lost.splice(i, 1); 
              reserve.splice(j, 1); 
                console.log(i,j,temp,lost,reserve,200);
           }
           if ( lost[i] === reserve[j] + 1) {
              temp.push(lost[i]);
              lost.splice(i, 1); 
              reserve.splice(j, 1); 
                console.log(i,j,temp,lost,reserve,100);
           }
       }
        
    }
    answer = n - number + temp.length;
----  
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
                console.log(i,j,temp,lost,reserve, 300);
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
    answer = n - number + temp.length;
  
  
  
  
