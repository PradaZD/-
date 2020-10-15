import React from 'react';
import ReactDom from 'react-dom'
/* 
状态提升：
       将共用的属性放到他们公有的父组件身上

*/

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'hi'
    }
  }
  changeText=(text)=>{
    this.setState({text})
  }
  render() {
    return (
      <>
        <input />输入框

        <Son name={this.props.name} text={this.state.text} changeText={this.changeText}></Son>
      </>
    )
  }
}
class Son extends React.Component {
  render() {
    return (
      <div style={{border:'1px solid red'}}>
        <div>text:{this.props.text} name:{this.props.name}</div>
        <input ref={e=>this.num=e}/>
        <button onClick={()=>{this.props.changeText(this.num.value)}}>改变父亲的text</button>
      </div>
    )
  }
}
ReactDom.render(<Form name='zengdan'></Form>, document.getElementById('box'))
