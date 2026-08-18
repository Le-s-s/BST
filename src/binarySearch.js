class node {
  rightChild = null;
  leftChild = null;
  value = null;
}

class tree {
  root;

  constructor(arr) {
    this.root = this.buildTree(arr);
  }
  buildTree(arr) {
    const sortedArr = [...new Set(arr)].sort((a, b) => a - b);
    const middle = new node();
    middle.value = sortedArr[Math.floor(sortedArr.length / 2)];
    sortedArr.forEach((num) => {
        let current = middle
      if (current.leftChild === null) {
        if (num < current.value) {
          let temp = new node();
          temp.value = num;
          current.leftChild = temp;
          current = current.leftChild
        }
      }
      if (current.rightChild === null) {
        if (num > current.value) {
          let temp = new node();
          temp.value = num;
          current.rightChild = temp;
          current = current.rightChildChild
        }
      }
    });
    console.log(sortedArr);
    console.log(middle);
    return middle;
  }
}

const thang = new tree([9, 4, 9, 1, 2, 6, 8, 2, 4, 6]);

//first, get the arr during creationg of the tree
// instantly run through buildtree
//sort input numerically
//splice out the middle
// make middle a node with value of middle
//set middle node as root of the tree
// iterate through new array comparing against root node value
// if less, make node with right child as root.
// make middle nodes left child this node
// if more, make node with left child as root.
// make middle nodes right child this node
// from now on check if node has child.
// if so, move in to next node, until child is null
// expand.
