import React, { Component } from 'react'
import PropTypes from 'prop-types'
/* 
需求：组件title的颜色和组件content的颜色一致
*/
class Header extends Component {
    static childContextTypes = {
        name: PropTypes.string,
        age: PropTypes.number

    }
    getChildContext() {
        return {
            name: 'baba',
            age: 54
        }
    }
    render() {
        return (
            <div style={{ border: '3px solid green', padding: '5px' }}>
                header
                <Title></Title>
            </div>
        )
    }

}
class Title extends Component {
    //传递数据的组件中有什么属性，接受数据的组件中就有什么 属性
    //子组件接收数据 这里的属性可少不可多
    static contextTypes = {
        color: PropTypes.string,
        // setColor: PropTypes.func,可要可不要
        name: PropTypes.string,
        age: PropTypes.number

    }
    render() {
        console.log(this.context)
        return (
            <div style={{ border: '3px solid orange', padding: '5px' }} >

                我是小宝宝
            </div>
        )
    }

}
class Main extends Component {

    render() {
        return (
            <div style={{ border: '3px solid blue', padding: '5px', margin: '5px 0 0 0' }}>
                Main
                <Content></Content>
            </div>
        )
    }

}
class Content extends Component {

    render() {
        return (
            <div style={{ border: '3px solid orange', padding: '5px' }}>
                content
            </div>
        )
    }

}
export default class Page extends Component {
    constructor() {
        super()
        this.state = { color: 'purple' }
    }
    //定义子上下文对象的属性和类型
    static childContextTypes = {
        color: PropTypes.string,
        setColor: PropTypes.func

    }
    //返回或者说定义真正的上下文
    getChildContext() {
        return {
            color: this.state.color,
            setColor: this.setColor,
        }
    }
    setColor = (color) => {
        this.setState({ color })
    }
    render() {
        return (
            <div style={{ border: '3px solid red', padding: '5px' }}>
                page
                <Header>
                    <Title></Title>
                </Header>
                <Main>
                    <Content></Content>
                </Main>
            </div>
        )
    }
}

/*
在某些场景中，你想在整个组件书中传递数据，但是不想手动一层层去传递。这个时候
可以在react中使用强大的conText API解决问题

*/