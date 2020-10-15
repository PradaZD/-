import React from 'react';
import ReactDom from 'react-dom';

/* 
   状态state的更新可能是异步的  怎么理解？？
   

解决this指针的三种方法
1.this.add.bind(this)  把add方法里面的this指针绑定为组件实例
2.使用匿名函数 箭头函数中的this 就是它父级函数里面的this指向
3.给类的实例增加一个add属性，而这个属性里面的this指针绑定组件实例
*/
class Counter extends React.Component {
	constructor(props) {
		super(props);

		this.state = { number: 0 }
	}
	add = () => {
		// console.log(this);
		this.setState({
			number: this.state.number + 1
		})
	}
	del = () => {
		if (this.state.number <= 0) {
			this.state.number= 0
		}else{
			this.setState({
				number:this.state.number-1
			})
		}
	}
	render() {
		return (
			<>
				<p>{this.state.number}</p>
				{/* 注意这里onClick是属性，所以需要驼峰命名法；{}是函数的引用地址，注意不是字符串的形式 */}
				<button onClick={this.add}>+</button>
				<button onClick={this.del}>-</button>
			</>

		)
	}
}
ReactDom.render(<Counter />, document.getElementById('root'));

