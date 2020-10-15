import React from 'react';
import ReactDom from 'react-dom'
/* 
 受控组件： 
     指的是DOM元素的值受react状态state 控制

 非受控组件：
     指的是这个DOM元素（input textare这一类的DOM元素）的值存在DOM元素的内部，不受react的控制

*/
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'hello' }

  }
  add = () => {
    // console.log(this.num.value);
    //问题，那么这个值保存在哪里？从哪里取的就是存在哪里  存在真实DOM中（ input输入框中）
    // console.log(this.state.text)

  }
  hanleChange = (event) => {
    //event 事件对象

    this.setState({ text: event.target.value })
    console.log(event.target.value)
  }
  render() {
    return (
      <>
        {/* <input defaultValue={this.state.text} />设置一个默认值，但是不受状态控制 */}
        <input value={this.state.text} onChange={this.hanleChange} />
        {/* <input ref={e => this.num = e} /> 这里是通过回调refs获取的input元素 */}
        <button onClick={this.add}>add</button>
      </>
    ) 
  }
}
/*  
value  onchange函数，
       input框中要么不设置value属性，如果设置了value属性，一定要设置onchange函数，要不然value就变成
       只读属性 不能改变。onchange函数=》只要state发生改变，就会触发 
       onchange的功能是让input框中的value值跟状态state同步

*/
ReactDom.render(<Form></Form>, document.getElementById('box'))
