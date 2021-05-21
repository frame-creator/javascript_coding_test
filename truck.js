----

function solution(bridge_length, weight, truck_weights) {
    let answer = 0;
    let temp = 1;
    for (let x of truck_weights) {
        temp += x;
        if(temp > weight  ) {
            answer += bridge_length;
            temp = 0;
        }
    } 
    return answer;
}

///
function solution(bridge_length, weight, truck_weights) {
  let temp = Array.from({ length: bridge_length }, () => 0);

  let answer = 0;

  while (temp.length) {
    temp.shift();
    answer ++;

    if (truck_weights.length) {
      let sum = temp.reduce((sum, x) =>  sum + x);

      if (sum + truck_weights[0] <= weight) {
        temp.push(truck_weights.shift());
      } else {
        temp.push(0);
      }
    }
  }

  return answer;
}
