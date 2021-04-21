///
function solution(a, b) {
    let answer = '';
    let sum = 30*(a-1);
    let days = ['FRI','SAT','SUN','MON','TUE','WED','THU',];
    let months = [ +1, -1, +1, 0, +1, 0, +1, +1, 0,  +1 ,  0, +1  ];
    if (a>=2) {
        for (let i = 0;  i < a-1   ; i++) {
     sum += months[i];
    }
    }
    answer = days[((sum + b)%7 === 0 ? 7:(sum + b)%7)  -1];
    return answer;
}
