---
function solution(new_id) {
    let answer = '';
    let letters = [a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,'-','_'.'.']
    
    for (let x of new_id) {
        answer += x.toLowerCase();
    }
    answer.split('').filter(e => letter.includes(e) || !e.isNaN );
    console.log(answer);
    
    return answer;
}

///
function solution(new_id) {
    const answer = new_id
        .toLowerCase() 
        .replace(/[^\w-_.]/g, '')
        .replace(/\.{2,}/g, '.') 
        .replace(/^\.|\.$/g, '') 
        .replace(/^$/, 'a') 
        .slice(0, 15).replace(/\.$/, ''); 
    const len = answer.length;
    return len > 2 ? answer : answer + answer.charAt(len - 1).repeat(3 - len); 
}
