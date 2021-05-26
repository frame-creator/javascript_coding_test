////

function solution(arr1, arr2) { 
    var answer = []; 
    arr1.forEach(v => answer.push(Array(arr2[0].length).fill(0))) 
    
    for(let i = 0; i < arr1.length; i++){ 
        for(let k = 0; k< arr2[0].length; k++){
            for(let m =0; m< arr2.length; m++){
                answer[i][k] += arr1[i][m] * arr2[m][k] } 
        } 
    } 
    return answer; 
}

