const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add( data ) {
    function  addNode( data ) {
      return {
        'data': data,
        'left': null,
        'right': null
      }
    }
    function addNodeToTheTree(node, data ) {
      if (!node) {
        node = addNode(data);
        return node;   
      } else {
        if ( data > node.data ) {
          node.right = addNodeToTheTree(node.right, data);
        } else if (data < node.data) {
          node.left = addNodeToTheTree(node.left, data);
        }
        return node;
      }    
    }
    this.rootNode = addNodeToTheTree(this.rootNode, data);
    return this.rootNode;
  }

  has( data ) {
    let node = this.find(data);
    return !!node;
  }

  find( data ) {
    function findNode(node, data) {
      if (!node) return null;
      if (data === node.data) {
        return node;
      }
      if (data > node.data) {
        return findNode(node.right, data);
      } else {
        return findNode(node.left, data);
      } 
    }
    let node = findNode(this.rootNode, data);
    return node;
  }

  remove( data ) {
    function removeNode(node, data) {
      if (!node) return;
      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxFromLeft = node.left;
        while (maxFromLeft.right) {
          maxFromLeft = maxFromLeft.right;
        }
        node.data = maxFromLeft.data;
        node.left =  removeNode(node.left, maxFromLeft.data);
        
        return node;
      }  
    }
    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    let curr = this.rootNode;  
    if (!curr) return null;
    
    while (curr.left) {
      curr = curr.left;
    }
    return curr.data;
  }

  max() {
    let curr = this.rootNode; 
    if (!curr) return null;
    
    while (curr.right) {
      curr = curr.right;
    }
    return curr.data; 
  }
}

module.exports = {
  BinarySearchTree
};