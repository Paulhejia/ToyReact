;
import ToyReact, {Component} from './ToyReact-vdom.js';

class MyComponent extends Component {
  render() {
    return (
      <div>
        <span>hi</span>
        <span>paul</span>
        <span>!!!</span>
      </div>
    )
  }
}

ToyReact.render(<MyComponent id="ida" />, document.body);

// import { ToyReact } from './ToyReact-dom.js';

// const a = <div name="lesson1" >
//   <span>1</span>
//   <span>2</span>
//   <span>3</span>
// </div>

// console.log(a);