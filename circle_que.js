//지민이는 N개의 원소를 포함하고 있는 양방향 순환 큐를 가지고 있다. 지민이는 이 큐에서 몇 개의 원소를 뽑아내려고 한다.
//지민이는 이 큐에서 다음과 같은 3가지 연산을 수행할 수 있다.
//첫 번째 원소를 뽑아낸다. 이 연산을 수행하면, 원래 큐의 원소가 a1, ..., ak이었던 것이 a2, ..., ak와 같이 된다.
//왼쪽으로 한 칸 이동시킨다. 이 연산을 수행하면, a1, ..., ak가 a2, ..., ak, a1이 된다.
//오른쪽으로 한 칸 이동시킨다. 이 연산을 수행하면, a1, ..., ak가 ak, a1, ..., ak-1이 된다.
//큐에 처음에 포함되어 있던 수 N이 주어진다. 그리고 지민이가 뽑아내려고 하는 원소의 위치가 주어진다. (이 위치는 가장 처음 큐에서의 위치이다.) 
//이때, 그 원소를 주어진 순서대로 뽑아내는데 드는 2번, 3번 연산의 최솟값을 출력하는 프로그램을 작성하시오.

///
const [n, m, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/).map(v => +v);
let count = 0;

function Node(value) {
    this.value = value;
    this.prevNode = null;
    this.nextNode = null;
}

function DoublyLinkedList() {
    this.front = null;
    this.rear = null;
    this.length = 0;

    this.enqueue = value => {
        let curNode = new Node(value);
        if (this.front) {
            curNode.prevNode = this.rear;
            curNode.nextNode = this.front;
            this.rear.nextNode = curNode;
            this.front.prevNode = curNode;
            this.rear = curNode;
        } else {
            this.front = curNode;
            this.rear = curNode;
            curNode.prevNode = curNode;
            curNode.nextNode = curNode;
        }
        this.length++;
    };

    this.poll = () => {
        if (this.length === 1) {
            this.front = null;
            this.rear = null;
        } else {
            let secondNode = this.front.nextNode
            secondNode.prevNode = this.rear;
            this.rear.nextNode = secondNode;
            this.front = secondNode;
            this.length--;
        }
    }

    this.rotateToLeft = (n=1) => {
        while (n > 0) {
            if (this.length > 1) {
                this.rear = this.front;
                this.front = this.front.nextNode;
            }
            n--;
        }
    }

    this.rotateToRight = (n=1) => {
        while (n > 0) {
            if (this.length > 1) {
                this.front = this.rear;
                this.rear = this.rear.prevNode;
            }
            n--;
        }
    }

    this.extract = value => {
        if (this.length <= 1) {
            return 0;
        } else {
            let curNode = this.front;
            let leftCount = 0;
            let rightCount = 0;
            while (curNode.value !== value) {
                curNode = curNode.nextNode;
                leftCount++;
            }
            curNode = this.front;
            while (curNode.value !== value) {
                curNode = curNode.prevNode;
                rightCount++;
            }
            
            if (leftCount < rightCount) {
                this.rotateToLeft(leftCount);
                this.poll();
                return leftCount;
            } else {
                this.rotateToRight(rightCount);
                this.poll();
                return rightCount;
            }
        }
    }
}

dll = new DoublyLinkedList();
for (let i=1; i<=n; i++) dll.enqueue(i);
console.log(arr.reduce((acc, v) => acc + dll.extract(v), 0));
