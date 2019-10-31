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
    }
  }
}
