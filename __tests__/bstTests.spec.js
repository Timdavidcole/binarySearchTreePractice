import Node from "../Node";
import BST from "../BST";

describe("Node", () => {
  it("should be created with a data element", () => {
    const node = new Node(14);
    expect(node.data).toEqual(14);
  });
  it("can be created with a left pointer", () => {
    const node1 = new Node(14);
    const node2 = new Node(3);
    const node3 = new Node(5, node1, node2);
    expect(node3.left.data).toEqual(14);
  });
  it("can be created with a right pointer", () => {
    const node1 = new Node(14);
    const node2 = new Node(3);
    const node3 = new Node(5, node1, node2);
    expect(node3.right.data).toEqual(3);
  });
});

describe("BST", () => {
  describe("constructor", () => {
    it("should be created with a null root", () => {
      const bst = new BST();
      expect(bst.getRoot()).toEqual(null);
    });
  });

  describe("add", () => {
    test("should make a new root if root is empty", () => {
      const bst = new BST();
      bst.add(4);
      expect(bst.getRoot().data).toEqual(4);
    });
    test("should add new node to left of root if data is less than root", () => {
      const bst = new BST();
      bst.add(4);
      bst.add(2);
      expect(bst.getRoot().left.data).toEqual(2);
    });

    test("should add new node to right of root if data is less than root", () => {
      const bst = new BST();
      bst.add(4);
      bst.add(6);
      expect(bst.getRoot().right.data).toEqual(6);
    });

    test("should add new node twice to the left if lower than previous nodes", () => {
      const bst = new BST();
      bst.add(4);
      bst.add(3);
      bst.add(2);
      expect(bst.getRoot().left.left.data).toEqual(2);
    });

    test("should add new node twice to the right if lower than previous nodes", () => {
      const bst = new BST();
      bst.add(4);
      bst.add(5);
      bst.add(6);
      expect(bst.getRoot().right.right.data).toEqual(6);
    });

    test("should add new node to the right then left", () => {
      const bst = new BST();
      bst.add(4);
      bst.add(6);
      bst.add(5);
      expect(bst.getRoot().right.left.data).toEqual(5);
    });

    test("should add new node to the left then right", () => {
      const bst = new BST();
      bst.add(4);
      bst.add(2);
      bst.add(3);
      expect(bst.getRoot().left.right.data).toEqual(3);
    });
  });
});
