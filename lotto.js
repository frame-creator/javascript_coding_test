///
function solution(lottos, win_nums) {
    let answer = [];
    let zero = 0;
    let common = 0;
    let score = [6,6,5,4,3,2,1];
    for (let x of lottos) {
       if ( x === 0 ) { 
           zero ++;
          }
        if (win_nums.indexOf(x) !== -1) common ++ ;
       
       }
   
    answer.push(score[zero+common], score[common] );        
    return answer;
}
