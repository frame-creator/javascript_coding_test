///
function isPrime(m) {
    for (let i = 2; i < m ; i++) {
        if (m % i === 0) return false;
    }
    return true;
}

function solution(nums) {
    let answer = 0 ;
    let temp =[]
    
    function DFS(L,s, sum) {
        
        if (L === 3){
           if(temp.indexOf(sum === -1))
              temp.push(sum); 
        }
        else {
            for (let i = s; i< nums.length; i++) {
                DFS(L+1, i+1, sum+nums[i] );
            }
        }
    }
   
    DFS(0, 0, 0);
    console.log(temp);
    for (let x of temp) {
       if(isPrime(x)) {
          console.log(x);
           answer ++; 
       }
       }
    
    
    return answer;
}
