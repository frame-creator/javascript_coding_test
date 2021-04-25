///
function solution(strings, n) {
    let answer = [];
    let temp = [];
    for (let x of strings) {
        temp.push([x, x[n]])
    }
    
    temp.sort((a, b) => {
      if (a[1] === b[1] ) {
          return (a[0] > b[0]) - (a[0] < b[0]);
          }
      else return a[1].charCodeAt() - b[1].charCodeAt();
    });
       
    for (let i = 0; i<temp.length; i++) {
    answer.push(temp[i][0])
    }
    return answer; 
}
