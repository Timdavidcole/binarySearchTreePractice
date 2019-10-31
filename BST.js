import Node from "./Node";

export default class BST {
  constructor() {
    this.root = null;
  }

  getRoot() {
    return this.root;
  }

  add(data) {
    let node = this.root;
    if (node === null) {
      this.root = new Node(data);
      return null;
    }
    const addNode = data => {
      if (data <= node.data) {
        if (node.left === null) {
          node.left = new Node(data);
          return null;
        } else {
          node = node.left;
          addNode(data);
        }
      }
      if (data > node.data) {
        if (node.right === null) {
            node.right = new Node(data);
            return null;
          } else {
            node = node.right;
            addNode(data);
          }
      }
    };
    addNode(data);
  }
}
