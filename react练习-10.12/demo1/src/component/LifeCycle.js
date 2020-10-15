import React, { Component } from 'react'

export default class LifeCycle extends Component {
    static defaultProps = {
        name: '计数器'
    }
    constructor(props) {
        super(props)
        this.state = { num: 0 }
        console.log('1.初始化props and state')
    }
    
    componentWillMount() {
        //2.组件将要挂载 把虚拟DOM变成真实Don的过程叫做挂载
        console.log('2.组件将要挂载')
        
    }
    //一般是在componentDidMount中执行副作用，进行异步操作
    //副作用：网络请求 改变DOM 定义外部的一些数据
    componentDidMount() {
        console.log('4.组件挂载完成')
        // console.log(this)组件实例
    }
    shouldComponentUpdate() {
        console.log('5.询问组件是否需要更新')
        return true;
    }
    componentWillUpdate() {
        console.log('6.组件将要更新')
    }
    componentDidUpdate() {
        console.log('7.组件更新完毕')
    }
    add = () => {
        this.setState({ num: this.state.num + 1 })
    }
    render() {
        /* 虚拟DOM变成真实DOM，渲染到页面中去 */
        console.log('3.render渲染，也就是挂载')
        return (
            <div style={{ border: '5px solid red', padding: '5px' }}>
                <p>{this.state.num}</p>
                <button onClick={this.add} >+</button>
                {this.state.num % 2 === 0 ? <SubCounter number={this.state.num}></SubCounter> : null}
                {/* <SubCounter number={this.state.num}></SubCounter> */}
            </div>
        )
    }
}
class SubCounter extends Component {
    constructor(props) {
        super(props)
        this.state = { number: 0 }
    }
    //调用此方法的时候会把新的属性对象和新的状态对象传过来
    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState)
        if (nextProps.number % 3 === 0) {
            return true
        } else {
            return false
        }
    }
    componentWillReceiveProps() {
        console.log('子组件： componentWillReceiveProps')
    }
    componentWillUnmount() {
        /* 
        当页面中不需要这个组件的时候 组件卸载，那页面中什么时候不需要这个组件呢？
        */
        console.log('组件将要卸载')
    }
    render() {

        return (
            <div style={{ border: '2px solid blue', margin: '5px 0 0 0 ' }}>
                <p>{this.props.number}</p>
            </div>
        )
    }
}
/* 
卸载：意思是组件实例被销毁了
如果子组件不写构造函数constructor，会默认调用父函数，但是如果写了constructor 就必须写super

为什么异步操作不放在componentWillMount中，而要放在componentDidMount中，数据请求不是越早发出越好么？
原因：
    componentWillMount在渲染render过程中会执行多次
    componentDidMount在渲染过程中只会执行一次


 
*/