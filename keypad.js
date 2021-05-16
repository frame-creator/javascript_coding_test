---

function solution(numbers, hand) {
    let answer = [];
    let left = [1,4,7];
    let right = [3,6,9];
    let middle = [2,5,8,0];
    let l_arr =[];
    let r_arr = [];
    
    for (let i = 0; i <numbers.length; i++) {
        if(left.includes(numbers[i])) {
         answer.push('L');
         l_arr.push(numbers[i]);
        } 
        if(right.includes(numbers[i]) ) {
         answer.push('R');
         r_arr.push(numbers[i]);
        } 
        if(middle.includes(numbers[i])) {
         if(Math.abs(r_arr[r_arr.length-1] - numbers[i]) > Math.abs(l_arr[l_arr.length-1] - numbers[i]) )  answer.push('L');
          if(Math.abs(r_arr[r_arr.length-1] - numbers[i]) < Math.abs(l_arr[l_arr.length-1] - numbers[i]) )  answer.push('R');
         if(Math.abs(r_arr[r_arr.length-1] - numbers[i]) ===  Math.abs(l_arr[l_arr.length-1] - numbers[i]) )  {
             if (hand === 'right')  answer.push('R');
             if (hand === 'left')  answer.push('L');
         } 
        } 
    }
    
    return answer.join('');
}
    return result;
}

---
  
  function solution(numbers, hand) {
    let answer = [];
    let left = [1,4,7];
    let right = [3,6,9];
    let middle = [2,5,8,0];
    let l_arr =[];
    let r_arr = [];
    let keypad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    
    for (let i = 0; i <numbers.length; i++) {
        if(left.includes(numbers[i])) {
         answer.push('L');
         l_arr.push(numbers[i]);
        } 
        if(right.includes(numbers[i]) ) {
         answer.push('R');
         r_arr.push(numbers[i]);
        } 
        if(middle.includes(numbers[i])) {
         if(Math.abs((keypad[r_arr[r_arr.length-1]][0] - keypad[numbers[i]][0])+ (keypad[r_arr[r_arr.length-1]][1] - keypad[numbers[i]][1]) ) > Math.abs((keypad[l_arr[l_arr.length-1]][0] - keypad[numbers[i]][0])+ (keypad[l_arr[l_arr.length-1]][1] - keypad[numbers[i]][1])) )  answer.push('L');
          if(Math.abs((keypad[r_arr[r_arr.length-1]][0] - keypad[numbers[i]][0])+ (keypad[r_arr[r_arr.length-1]][1] - keypad[numbers[i]][1]) ) < Math.abs((keypad[l_arr[l_arr.length-1]][0] - keypad[numbers[i]][0])+ (keypad[l_arr[l_arr.length-1]][1] - keypad[numbers[i]][1])) )  answer.push('R');
         if(Math.abs((keypad[r_arr[r_arr.length-1]][0] - keypad[numbers[i]][0])+ (keypad[r_arr[r_arr.length-1]][1] - keypad[numbers[i]][1]) ) === Math.abs((keypad[l_arr[l_arr.length-1]][0] - keypad[numbers[i]][0])+ (keypad[l_arr[l_arr.length-1]][1] - keypad[numbers[i]][1])) )  {
             if (hand === 'right')  answer.push('R');
             if (hand === 'left')  answer.push('L');
         } 
        } 
    }
    
    return answer.join('');
}



