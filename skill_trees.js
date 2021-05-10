---
function solution(skill, skill_trees) {
    let answer = 0;
    
    function isSkill(m, n) {
    for (let x of m ) {
         if(n.includes(x)) {
           if(n.shift() !== x){
            return false;
              }            
         }
       return true;
    }
    }
     for (let j=0; j<skill_trees.length; j++) {
            if(isSkill(skill_trees[j].split(''), skill.split('')) ) {
            answer++;
             }   
     }
    return answer;
}


---
  function solution(skill, skill_trees) {
    let answer = 0;
    for (let i = 0; i< skill_trees.length; i++) {
        let boolean = true;
        let index = 0;
        for (let j = 0; j< skill_trees[i].length; j++) {
            if(skill.includes(skill_trees[i][j])) {
                if (skill_trees[i][j] === skill[index]) {
                    index++;
                }
                else {
                     let boolean = false;
                     break;
                }
            }
        }
        if(boolean = true) answer++;
    }
    return answer;
}

///
function solution(skill, skill_trees) {
  let answer = 0;
   let boolean ;
  for (let i = 0; i < skill_trees.length ; i ++) {
    boolean = true;   
    for (let j = 0; j < skill.length - 1; j ++) {
      let first = skill_trees[i].indexOf(skill[j]);
      let second = skill_trees[i].indexOf(skill[j + 1]);
      if (second !== -1 || first === -1 && second !== -1) {
        boolean = false;
        break;
      }
    }
    answer += boolean ? 1 : 0;
  }
  return answer;
}
