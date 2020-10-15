import React from 'react';
import ReactDom from 'react-dom';


class Clock extends React.Component {
	constructor(props) {
		super(props);
		//在构造函数中， 是唯一可以给this.state设置初始值的地方
		//状态state就是一个普通对象
		this.state = { date: new Date().toLocaleTimeString() }
	}
	//组件挂载完成后调用,例如讲新创建的元素挂载到一个节点上
	componentDidMount() {
		this.$timer = setInterval(() => {
			//不能直接修改state，必须通过setstate
			//setstate有两个功能：1.修改state；2、重新render 改变界面的显示效果
			this.setState({ date: new Date().toLocaleTimeString() })
		}, 1000)
	}
	render() {
		return <div>时间：{this.state.date}</div>
	}
}
ReactDom.render(<Clock></Clock>,
	document.getElementById('root'));

