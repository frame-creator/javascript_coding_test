+++
function solution(n) {
    let arr = [];
    let cnt = 0;
    for (let i = 2; i < n + 1; i++) {
        arr.push(true);
    }
    
    for (let i = 2; i * i <= n; i++) {
        if (arr[i]) {
            for (let j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }
    arr.splice(0, 2, false, false);
    for(let i = 0; i <arr.length; i++) {
        if(arr[i]) cnt++;
    }
    
    return cnt++;
}

---
function solution(n) {
    let answer = 0;
    let arr = Array.from({length:n+1}, ()=> true);
    //console.log(arr);
    for (let i = 0; i * i <= n; i++){
        if (arr[i]) {
            for (let j = 2; j = i*i ; j+= i) {
                arr[j] = false;
            }
        }
    }
    arr.splice(0, 2, false, false);
    for (let k = 0; k< arr.length; k++) {
      if (arr[k])   answer++;
    }
    
    return answer;
}

///
function solution(n) {
    
    let answer = 0;
    let arr = Array.from({length:n+1}, ()=> true);
    
    for (var i = 2; i * i <= n; i++) {
        if (arr[i]) {
            for (var j = i * i; j <= n; j += i) {
                arr[j] = false;
            }
        }
    }
    arr.splice(0, 2, false, false);
    for(var k = 0; k <arr.length; k++) {
        if(arr[k]) answer++;
    }
    
    return answer++;
}
