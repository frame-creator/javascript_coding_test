//첫째 줄에는 도감에 수록되어 있는 포켓몬의 개수 N이랑 내가 맞춰야 하는 문제의 개수 M이 주어져. N과 M은 1보다 크거나 같고, 100,000보다 작거나 같은 자연수야.
//둘째 줄부터 N개의 줄에 포켓몬의 번호가 1번인 포켓몬부터 N번에 해당하는 포켓몬까지 한 줄에 하나씩 입력으로 들어와. 포켓몬의 이름은 모두 영어로만 이루어져있고, 
//첫 글자만 대문자이고, 나머지 문자는 소문자로만 이루어져 있어. 포켓몬 이름의 최대 길이는 20이야. 그 다음 줄부터 총 M개의 줄에 내가 맞춰야하는 문제가 입력돼. 
//문제가 알파벳으로만 들어오면 포켓몬 번호를 말해야 하고, 숫자로만 들어오면, 포켓몬 번호에 해당하는 문자를 출력해야해. 
//입력으로 들어오는 숫자는 반드시 1보다 크거나 같고, N보다 작거나 같고, 입력으로 들어오는 문자는 반드시 도감에 있는 포켓몬의 이름만 주어져.


///
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
const n = +input[0];
const m = +input[1];
const arr = input.slice(2, n+2);
const pokemonMap = new Map(arr.map((v, i) => [v, i+1]));
const question = input.slice(n+2);
const answer = [];
question.forEach(v => {
    if (Number.isNaN(+v)) answer.push(pokemonMap.get(v));
    else answer.push(arr[+v-1]);
});
console.log(answer.join("\n"));
