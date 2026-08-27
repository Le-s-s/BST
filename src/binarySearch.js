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
  insert(num) {
    // go down each side of node add node value to array
    // add num to array
    //sort array
    //call build again
  }

  deleteItem(value) {
    let current = this.root;
    let previous;
    while (true) {
      if (current === null) return;
      if (current.value === value) {
        if (typeof previous === "undefined") {
          return "Not yet."
        }
        if (current.rightChild === null) {
          if (current.value > previous.value) {
            previous.rightChild = current.leftChild;
          }
          if (current.value < previous.value) {
            previous.leftChild = current.leftChild;
          }
        }
        if (current.leftChild === null) {
          if (current.value > previous.value) {
            previous.rightChild = current.rightChild;
          }
          if (current.value < previous.value) {
            previous.leftChild = current.rightChild;
          }
        }
        if (current.rightChild !== null && current.leftChild !== null) {
          if (current.value > previous.value) {
            current.rightChild.leftChild = current.leftChild;
            previous.rightChild = current.rightChild;
          }
          if (current.value < previous.value) {
            current.rightChild.leftChild = current.leftChild;
            previous.leftChild = current.rightChild;
          }
        }

        return;
      }
      if (value < current.value) {
        previous = current;
        current = current.leftChild;
      } else {
        previous = current;
        current = current.rightChild;
      }
    }
    return false;
  }
  prettyPrint = (node = this.root, prefix = "", isLeft = true) => {
    let current = node;
    if (current === null || current === undefined) {
      return;
    }

    this.prettyPrint(
      current.rightChild,
      `${prefix}${isLeft ? "│   " : "    "}`,
      false,
    );
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${current.value}`);
    this.prettyPrint(
      current.leftChild,
      `${prefix}${isLeft ? "    " : "│   "}`,
      true,
    );
  };
}

const thang = new tree([9, 4, 9, 1, 2, 6, 8, 2, 4, 6]);

thang.prettyPrint();
console.log(thang.includes(9));
console.log(thang.deleteItem(9));
console.log(thang.deleteItem(2));
console.log(thang.includes(0));
console.log(thang.includes(7));
console.log(thang.includes(1));
console.log(thang.includes(11));
console.log(thang.includes(9));
thang.prettyPrint();

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
