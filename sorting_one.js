//알파벳 소문자로 이루어진 N개의 단어가 들어오면 아래와 같은 조건에 따라 정렬하는 프로그램을 작성하시오.
// 1. 길이가 짧은 것부터
// 2. 길이가 같으면 사전 순으로

///
const [n, ...words] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
Array.from(new Set(words))
    .sort((a, b) => a > b ? 1 : (a < b ? -1 : 0))
    .sort((a, b) => a.length - b.length)
    .forEach(i => console.log(i));
