///

function solution(A,B){
    let answer = 0;
    A.sort((a, b) => b-a);
    B.sort((a, b) => a-b);
        for (let i = 0; i< A.length; i++) {
        answer += A[i] * B[i];
    }
    return answer;
}
