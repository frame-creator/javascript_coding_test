
 function solution(n) {
  let answer = 0;
  let temp = '';
  function DFS(n){
    if(n===0) return;
       else{
       
  DFS(parseInt(n/3));
  temp+=String(n%3);        
  }
  }
  DFS(n);
 
    temp.split('').reverse().join('');
    parseInt(temp, 3)
    return answer;
}



///
function solution(n) {
  return parseInt(n.toString(3).split('').reverse().join(''),3)
}
