function solution(m, ps, pt) {
  let answer = Number.SAFE_MIN_INTIGER;
  let n = ps.length;
  function DFS(L, sum, time){
    if(time > m) return;
    if (L === n) {
     answer = Math.max(answer, sum);
     }
   else {
    DFS(L+1, sum + ps[L], time + pt[L};
    DFS(L+1, sum, time);
    }
   };
  DFS(0,0,0)
    return answer;
}


