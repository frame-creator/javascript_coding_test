//계산대에서 계산을 하는 탑문고 직원은 오늘 판매한 책의 제목을 보면서 가장 많이 팔린 책의 제목을 칠판에 써놓는 일도 같이 하고 있다.
//오늘 하루 동안 팔린 책의 제목이 입력으로 들어왔을 때, 가장 많이 팔린 책의 제목을 출력하는 프로그램을 작성하시오.


///
const [N, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
let maxCount = 0;
let maxName = "";
const dict = {};
arr.forEach(name => {
    if (dict[name]) dict[name]++;
    else dict[name] = 1;
    if (dict[name] === maxCount && name < maxName) maxName = name;
    else if (dict[name] > maxCount) {
        maxName = name;
        maxCount = dict[name];
    }
});
console.log(maxName);
