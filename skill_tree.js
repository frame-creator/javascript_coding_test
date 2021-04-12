function solution(skill, skill_trees) {
    let answer = 0;
    let tn = skill;
    function isSkill(m, n) {
    for (let x of m ) {
         if(n.includes(x)) {
           if(n.shift() !== x){
            return false;
             console.log(n) ; 
        }            
         }
       return true;
    }
    }
     for (let j=0; j<skill_trees.length; j++) {
         console.log(j,skill.split(''),skill_trees[j].split('')) ;
        if(isSkill(skill_trees[j].split(''), skill.split('')) ) {
         console.log(j,skill.split(''),skill_trees[j].split('')) ;
      answer++;
            
     }   
     }
    return answer;
}
