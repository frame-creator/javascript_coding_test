---

function solution(s) {
    let answer = 0;
    let temp = [];
    let amount_arr = [];
    
    function isL(m) {
        for (let x of m) {
            if (x === '(' || x === '[' || x === '{') temp.push(x);
            if (x === ')')  {
                if ( temp.length === 0 ) return false;
                if (temp.pop() !== '(' ) return false;
                temp.pop();
            }
             if (x === ']')  {
                if ( temp.length === 0 ) return false;
                if (temp.pop() !== '[' ) return false;
                temp.pop();
            }
            if (x === '}')  {
                if ( temp.length === 0 ) return false;
                if (temp.pop() !== '{' ) return false;
                temp.pop();
            }
            
            }
          if (temp.length > 0) return false;
          return true;
        }
    
   // console.log(isL(s));
    let sl = s.split('')
    let flag = 0;
    //console.log(s, s + s.split('').shift(), s.substr(1,s.length -1)+ s.split('').shift() );
  //  while (flag = s.length -1 ) {
 //      let  tp = s.substr(1,s.length -1)+ s.split('').shift();
 //       amount_arr.push(tp);
 //   }
   // console.log(amount_arr)
    return answer;
  
  
  
