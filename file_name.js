///
function solution(files) {
  let answer = [];
 
  let m = files.length;
  const rule = /(\d+)/g; 
  for (let i = 0; i < m; i++) {
    answer.push({ index: i, value: files[i].split(rule) }); 
  }

 
  answer.sort((a, b) => {
  
    const a_head = a.value[0].toLowerCase();
    const b_head = b.value[0].toLowerCase();
    if (a_head < b_head) return -1;
    else if (a_head > b_head) return 1;
    else {
      
      const a_number = Number(a.value[1]); 
      const b_number = Number(b.value[1]);
      if (a_number > b_number) return 1;
      else if (a_number < b_number) return -1;
      else {
       
        if (a.index < b.index) return -1;
        else return 1;
      }
    }
  });

  return answer.map(obj => obj.value.join(''));
}
