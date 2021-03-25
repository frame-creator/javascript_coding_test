function solution(array, commands) {

    var result = [];

    var temp;
    for(var i = 0; i < commands.length; i++){

        temp = array.slice(commands[i][0] - 1, commands[i][1]).sort(function(a, b){
            return a - b;
        })

        result.push(temp[commands[i][2] - 1]);

    }

    return result;

}


///
function solution(array, commands) {
    let answer = [];
    for(let i = 0; i < commands.length; i++){
      let eachCommand = commands[i]
      let slice = array.slice(eachCommand[0] - 1, eachCommand[1])
      
      
      function solution(array, commands) {
    let answer = [];
    for (let i=0; i<commands.length; i++) {
        
    let temp= array.slice(commands[i][0]-1, commands[i][1]).sort((a,b)=> a - b);
     answer.push(temp[commands[i][2]-1]); 
        
    }
     return answer;
}
      answer.push(slice.sort((a, b) => a - b)[eachCommand[2] - 1])
    }

    return answer;
}
