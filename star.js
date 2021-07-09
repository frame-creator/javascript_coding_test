//두 줄짜리 패턴이 n번 만큼 출력되도록 별을 출력하시오.

///
const n = parseInt(require("fs").readFileSync("/dev/stdin").toString());
let piece = "*" + " *".repeat(Math.floor((n-1)/2)) + "\n" + " *".repeat(Math.floor(n/2));
for (let i=0; i<n; i++) {
    if (i == n-1) console.log(piece+"\n");
    else console.log(piece);
}
