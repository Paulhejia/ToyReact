// // mountTo 可以理解为把 vDom 转换为 真实dom

class ElementWrapper {
  constructor(nodeType) {
    this.root = document.createElement(nodeType);
  }
  setAttribute(name, value) {
    this.root.setAttribute(name, value);
  }
  appendChild(vchild) {
    vchild.mountTo(this.root);
  }
  mountTo(parent) {
    parent.apendChild(this.root);
  }
}

class TextWrapper {
  constructor(content) {
    this.root = document.createTextNode(content);
  }
  mountTo(parent) {
    parent.appendChild(this.root);
  }
}

export class Component {
  setAttribute(name, value) {
    this[name] = value;
  }
  mountTo(parent) {
    let vDom = this.render();
    vDom.mountTo(parent);
  }
}

// ToyReact.createElement
export default {
  createElement(type, attributes, ...children) {
    // console.log(type, attribute, children)
    let element;
    if( typeof type === 'string' ) {
      element = new ElementWrapper(type);
    }
    else {
      element = new type
    }
    for(const name in attributes) {
      element.setAttribute(name, attributes[name]);
    }
    for(let child of children) {
      if(typeof child === 'string') {
        child = new TextWrapper(child);
      }
      element.appendChild(child);
    }
    return element;
  },
  render(vDom, el) {
    // vDom 是一个 ElementWrap 实例
    vDom.mountTo(el);
  },
};
