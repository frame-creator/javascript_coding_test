//그래프를 DFS로 탐색한 결과와 BFS로 탐색한 결과를 출력하는 프로그램을 작성하시오. 
//단, 방문할 수 있는 정점이 여러 개인 경우에는 정점 번호가 작은 것을 먼저 방문하고, 더 이상 방문할 수 있는 점이 없는 경우 종료한다. 
//정점 번호는 1번부터 N번까지이다.
//첫째 줄에 정점의 개수 N(1 ≤ N ≤ 1,000), 간선의 개수 M(1 ≤ M ≤ 10,000), 탐색을 시작할 정점의 번호 V가 주어진다. 
//다음 M개의 줄에는 간선이 연결하는 두 정점의 번호가 주어진다. 어떤 두 정점 사이에 여러 개의 간선이 있을 수 있다. 입력으로 주어지는 간선은 양방향이다.
//첫째 줄에 DFS를 수행한 결과를, 그 다음 줄에는 BFS를 수행한 결과를 출력한다. V부터 방문된 점을 순서대로 출력하면 된다.

///
let DFS = function (num) {
	visitedDfs[num] = true;
	dfsResult.push(num);

	for (let i = 1; i < graph.length; i++) {
		if (graph[num][i] === 1 && visitedDfs[i] === false) {
			DFS(i);
		}
  }
  return;
};

let BFS = function (num) {
	let queue = [];
	queue.push(num);
	bfsResult.push(num);

  while (queue.length !== 0) {
    let shiftQueue = queue.shift()
    visitedBfs[shiftQueue] = true;
    
    for (let i = 1; i < graph.length; i++) {
      if (graph[shiftQueue][i] === 1 && visitedBfs[i] === false) {
        visitedBfs[i] = true;
        queue.push(i);
        bfsResult.push(i);
      }
    }
  }
  return;
};

const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});
let input = [];
let graph = [];
let visitedDfs = [];
let visitedBfs = [];
let dfsResult = [];
let bfsResult = [];

rl.on("line", function (line) {
	input.push(line.toString());
}).on("close", function () {
	let [node, edge, num] = input
		.shift()
		.split(" ")
		.map((el) => Number(el));
	graph = Array.from(Array(node + 1), () => Array(node + 1).fill(0));

	for (let i of input) {
		let [x, y] = i.split(" ").map((el) => Number(el));
		graph[x][y] = 1;
		graph[y][x] = 1;
	}

	visitedDfs = new Array(node + 1).fill(false);
	visitedBfs = new Array(node + 1).fill(false);
	DFS(num);
	BFS(num);

	console.log(dfsResult.join(" ") + "\n" + bfsResult.join(" "));
	process.exit();
});
 

