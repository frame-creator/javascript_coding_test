///
function solution(board, moves) {
    let answer = 0;
    let n = board.length;
    let arr =[];
    let p;
    for (let i=0; i<moves.length; i++) {
            for (let k=0; k<board.length; k++) {
                if(board[k][moves[i] -1] !== 0) {
                   let p = board[k][moves[i] -1];
                    board[k][moves[i] -1] = 0;
                    if(p === arr[arr.length -1]) {
                        answer+=2;
                        arr.pop();
                      }
                    else {
                        arr.push(p);
                    }
                    break;
                   
            }
        }
         
    }
    return answer;
}
