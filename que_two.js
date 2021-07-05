//정수를 저장하는 큐를 구현한 다음, 입력으로 주어지는 명령을 처리하는 프로그램을 작성하시오.
//명령은 총 여섯 가지이다.
//push X: 정수 X를 큐에 넣는 연산이다.
//pop: 큐에서 가장 앞에 있는 정수를 빼고, 그 수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
//size: 큐에 들어있는 정수의 개수를 출력한다.
//empty: 큐가 비어있으면 1, 아니면 0을 출력한다.
//front: 큐의 가장 앞에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.
//back: 큐의 가장 뒤에 있는 정수를 출력한다. 만약 큐에 들어있는 정수가 없는 경우에는 -1을 출력한다.

///const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    createNode(value, prev, next) {
        return {
            value,
            prev,
            next
        };
    }

    push(value) {
        const curNode = this.createNode(value, this.tail, this.head);
        if (this.head) {
            this.tail.next = curNode;
            this.head.prev = curNode;
            this.tail = curNode;
        } else {
            this.head = curNode;
            this.tail = curNode;
            curNode.prev = curNode;
            curNode.next = curNode;
        }
        this.size++;
    }

    pop() {
        if (this.size > 2) {
            const value = this.head.value;
            const newHead = this.head.next;
            this.head = newHead;
            newHead.prev = this.tail;
            this.tail.next = this.head;
            this.size--;
            return value;
        } else if (this.size === 2) {
            const value = this.head.value;
            this.head = this.tail;
            this.tail.prev = this.tail;
            this.tail.next = this.tail;
            this.size--;
            return value;
        } else if (this.size === 1) {
            const value = this.head.value;
            this.head = null;
            this.tail = null;
            this.size--;
            return value;
        } else {
            return -1;
        }
    }

    empty() {
        return this.size ? 0 : 1;
    }

    front() {
        return this.head ? this.head.value : -1;
    }

    back() {
        return this.tail ? this.tail.value : -1;
    }
}

const myQueue = new Queue();
const output = [];

for (let i=1; i<input.length; i++) {
    const [command, value] = input[i].split(" ");
    switch(command) {
        case "push": myQueue.push(value); break;
        case "pop": output.push(myQueue.pop()); break;
        case "size": output.push(myQueue.size); break;
        case "empty": output.push(myQueue.empty()); break;
        case "front": output.push(myQueue.front()); break;
        case "back": output.push(myQueue.back()); break;
    }
}
console.log(output.join("\n"));
