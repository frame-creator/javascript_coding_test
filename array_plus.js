///
function solution(arr1, arr2) {
    let answer = Array.from(Array(arr1.length), ()=>Array());
    let n= arr1[0].length;
    let m = arr1.length;
for (let i = 0; i< m; i++) {
    for(let j= 0; j< n; j++) {
        answer[i].push(arr1[i][j]+arr2[i][j]);
             }
        }
    return answer;
}
