---
  function solution(n) {
    let answer = '';
    while (n > 0) {
        if (n% 3 === 0) {
          answer += '4'; 
          n = n / 3 - 1 ;
          break;
        }
        if (n % 3 === 1) {
            answer += '1';
            n = parseInt(n/3);
            break;
        }
        if (n% 3 === 2) {
            answer += '2';
            n = parseInt(n/3);
            break;
        }
    }
    return answer;
}


----
function solution(n) {
    let answer = '';

    while (n > 0) {
        switch (n % 3) {
            case 0:
                answer += "4" + answer;
                n = n / 3 - 1;
                break;
            case 1:
                answer = "1" + answer;
                n = Math.floor(n / 3);
                break;
            case 2:
                answer = "2" + answer;
                n = Math.floor(n / 3);
                break;
           
        }
    }

    return answer;
}


///unction solution (n) {
  let answer = '';  
  let temp = 0;  
  let arr = ['4', '1', '2'];

  while(n > 0) {
    temp = n%3;
    n = parseInt(n/3);   
      
    if(temp === 0) {
      n = n - 1;  
    }
    answer = arr[temp] + answer;
  }
return answer;
}
