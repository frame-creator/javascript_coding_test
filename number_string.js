function solution(n) {
    let answer = 0;
    let temp = String(n).split('');
    let arr = [];
    for (let x of temp) arr.push(Number(x));
    arr.sort((a,b) => b - a);
    let a = arr.join('');
    console.log(a)
    return Number(a);
}

function solution(n) {
    let answer = 0;
    let temp = String(n).split('');
    let arr = [];
    for (let x of temp) arr.push(Number(x));
    arr.sort((a,b) => b - a);
    let a = arr.join('');
    answer = Number(a);
    return answer ;
}
