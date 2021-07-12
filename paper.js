//N×N크기의 행렬로 표현되는 종이가 있다. 종이의 각 칸에는 -1, 0, 1의 세 값 중 하나가 저장되어 있다. 우리는 이 행렬을 적절한 크기로 자르려고 하는데, 이때 다음의 규칙에 따라 자르려고 한다.
//만약 종이가 모두 같은 수로 되어 있다면 이 종이를 그대로 사용한다.
//(1)이 아닌 경우에는 종이를 같은 크기의 9개의 종이로 자르고, 각각의 잘린 종이에 대해서 (1)의 과정을 반복한다.
//이와 같이 종이를 잘랐을 때, -1로만 채워진 종이의 개수, 0으로만 채워진 종이의 개수, 1로만 채워진 종이의 개수를 구해내는 프로그램을 작성하시오.


///
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const n = +input[0];
const paper = input.slice(1).map(v => v.split(" ").map(vv => +vv));

const countPaper = n => {
    const count = [0, 0, 0];
    const recursion = (n, x, y) => {
        const num = paper[y][x];
        let numCount = 0;
        for (let i=0; i<n; i++) {
            for (let j=0; j<n; j++) {
                if (paper[y+j][x+i] === num) numCount++;
                else break;
            }
        }
        if (numCount === n*n) count[num+1]++;
        else {
            n /= 3;
            for (let i=0; i<3; i++) {
                for (let j=0; j<3; j++) {
                    recursion(n, x+i*n, y+j*n);
                }
            }
        }
    }
    recursion(n, 0, 0);
    console.log(count.join("\n"));
};

countPaper(n);
