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
  });
});
