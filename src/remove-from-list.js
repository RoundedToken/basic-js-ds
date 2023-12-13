const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
    let list;
    let current;

    while (l) {
        if (l.value !== k) {
            if (!list) {
                list = new ListNode(l.value);
                current = list;
            } else {
                current.next = new ListNode(l.value);
                current = current.next;
            }
        }

        l = l.next;
    }

    return list;
}

const L = new ListNode(5);
L.next = new ListNode(6);
L.next.next = new ListNode(7);

const N = removeKFromList(L, 6);

console.log(L);
console.log('---');
console.log(N);

module.exports = {
    removeKFromList,
};
