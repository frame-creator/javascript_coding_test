///
function solution(board)
{
    let answer = 0;
    let temp = board.slice();
  
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if(board[i][j] !== 0){
                if(i-1 < 0 || j-1 <0 ){
                    temp[i][j] = board[i][j];
                    answer = Math.max(temp[i][j], answer);
                    continue;
                }
                temp[i][j] = Math.min(board[i-1][j], board[i][j-1], board[i-1][j-1]) + board[i][j];
                answer = Math.max(temp[i][j], answer);
            }
        }   
    }
    return Math.pow(answer,2)
}
