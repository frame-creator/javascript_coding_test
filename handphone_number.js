function solution(phone_number) {
    let answer = '';
    let n = phone_number.length
    for (let i = 0; i < n - 4; i++) answer += '*'
    for (let i = n-4 ; i< n; i++) answer += phone_number[i];
    return answer;
}
