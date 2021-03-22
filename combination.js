function solution(numbers) {
    let answer = [];
    let temp_arr = [];
    for (let i=0; i<numbers.length-1; i++)
        for (let j=1; j<numbers.length; j++) {
            temp_arr.push(numbers[i]+numbers[j])
            temp_arr.sort((a,b)=>a-b)
        }
    return temp_arr;
}

function solution(numbers) {
    let answer = [];
    let temp_arr = [];
    let sum;
    for (let i=0; i<numbers.length-1; i++)
        for (let j=1; j<numbers.length; j++) {
            sum= numbers[i]+numbers[j]
            answer.push(sum)
            answer.sort((a,b)=>a-b)
        }
    return answer;
}

function solution(numbers) {
    let answer = [];
    let temp_arr = new Set();
    let sum;
    for (let i=0; i < numbers.length; i++){
        for (let j=i+1; j < numbers.length; j++) {
           if ( i !== j) {
            temp_arr.add(numbers[i] + numbers[j])
           }
        }
    }
    answer = temp_arr.sort((a,b)=>a-b)
   
    return answer;
}

function solution(numbers) {
    let answer = [];
    let temp_arr = new Set();
   
    for (let i=0; i < numbers.length; i++){
        for (let j=i+1; j < numbers.length; j++) {
           if ( i !== j) {
            temp_arr.add(numbers[i] + numbers[j]);
           }
        }
    }
    temp_arr.forEach((temp)=>{
        answer.push(temp)
    })
    answer.sort((a,b)=>(a-b);
   
    return answer;
               
 }
                
   function solution(numbers) {
    let answer = [];
    let temp_arr = [] ;
   
    for (let i=0; i < numbers.length; i++){
        for (let j=i+1; j < numbers.length; j++) {
           temp_arr.push(numbers[i]+numbers[j]);
           }
        }
    
    answer=[...new Set(temp_arr)]
    anwer.sort((a,b)=>a-b)
   
    return answer;
  
    }  
  

function solution(numbers) {
    const temp = []

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            temp.push(numbers[i] + numbers[j])
        }
    }

    const answer = [...new Set(temp)]

    return answer.sort((a, b) => a - b)
}


function solution(numbers) {
    let answer = [];
    let temp_arr = [] ;
   
    for (let i=0; i < numbers.length; i++){
        for (let j=i+1; j < numbers.length; j++) {
           temp_arr.push(numbers[i]+numbers[j]);
           }
        }
    
    answer= [...new Set(temp_arr)]
    
    answer.sort((a,b)=>a-b)
   
    return answer;
}
