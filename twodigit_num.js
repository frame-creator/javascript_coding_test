///
function solution(s) {
    let answer = [];
    let num =0;
    let sum = 0;
    let temp = s;
    let middle;
    
    while ( temp.length > 1) {
      sum += temp.split('').filter(e => e === '0').length;
      num++;
    //   sum += s.length - temp.split('').filter(e => e === '1').length;
       
//     console.log(temp);
    //  temp = temp.split('').filter(e => e === '1').join('');
      //  console.log(temp);
      temp = temp.split('').filter(e => e === '1').length.toString(2);
     //  console.log(middle);
     // temp = middle.toString(2);
 //       console.log(temp);
   
    }
    if (temp === '1') {
       
        answer.push(num, sum);
    }
    
    return answer;
}

///
function solution(s) {
    let answer = [];
    let num =0;
    let sum = 0;
    let temp = s;
      while ( temp.length > 1) {
      sum += temp.split('').filter(e => e === '0').length;
      num++;
      temp = temp.split('').filter(e => e === '1').length.toString(2);
     }
    if (temp === '1') {
        answer.push(num, sum);
    }
     return answer;
}
