//상근이는 어렸을 적에 "봄보니 (Bomboni)" 게임을 즐겨했다.
//가장 처음에 N×N크기에 사탕을 채워 놓는다. 사탕의 색은 모두 같지 않을 수도 있다. 상근이는 사탕의 색이 다른 인접한 두 칸을 고른다. 
//그 다음 고른 칸에 들어있는 사탕을 서로 교환한다. 이제, 모두 같은 색으로 이루어져 있는 가장 긴 연속 부분(행 또는 열)을 고른 다음 그 사탕을 모두 먹는다.
//사탕이 채워진 상태가 주어졌을 때, 상근이가 먹을 수 있는 사탕의 최대 개수를 구하는 프로그램을 작성하시오.


///
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const n = +input[0];
const candy = input.slice(1).map(v => v.split(""));

function swap(i, j, k) {
    const coord = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const here = candy[i][j];
    if (candy[i+coord[k][0]]
        && candy[i+coord[k][0]][j+coord[k][1]]
        && here !== candy[i+coord[k][0]][j+coord[k][1]]) {
        candy[i][j] = candy[i+coord[k][0]][j+coord[k][1]];
        candy[i+coord[k][0]][j+coord[k][1]] = here;
        return true;
    } else return false;
}

function search() {
    for (let l=0; l<2; l++) {
        for (let x=0; x<n; x++) {
            let count = 0;
            let color = curCandy(x, 0, l);
            for (let y=0; y<n; y++) {
                if (curCandy(x, y, l) === color) {
                    count++;
                    if (count > maxCount) {
                        maxCount = count;
                    }
                } else {
                    color = curCandy(x, y, l);
                    count = 1;
                }
            }
        }
    }
}

function curCandy(x, y, l) {
    if (l === 0) return candy[x][y];
    else return candy[y][x];
};

let maxCount = 0;
for (let i=0; i<n; i++) {
    for (let j=0; j<n; j++) {
        for (let k=0; k<4; k++) {
            if (swap(i, j, k)) {
                search()
                swap(i, j, k)
            }
        }
    }
}

console.log(maxCount);
