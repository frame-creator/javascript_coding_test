function solution(answers) {
    let answer = [];
    tests = [[1,2,3,4,5], [2,1,2,3,2,4,2,5],[3,3,1,1,2,2,4,4,5,5]];
    testers= [0, 0, 0];
    
    for(let i=0; i < answers.length; i++) {
       if ( tests[0][i % 5] === answers[i] ) {
           testers[0]++; 
       }
       if ( tests[1][i % 8] === answers[i] ) {
           testers[1]++; 
       }
       if ( tests[2][i % 10] === answers[i] ) {
           testers[2]++; 
       }
    
}
    let max = Math.max(... testers);
    
    for (let i=0; i<3; i++) {
        if (testers[i] === max) answer.push(i+1);
    }
        
        
    return answer;
}
