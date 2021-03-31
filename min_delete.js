function solution(arr) {
    let answer=[] ;
    let min = arr[0];
    let temp;
    for (let i=0; i< arr.length; i++) {
        if(arr[i] < min) min = arr[i];
        temp = i
        }
    if (arr.length === 1) answer.push(-1);
    for (let i=0; i<arr.length; i ++) {
        if (i !== temp)  answer.push(arr[i]);
    }
      return answer;
}
