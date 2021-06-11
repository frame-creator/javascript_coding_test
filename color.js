//체스판은 8*8크기이고, 검정 칸과 하얀 칸이 번갈아가면서 색칠되어 있다. 가장 왼쪽 위칸 (0,0)은 하얀색이다. 
//체스판의 상태가 주어졌을 때, 하얀 칸 위에 말이 몇 개 있는지 출력하는 프로그램을 작성하시오.

///
const board = require("fs").readFileSync("/dev/stdin").toString().split(/\s/);
let count = 0;
for (let i=0; i<8; i++) {
    for (let j=0; j<8; j++) {
        if ((i+j)%2 === 0 && board[i][j] === "F") count++;
    }
}
console.log(count);
