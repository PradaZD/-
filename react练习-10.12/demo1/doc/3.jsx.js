import React from 'react';
import ReactDom from 'react-dom';
/* 
我们可以把页面分成若干个独立的部分，单独编写，单独维护

react中看到<>可以识别成html,看到{}可以识别成jsx表达式

函数组件

1.一个返回普通react元素的函数就是一个合法的react组件
2.组件需要返回一个并且仅能返回一个react根元素
3.组件的名称必须大写字母开头

函数组件渲染过程
1.收集属性对象props  {name='zengdan' age=19}
2.会把props对象传入Welcom函数，并得到一个返回值 react元素


类组件渲染过程：
1.收集属性对象props  {name='zengdan' age=19}
2.把props对象传入Welcom类的构造函数，并得到welcome的实例 
3.调用render方法获得返回值，返回值也是一个react元素
   

函数组件没有实例 类有实例，所以可以通过this.props拿到属性
*/

function Welcome1(props) {
	/* 解构 {name,age} */
	return <div>
		<h1>姓名： {props.name}</h1>
		<h1>年龄： {props.age}</h1>
	</div>
}
class Welcome extends React.Component {
	constructor(props){
		super(props);//this.props=props
	}
	render() {
		return <div>
			{this.props.name} {this.props.age}
		</div>
	}
}
let data = { name: 'zengdan', age: 10 }
ReactDom.render(<Welcome {...data}></Welcome>,
	document.getElementById('root'));

