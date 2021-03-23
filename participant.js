function solution(participant, completion) {
    let answer = '';
     (for x of participant){
        if (completion.indexOf(x)===-1);
          answer= x 
         
    }

    return answer;
}
  
  
 function solution(participant, completion) {
    let answer = '';
     participant.sort();
     completion.sort();
     for (x of participant) {
         if (completion.indexof(x))
             completion.splice(x);
         else x = answer;
     }
         
    return answer;
   
 }

   
     function solution(participant, completion) {
    participant.sort();
    completion.sort();

    for(let i in participant) {
        if(participant[i] !== completion[i]) return participant[i];
    }
}
     
     function solution(participant, completion) {
    let answer = '';
     participant.sort();
     completion.sort();
     for (i in participant) {
         if (participant[i] !== completion[i] )
             
         return participant[i]
     }
       
       
       function solution(participant, completion) {
    let answer = '';
     participant.sort();
     completion.sort();
     for (i=0; i<participant.length; i++) {
         if (participant[i] !== completion[i] )
             
         return participant[i]
     }
   }
