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
    let current = this.root;
    let insertee = new node();
    insertee.value = num;

    while (true) {
      if (this.root === null) {
        this.root = insertee;
        return;
      }
      if (current.value === insertee.value) return;
      if (current === null) return false;
      if (insertee.value > current.value) {
        if (current.rightChild === null) {
          current.rightChild = insertee;
          return;
        }

        current = current.rightChild;
      } else {
        if (current.leftChild === null) {
          current.leftChild = insertee;
          return;
        }
        current = current.leftChild;
      }
    }
  }

  deleteItem(value, node = this.root) {
    if (node === null) {
      return node;
    }
    if (node.value > value) {
      node.leftChild = this.deleteItem(value, node.leftChild);
    } else if (node.value < value) {
      node.rightChild = this.deleteItem(value, node.rightChild);
    } else {
      if (node.leftChild === null) {
        return node.rightChild;
      }
      if (node.rightChild === null) {
        return node.leftChild;
      }
      let next;
      next = node.rightChild;
      while (next !== null && next.leftChild !== null) {
        next = next.leftChild;
      }
      const curr = next;

      node.value = curr.value;
      node.rightChild = this.deleteItem(curr.value, node.rightChild);
    }
    return node;
    // let current = this.root;
    // let previous;
    // let next;
    // while (true) {
    //   if (current === null) return;
    //   if (current.value === value) {
    //     if (typeof previous === "undefined") {
    //       return "Not yet.";
    //     }
    //     if (current.rightChild === null && current.leftChild === null) {
    //       if (current.value > previous.value) {
    //         previous.rightChild = null;
    //         return;
    //       } else {
    //         previous.leftChild = null;
    //         return;
    //       }
    //     }
    //     if (current.rightChild === null) {
    //       if (current.value > previous.value) {
    //         previous.rightChild = current.leftChild;
    //         return;
    //       } else {
    //         previous.leftChild = current.leftChild;
    //         return;
    //       }
    //     }
    //     if (current.leftChild === null) {
    //       if (current.value > previous.value) {
    //         previous.rightChild = current.rightChild;
    //         return;
    //       } else {
    //         previous.leftChild = current.rightChild;
    //         return;
    //       }
    //     }
    //     if (current.value > previous.value) {
    //       next = current.rightChild;
    //       if (next.leftChild === null && next.rightChild === null) {
    //         previous.rightChild = next;
    //       }
    //       if (next.leftChild === null) {
    //         previous.rightChild = next;
    //         next.leftChild = current.leftChild;
    //       }
    //       if (current.leftChild.value > next.leftChild.value) {
    //         next.rightChild = current.leftChild;
    //         previous.rightChild = next;
    //       } else {
    //         next = next.leftChild;
    //       }
    //     } else {
    //       next = current.rightChild;
    //       if (next.leftChild === null && next.rightChild === null) {
    //         previous.leftChild = next;
    //       }
    //       if (next.leftChild === null) {
    //         previous.leftChild = next;
    //         next.leftChild = current.leftChild;
    //       }
    //       if (current.leftChild.value > next.leftChild.value) {
    //         next.rightChild = current.leftChild;
    //         previous.leftChild = next;
    //       } else {
    //         next = next.leftChild;
    //       }
    //     }
    //   }
    //   if (value < current.value) {
    //     previous = current;
    //     current = current.leftChild;
    //   } else {
    //     previous = current;
    //     current = current.rightChild;
    //   }
    // }
    // return false;
  }

  preOrderForEach(node = this.root) {
    if (node === null) return;

    console.log(node.value);
    this.preOrderForEach(node.leftChild);
    this.preOrderForEach(node.rightChild);
  }
  postOrderForEach(node = this.root) {
    if (node === null) return;

    this.postOrderForEach(node.leftChild);
    this.postOrderForEach(node.rightChild);
    console.log(node.value);
  }
  inOrderForEach(node = this.root) {
    if (node === null) return;

    this.inOrderForEach(node.leftChild);
    console.log(node.value);
    this.inOrderForEach(node.rightChild);
  }
  levelOrderForEach() {
    let rNode = this.root;
    let arr = [];
    if (rNode === null) {
      return;
    }
    arr.push(rNode);
    while (arr.length > 0) {
      if (arr[0].leftChild !== null) {
        arr.push(arr[0].leftChild);
      }
      if (arr[0].rightChild !== null) {
        arr.push(arr[0].rightChild);
      }
      console.log(arr[0].value);

      arr.shift();
    }
    // add node to array
    // add node children to array
    // print node value
    // remove node
    //repeat
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

thang.prettyPrint();
console.log(thang.includes(0));
console.log(thang.includes(7));
console.log(thang.includes(1));
console.log(thang.includes(11));
console.log(thang.includes(9));
thang.insert(5);
thang.insert(7);
thang.insert(9);
thang.insert(10);
thang.insert(11);
thang.deleteItem(4);
thang.deleteItem(2);
thang.deleteItem(8);
thang.deleteItem(9);
thang.prettyPrint();
//thang.preOrderForEach();
thang.postOrderForEach();
//thang.inOrderForEach();
//thang.levelOrderForEach();

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
