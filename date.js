// 서울의 오늘 날짜를 출력하는 프로그램을 작성하시오.


///
const date = new Date().toISOString(). 
replace(/T/, ' '). 
replace(/\..+/, '') 
const answer = date.split(' ')[0]; 
console.log(answer);





