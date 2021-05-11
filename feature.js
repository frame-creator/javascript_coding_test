---
function solution(progresses, speeds) {
    let answer = [];
    let n = progresses.length;
    
    let tp;
    while (n === 0) {
        
          progresses.push(progresses.shift() +speeds[i]);
          if(progresses.shift() >=100 ) tp++;
    }
     answer.push(tp);
    tp = 0;
    return answer;
}


---
  function solution(progresses, speeds) {
    let answer = [];
    let temp =[] ;
    while (progresses.length) {
        for (let i = 0 ; i<progresses.length; i++) {
            if(progresses[i] >= 100) progresses[i] +=0 ;
            else progresses[i] += speeds[i]; 
        }
  //      console.log(progresses);
          if(progresses[0] >= 100 ) {
           while( progresses[0] >=100 ) {
               temp.push(progresses.shift());
                 }
            answer.push(temp.length);
            temp=[];
        }
    }
    return answer;
}

///
function solution(progresses, speeds) {
    let answer = [];
    let temp =[] ;
    while (progresses.length) {
        for (let i = 0 ; i<progresses.length; i++) {
            if(progresses[i] >= 100) progresses[i] +=0 ;
            else progresses[i] += speeds[i]; 
        }       
          if(progresses[0] >= 100 ) {
           while( progresses[0] >=100 ) {
               temp.push(progresses.shift());
               speeds.shift();
                 }
            answer.push(temp.length);
            temp=[];
        }
    }
    return answer;
}


