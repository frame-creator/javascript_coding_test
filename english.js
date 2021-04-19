///
function solution(n, words) {
    let answer = [];
    
     for (let i = 1 ; i < words.length; i++) {
        if( words[i-1][ words[i-1].length - 1 ] !== words[i][ 0 ] || words.indexOf(words[i]) !== i  ) {
           answer.push( ((i+1)%n === 0 ? n : (i+1)%n) , Math.ceil((i+1)/n)) ;
           break;
     }
     }
   if(answer.length === 0) answer.push(0, 0)

    return answer;
}
