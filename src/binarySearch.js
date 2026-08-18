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
    if (sortedArr.length === 0) {
      return null;
    }
    const middleIndex = Math.floor(sortedArr.length / 2);
    const middle = new node();
    middle.value = sortedArr[middleIndex];

    middle.leftChild = this.buildTree(sortedArr.slice(0, middleIndex));
    middle.rightChild = this.buildTree(sortedArr.slice(middleIndex + 1));

    console.log(sortedArr);
    console.log(middle);
    return middle;
  }
  includes(value) {
    // traverse each side of the root node until value is found.
    let current = this.root;
    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      if (value < current.value) {
        current = current.leftChild;
      } else {
        current = current.rightChild;
      }
    }
    return false;
  }
}

const thang = new tree([9, 4, 9, 1, 2, 6, 8, 2, 4, 6]);

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null || node === undefined) {
    return;
  }

  prettyPrint(node.rightChild, `${prefix}${isLeft ? "│   " : "    "}`, false);
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  prettyPrint(node.leftChild, `${prefix}${isLeft ? "    " : "│   "}`, true);
};
prettyPrint(thang);
console.log(thang.includes(0));
console.log(thang.includes(7));
console.log(thang.includes(1));
console.log(thang.includes(11));

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
