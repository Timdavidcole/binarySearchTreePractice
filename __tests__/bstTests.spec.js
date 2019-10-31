import Node from "./BST.js";

describe("Node", () => {
  test("it should be created with a data element", () => {
    const node = new Node(14);
    expect(node.data).toEqual(14);
  });
});
