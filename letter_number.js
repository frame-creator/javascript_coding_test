//문자열 N개가 주어진다. 이때, 문자열에 포함되어 있는 소문자, 대문자, 숫자, 공백의 개수를 구하는 프로그램을 작성하시오.
//각 문자열은 알파벳 소문자, 대문자, 숫자, 공백으로만 이루어져 있다.



///
const texts = require("fs").readFileSync("/dev/stdin").toString().split("\n");
if (texts[texts.length-1] === "") texts.pop();
texts.forEach(i => {
    let d = "";
    [/[a-z]/g, /[A-Z]/g, /\d/g, /[ ]/g].forEach(reg => d += i.match(reg) ? i.match(reg).length+" " : "0 ");
    console.log(d.slice(0, d.length-1));
});
