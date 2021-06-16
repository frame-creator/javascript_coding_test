//알파벳 소문자로만 이루어진 단어 S가 주어진다. 각 알파벳이 단어에 몇 개가 포함되어 있는지 구하는 프로그램을 작성하시오.

///
const s = require("fs").readFileSync("/dev/stdin").toString().split("");
const alphabet = "abcdefghijklmnopqrstuvwxyz";
const counts = new Array(26).fill(0);
s.forEach(i => counts[alphabet.indexOf(i)]++);
console.log(counts.join(" "));
