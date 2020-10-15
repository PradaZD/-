import React from 'react';
import ReactDom from 'react-dom'
/* 
    数据是向下流动的
    react是单向数据流

  1.不管是父组件还是子组件都无法知道某个组件是有状态的还是没有状态的，
     并且他们也不关心它是函数组件还是class类组件
  2.任何的状态state总是所属于特定的组件。
    state是局部的或是封装的，除了设置它的组件，其他组件都无法访问
*/
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'hi'
    }
  }
  render() {
    return (
      <>
        <input />输入框
        <Son name={this.props.name} text={this.state.text}></Son>
      </>
    )
  }
}
class Son extends React.Component {
  render() {
    return (
    <div>text:{this.props.text} name:{this.props.name }</div>
    )
  }
}
ReactDom.render(<Form name='zengdan'></Form>, document.getElementById('box'))