---
  function solution(numbers, hand) {
    let answer = [];
    let left = [1,4,7];
    let right = [3,6,9];
    let middle = [2,5,8,0];
    let l_arr =['*'];
    let r_arr = ['#'];
    let keypad = {
      1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    
    for (let i = 0; i <numbers.length; i++) {
        if(left.includes(numbers[i])) {
         answer.push('L');
         l_arr.push(numbers[i]);
        } 
        if(right.includes(numbers[i]) ) {
         answer.push('R');
         r_arr.push(numbers[i]);
        } 
        if(middle.includes(numbers[i])) {
         if(Math.abs((keypad[r_arr[r_arr.length-1]][0] - keypad[numbers[i]][0])+ (keypad[r_arr[r_arr.length-1]][1] - keypad[numbers[i]][1]) ) > Math.abs((keypad[l_arr[l_arr.length-1]][0] - keypad[numbers[i]][0])+ (keypad[l_arr[l_arr.length-1]][1] - keypad[numbers[i]][1])) )  answer.push('L');
          if(Math.abs((keypad[r_arr[r_arr.length-1]][0] - keypad[numbers[i]][0])+ (keypad[r_arr[r_arr.length-1]][1] - keypad[numbers[i]][1]) ) < Math.abs((keypad[l_arr[l_arr.length-1]][0] - keypad[numbers[i]][0])+ (keypad[l_arr[l_arr.length-1]][1] - keypad[numbers[i]][1])) )  answer.push('R');
         if(Math.abs((keypad[r_arr[r_arr.length-1]][0] - keypad[numbers[i]][0])+ (keypad[r_arr[r_arr.length-1]][1] - keypad[numbers[i]][1]) ) === Math.abs((keypad[l_arr[l_arr.length-1]][0] - keypad[numbers[i]][0])+ (keypad[l_arr[l_arr.length-1]][1] - keypad[numbers[i]][1])) )  {
             if (hand === 'right')  answer.push('R');
             if (hand === 'left')  answer.push('L');
         } 
        } 
    }
    
    return answer.join('');
}

---
  function solution(numbers, hand) {
    let answer = [];
    let left = [1,4,7];
    let right = [3,6,9];
    let middle = [2,5,8,0];
    let l_arr =['*'];
    let r_arr = ['#'];
    let keypad = {
      1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    
    for (let i = 0; i <numbers.length; i++) {
        
        if(left.includes(numbers[i])) {
         answer.push('L');
         l_arr.push(numbers[i]);
        } 
        if(right.includes(numbers[i]) ) {
         answer.push('R');
         r_arr.push(numbers[i]);
        } 
        if(middle.includes(numbers[i])) {
         if(Math.abs((keypad[r_arr[r_arr.length-1]][0] - keypad[numbers[i]][0]))+ Math.abs((keypad[r_arr[r_arr.length-1]][1] - keypad[numbers[i]][1]) ) > Math.abs((keypad[l_arr[l_arr.length-1]][0] - keypad[numbers[i]][0]))+ Math.abs((keypad[l_arr[l_arr.length-1]][1] - keypad[numbers[i]][1])) )  answer.push('L');
          if(Math.abs((keypad[r_arr[r_arr.length-1]][0] - keypad[numbers[i]][0]))+ Math.abs((keypad[r_arr[r_arr.length-1]][1] - keypad[numbers[i]][1]) ) < Math.abs((keypad[l_arr[l_arr.length-1]][0] - keypad[numbers[i]][0]))+ Math.abs((keypad[l_arr[l_arr.length-1]][1] - keypad[numbers[i]][1])) )  answer.push('R');
         if(Math.abs((keypad[r_arr[r_arr.length-1]][0] - keypad[numbers[i]][0]))+ Math.abs((keypad[r_arr[r_arr.length-1]][1] - keypad[numbers[i]][1]) ) === Math.abs((keypad[l_arr[l_arr.length-1]][0] - keypad[numbers[i]][0]))+ Math.abs((keypad[l_arr[l_arr.length-1]][1] - keypad[numbers[i]][1])) )  {
             if (hand === 'right')  { 
                 answer.push('R');
                 r_arr.push(numbers[i]);
             }
             if (hand === 'left')  {
                 answer.push('L');
                 l_arr.push(numbers[i]);
             }
             } 
      //      console.log(l_arr, r_arr);
        }
      //   console.log(l_arr, r_arr);
    }
    
    return answer.join('');
}


///

function solution(numbers, hand) {
    
    function dis(num, lH, rH, pos, hand){
    const lD = Math.abs(pos[lH][0] - pos[num][0]) + 
        Math.abs(pos[lH][1] - pos[num][1])
    const rD = Math.abs(pos[rH][0] - pos[num][0]) + 
        Math.abs(pos[rH][1] - pos[num][1])
    
    if (lD === rD) return hand === 'left' ?  'L' : 'R';
    return lD < rD ? 'L' : 'R'
}

    const pos = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2]
    };
    var lH = '*', rH = '#';
    var result = ''
    for (var num of numbers){
        if (num % 3 === 1){
            result += 'L';
            lH = num;
        }
        
        else if (num !==0 && num % 3 === 0){
            result += 'R';
            rH = num;
        }
        else{
            result += dis(num, lH, rH, pos, hand)
            result[result.length-1] === 'L'? lH = num : rH = num
        }
    }

    return result;
}
