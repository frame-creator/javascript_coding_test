function solution(n, lost, reserve) {
    var answer = 0;
    for (let x of lost){
       for(let y of reserve) {
           if (x = y - 1 || x = y + 1) {
            let temp = lost.remove(x).splice();
           }
       }
        
    }
    answer = n - temp.length;
    
    return answer;
}

