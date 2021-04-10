///
function solution(n, m) {
    let answer = [];
    let temp_min = 1;
    let num_min = Math.min(n, m)
    let temp_max = n*m;
    let min = Math.min(n, m)
    for (let i = 0; i < min+1; i++ ) {
        if(n % i === 0 && m % i === 0) {
          temp_min =  Math.max(temp_min, i);
         }

    }
    for (let j = num_min; j < temp_max +1; j++ ) {
        if(j % n === 0 && j % m === 0) {
          temp_max =  Math.min(temp_max, j);
         }

    }
     answer.push(temp_min);
    answer.push(temp_max);
    return answer;
}

