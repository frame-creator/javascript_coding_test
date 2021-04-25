///
function solution(numbers, target) {
    let answer = 0;
    let sum = 0;
    function Recursion (level, sum) {
        if (level ===  numbers.length ) {
           if (sum === target) {
               answer++;
           } 
        }
        else {
            Recursion (level+1, sum + numbers[level]);
            Recursion (level+1, sum - numbers[level]);
        }
    }
    Recursion(0, 0)
    return answer;
}
