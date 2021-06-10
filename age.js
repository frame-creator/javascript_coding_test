//온라인 저지에 가입한 사람들의 나이와 이름이 가입한 순서대로 주어진다. 
//이때, 회원들을 나이가 증가하는 순으로, 나이가 같으면 먼저 가입한 사람이 앞에 오는 순서로 정렬하는 프로그램을 작성하시오.

//첫째 줄에 온라인 저지 회원의 수 N이 주어진다. (1 ≤ N ≤ 100,000)
//둘째 줄부터 N개의 줄에는 각 회원의 나이와 이름이 공백으로 구분되어 주어진다. 
//나이는 1보다 크거나 같으며, 200보다 작거나 같은 정수이고, 이름은 알파벳 대소문자로 이루어져 있고, 길이가 100보다 작거나 같은 문자열이다. 
//입력은 가입한 순서로 주어진다.

///
const [n, ...members] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
console.log(
    members
        .map(v => ({age: parseInt(v.split(" ")[0]), name: v.split(" ")[1]}))
        .sort((a, b) => a.age - b.age)
        .map(v => String(v.age) + " " + v.name)
        .join("\n")
);
