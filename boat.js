----

function solution(people, limit) {
    let answer = 0;
    let sum = 0;
    let rt = people.length - 1 ;
    let lt = 0;
    people.sort((a,b) => a-b);
    while (lt <=  rt) {
         if ( lt != rt && people[lt] + people[rt] < limit ) {
            sum += people[lt] + people[rt] ;
             rt--;
             lt++;
         }
        if(lt != rt && people[lt] + people[rt] === limit)
        {  
          answer++;
          sum = 0;   
          rt--;
          lt++;
         }
      else {
       
        if(sum + people[lt] === limit) {
         answer++;
         sum = 0;
         lt++;  
        }
        if(sum + people[lt] > limit) {
         answer++;
         sum = people[lt];
         lt++;  
        }
         else {
          sum += people[lt];
          lt++;
        }
     }
    
     }
    if(sum > 0) answer ++;
     return answer;
}
