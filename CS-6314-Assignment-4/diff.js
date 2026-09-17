/**
 * Convert a virtual DOM node (vNode) into a real DOM node.
 *
 * @param {Object|string} vNode - A virtual DOM node. Either:
 *   - string → represents a text node
 *   - object → { type: string, props: Object, children: Array }
 * @returns {Node} A real DOM Node (Element or Text)
 */
function createTree(vnode) {
  if (typeof vnode === "string") {
    return document.createTextNode(vnode);
  }

  const el = document.createElement(vnode.type);

  // set attributes
  for (const [key, value] of Object.entries(vnode.props || {})) {
    el.setAttribute(key, value);
  }

  // recursively create children
  (vnode.children || []).forEach(child => {
    el.appendChild(createTree(child));
  });

  return el;
}

/**
 * Diff two virtual DOM nodes and update the real DOM node accordingly.
 * @param {Object|string|null} oldVNode - Previous vDOM node.
 * @param {Object|string|null} newVNode - New vDOM node.
 * @param {Node|null} parentNode - parent of Real DOM node corresponding to oldVNode.
 * @param {number} index - Position of the node within parentNode.
 */
function diff(oldVNode, newVNode, parentNode, index) {

  // You may have to use some of these: appendChild(), removeChild(), 
  // replaceChild(), removeAttribute(), getAttribute(), textContent, childNodes[]
  const currentNode = parentNode.childNodes[index];

  // Case 1: both are text (string), but may be different
  if (typeof oldVNode === "string" || typeof newVNode === "string") {
    if (oldVNode !== newVNode) {
      parentNode.replaceChild(createTree(newVNode), currentNode);
    }
    return;
  }

  // Case 2: oldVnode is nullish -> append new node to parent
  if (oldVNode == null) {
    parentNode.appendChild(createTree(newVNode));
    return;
  }
  

  // Case 3: newVnode is nullish -> remove
  if (newVNode == null) {
    if (currentNode) {
      parentNode.removeChild(currentNode);
    }
    return;
  }
 
  // Case 4: Node type changed -> replace
  if (oldVNode.type !== newVNode.type) {
    parentNode.replaceChild(createTree(newVNode), currentNode);
    return;
  }
 

  // Case 5: Update attributes
  const oldProps = oldVNode.props || {};
  const newProps = newVNode.props || {};

    // remove old attributes not in new
    for (const key in oldProps) {
      if (!(key in newProps)) {
        currentNode.removeAttribute(key);
      }
    }
  

    // add/update new attributes
    for (const key in newProps) {
      if (newProps[key] !== oldProps[key]) {
        currentNode.setAttribute(key, newProps[key]);
      }
    }
 

  // Recursively diff children
  const oldChildren = oldVNode.children || [];
  const newChildren = newVNode.children || [];
  const length = Math.max(oldChildren.length, newChildren.length);
  for (let i = length - 1; i >= 0; i--) {
    diff(oldChildren[i], newChildren[i], currentNode, i);
  }
  
}
