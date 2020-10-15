import React, { Component } from 'react'

export default class GetSnapShotBeforeUpdate extends Component {
    constructor(props) {
        super(props)
        this.state = { message: [] }
        this.wrapper = React.createRef();

    }
    componentDidMount() {
        setInterval(() => {
            this.setState(
                // { message: [this.state.message.length, ...this.state.message] }
                { message: [...this.state.message, this.state.message.length] }
            )
        }, 1000)
    }
    getSnapshotBeforeUpdate() {
        //返回更新前 内容的真实高度
        return this.wrapper.current.scrollHeight;
    }
    componentDidUpdate(prevProps, prevState, prevScrollHeight) {
        /* 了解JS盒子模型 */
        // this.wrapper.current.scrollTop = this.wrapper.current.scrollTop + (this.wrapper.current.scrollHeight - prevScrollHeight)
    }
    render() {
        let style = {
            height: '100px',
            width: '200px',
            border: '1px solid red',
            overflow: 'auto'
            ,

        }

        return (
            <ul style={style} ref={this.wrapper}>
                {this.state.message.map((message, index) => <li key={index}>{message}</li>)}
            </ul>
        )
    }
}

/*
<li key={index}>{message}</li>

key 属性，可以唯一标识每个li

考虑内容是往上加还是往下加
往下加不影响位置，本来就在可视区之外
往上加 新加的会将可视区内容顶下来
考虑 scrollHeight scrollTop clientHeight的位置变化


*/