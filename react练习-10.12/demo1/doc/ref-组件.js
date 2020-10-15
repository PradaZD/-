import React from 'react';
import ReactDom from 'react-dom'
/* 
 1.ref在DOM元素身上使用
 2.ref在react 组件身上使用

 总结：ref既可以引用一个DOM元素，也可以引用一个组件

 函数组件不能直接使用ref


*/
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();

  }
  getFocus = () => {
    //问题：怎么在组件Form中拿到组件TextInput中的DOM元素
    // console.log(this.textInput.current.textInput.current );//获得了render里面组件里面的DOM元素
    // let inp = this.textInput.current.textInput.current;
    // inp.focus()
  }
  render() {
    return (
      <>
        <TextInput3 ref={this.textInput}></TextInput3>
        <button onClick={this.getFocus}>focus</button>
      </>
    )
  }
} 
//函数组件不能直接使用ref，需要借助React.forwardRef()
let TextInput3 = React.forwardRef(TextInput2)
function TextInput2(props, ref) {
  return <input ref={ref}></input>
}
// function forwardRef(funComponent){
//   //参数是一个函数组件，返回值也是函数组件
//   return function(){

//   }
// }
class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();

  }
  render() {
    return <input ref={this.textInput}></input>
  }
}
ReactDom.render(<Form></Form>, document.getElementById('box'))
