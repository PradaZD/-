import React, { Component } from 'react'

export default class Counter extends Component {
    constructor() {
        super()
        this.state = { num: 0 }
    }
    add = () => {
        this.setState({ num: this.state.num + 1 })
    }
    render() {
        return (
            <div>
                <p>{this.state.num}</p>
                <button onClick={this.add}>+</button>
                <SonCounter number={this.state.num}></SonCounter>
            </div>
        )
    }
}
class SonCounter extends Counter {
    constructor() {
        super()
        this.state = { text: 'hello' }

    }
    //根据新的属性对象派生状态对象
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.number % 2 === 0) {
            return { name: 'manoj' }

        } else {
            return { name: 'zengdan' }
        }
    }
    render() {
        return (
            <div>
                {this.state.text} {this.state.name}
            </div>
        )
    }
}