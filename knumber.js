function solution(array, commands) {
    let answer = [];
    for (let i=0; i<commands.length; i++) {
       answer.push( array.slice(commands[i][0], commands[i][1]).sort((a,b)=> (a-b)).[k-1])
        
    }
    
 
    
    
    return answer;
}
