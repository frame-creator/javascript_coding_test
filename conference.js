//[문제] 한 개의 회의실이 있는데 이를 사용하고자 하는 N개의 회의에 대하여 회의실 사용표를 만들려고 한다. 각 회의 I에 대해 시작시간과 끝나는 시간이 주어져 있고, 
//각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 회의의 최대 개수를 찾아보자. 단, 회의는 한번 시작하면 중간에 중단될 수 없으며 한 회의가 끝나는 것과 
//동시에 다음 회의가 시작될 수 있다. 회의의 시작시간과 끝나는 시간이 같을 수도 있다. 이 경우에는 시작하자마자 끝나는 것으로 생각하면 된다.



---
let input = require('fs').readFileSync('/dev/stdin').toString();
function solution(meeting) {
    let answer = 0;
    let temp = 0;
    meeting.sort((a-b)=> {
        if(a[1] === b[1]) return a[0]-b[0];
        else return a[1]-b[1];
    })
    for (let x of meeting ) {
        if(x[0]>=temp ) {
            answer++;
            temp = x[1];
        }
    }
                 
               
return answer;
}
console.log(solution(input));

///
var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

var n = parseInt(input[0])
var meetings = []
for(var i=1; i<input.length; i++){
    var meeting = input[i].split(' ').map(e=> e/1)
    meetings.push({start:meeting[0], end:meeting[1]})
}
meetings.sort((a, b)=> {
    if(a.end - b.end === 0 ){
        return a.start-b.start
    } else {
        return a.end - b.end
    }
})
var answer = [meetings[0]]
meetings.shift()
meetings.forEach(function(meeting){
    if(meeting.start >= answer[answer.length-1].end){
        answer.push(meeting)
    }
})
console.log(answer.length)
