  import React from 'react';
import ReactDom from 'react-dom'

class Welcome extends React.Component {
  constructor() {
    super();
    this.textInpA = null;
    this.textInpB=null;
    this.textInpRes=null;
    this.getInpA = e => {
      this.textInpA = e;
    }
    this.getInpB = e => {
      this.textInpB = e;
    }
    this.getInpResult=e=>{
      this.textInpRes = e;
    }
    // console.log(this.setTextInputRef())
  }
  add=()=>{
    let valA=this.textInpA.value;
    let valB=this.textInpB.value;
    this.textInpRes.value=Number(valA)+Number(valB)
    
  }
  render() {
    return (
      <>
        <input ref={this.getInpA}/>+ <input ref={this.getInpB}/><button onClick={this.add}>=</button><input ref={this.getInpResult}/>
      </>
    )
  }
}
ReactDom.render(<Welcome></Welcome>, document.getElementById('box'))
/* class Welcome extends React.Component {
  constructor(props) {
    super(props);

    this.textInput = null;
   // TextInput 是一个允许用户输入文本的基础组件
    this.setTextInputRef = element => {
      console.log(element)//i打印出来的是input输入框
      this.textInput = element;
    };

    this.focusTextInput = () => {
      // 使用原生 DOM API 使 text 输入框获得焦点
      if (this.textInput) this.textInput.focus();
    };
  }

  componentDidMount() {
    // 组件挂载后，让文本框自动获得焦点
    this.focusTextInput();
  }

  render() {
    // 使用 `ref` 的回调函数将 text 输入框 DOM 节点的引用存储到 React
    // 实例上（比如 this.textInput）
    return (
      <div>
        <input
          type="text"
          ref={this.setTextInputRef}
        />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
      </div>
    );
  }
} */
