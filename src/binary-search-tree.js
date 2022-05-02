const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.pointer = null;
  }

  root() {
    return this.pointer;
  }

  add(data) {
    this.pointer = addNode(this.pointer, data);

    function addNode(node, data){
      if (!node) {
        return new Node(data)
      }

      if (node.data === data) {
        return node
      }

      if (data < node.data) {
        node.left = addNode(node.left, data);
      } else if (data > node.data) {
        node.right = addNode(node.right, data);
      }

      return node;
    }

    return this.pointer;
  }

  has(data) {
    return searchTree(this.pointer, data);
    function searchTree(node, data){
      if (!node) {
        return false
      }

      if (node.data === data) {
        return true
      }

      if (data < node.data) {
        return searchTree(node.left, data);
      } else {
        return searchTree(node.right, data);
      }
    }
  }

  find(data) {
    function findTree(node, data) {
      if (!node) {
        return null
      }

      if (node.data === data) {
        return node;
      }

      if (node.data < data) {
        return findTree(node.right, data);
      }

      if (node.data > data) {
        return findTree(node.left, data);
      }
    }

    if (!this.pointer) {
      return null;
    }
    else {
      return findTree(this.pointer, data);
    }
  }

  remove(data) {
    this.pointer = removeNode(this.pointer, data);
    function removeNode(node, data) {
      if (!node) {
        return null
      }

      if (data < node.data){
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if(!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          return node.right;
        }
        if (!node.right) {
          return node.left;
        }
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeNode(node.right, minRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.pointer) {
      return null;
    }

    let node = this.pointer;
    while (node.left){
      node = node.left;
    }

    return node.data;
  }

  max() {
    if (!this.pointer) {
      return null;
    }

    let node = this.pointer;
    while (node.right){
      node = node.right;
    }

    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};