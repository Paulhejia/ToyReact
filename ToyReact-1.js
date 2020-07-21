// ToyReact.createElement
export let ToyReact = {
  createElement(type, attribute, ...children) {
    // console.log(type, attribute, children)
    const el = document.createElement(type)
    console.log('el: ', el);
    for(let i in attribute) {
      el.setAttribute(i, attribute[i]);
    }    
    if(children.length > 0) {
      function generateChildren(children) {
        for(let i in children ) {
          let child = children[i];
          // console.log('child:', child instanceof HTMLElement);
          if(child instanceof HTMLElement) {

            el.appendChild(child)
          }
          else if(typeof child === 'string') {
            el.appendChild(document.createTextNode(child));
          }
        }
        return el;
      }
      generateChildren(children);
    }    
    // console.log(el);
    return el;
  }
}