const { NotImplementedError, ListNode } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    constructor() {
        this.head = null;
    }
    root() {
        return this.head;
    }

    add(data) {
        if (!this.head) {
            this.head = new Node(data);
        } else {
            let node = this.head;
            const newNode = new Node(data);

            while (true) {
                let { data: value, left, right } = node;

                if (data > value) {
                    if (right !== null) {
                        node = right;
                    } else {
                        node.right = newNode;
                        break;
                    }
                } else {
                    if (left !== null) {
                        node = left;
                    } else {
                        node.left = newNode;
                        break;
                    }
                }
            }
        }
    }

    has(data) {
        return this.find(data) ? true : false;
    }

    find(data) {
        if (!this.head) return null;
        let node = this.head;

        while (true) {
            let { data: value, right, left } = node;

            if (value === undefined) return null;

            if (value === data) return node;

            if (data > value) {
                if (right === null) return null;
                else {
                    node = node.right;
                }
            } else {
                if (left === null) return null;
                else {
                    node = node.left;
                }
            }
        }
    }

    findParent(data) {
        let node = this.head;
        let prev;

        if (node.data === data) return null;

        while (true) {
            let { data: value, right, left } = node;

            if (value === undefined) return null;

            if (value === data) return prev;

            if (data > value) {
                if (right === null) return null;
                else {
                    prev = node;
                    node = node.right;
                }
            } else {
                if (left === null) return null;
                else {
                    prev = node;
                    node = node.left;
                }
            }
        }
    }

    remove(data) {
        // if (this.head.data === data) {
        //     this.head = null;
        //     console.log('hey');
        //     return;
        // }
        console.log('hi');

        let node = this.find(data);
        let parent = this.findParent(data);

        console.log('node', node);
        console.log('parent', parent);

        if (node || parent) {
            const isRight = parent?.right === node;
            const set = new Set();

            const nodes = [node];

            while (nodes.length > 0) {
                const n = nodes.pop();
                if (n !== null) {
                    set.add(n.data);
                    nodes.push(n.left, n.right);
                }
            }
            if (this.head.data === data) this.head = null;
            else if (isRight) {
                parent.right = null;
            } else {
                parent.left = null;
            }

            set.delete(data);
            console.log(set);

            for (const n of set) this.add(n);
        }
    }

    min() {
        let node = this.head;

        if (!node) return null;

        while (true) {
            const { data, left } = node;

            if (left === null) return data;
            else node = node.left;
        }
    }

    max() {
        let node = this.head;

        if (!node) return null;

        while (true) {
            const { data, right } = node;

            if (right === null) return data;
            else node = node.right;
        }
    }
}

const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(2);
tree.add(6);
tree.add(128);
tree.add(8);
tree.add(31);
tree.add(54);
tree.add(1);
tree.remove(14);
tree.remove(8);
tree.remove(9);
console.log(tree.has(9));
console.log(tree.has(2));

module.exports = {
    BinarySearchTree,
};
