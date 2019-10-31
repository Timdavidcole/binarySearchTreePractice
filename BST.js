class Node (data, left = null, right = null){
    constructor (){
        this.data = data;
        this.left = left;
        this.right = right
    }
}

class BST () {
    constructor(){
        this.root = null
    }

    add(data) {
        const node = this.root
        if (node === null) {
            node.data = new Node(data)
        }
    }
}

bst = new BST()
