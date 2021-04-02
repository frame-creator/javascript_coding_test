function solution(s) {
    let answer = 0;
    let s = s + " ";
    let cnt = 1;
    for (let i = 0; i < s.length - 1 ; i++) {
      if(s[i] === s[i+1]) cnt++;
      else { 
        answer+= s[i];
        if (cnt > 1 ) answer+= String(cnt);
        cnt = 1;
           }
    }
    return answer;
}
