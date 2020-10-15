class Component {
    constructor(props) {
        this.props = props
    }
    // createDOMFromDOMString(domString) {
    //     let div = document.createElement('div');
    //     div.innerHTML = domString;
    //     this.domElement=div.children[0];

    //     return this.domElement;
    // }
    setState(partcialState) {
        this.state = Object.assign(this.state, partcialState)
        //所以setState不仅有修改状态功能，还有渲染界面功能
        let oldElement = this.domElement;
        let newElement = this.renderElement();
        oldElement.parentElement.replaceChild(newElement, oldElement)
    }
    //把一个DOM的模板字符串转成一个真实的DOM结构
    renderElement() {
        let domString = this.render();
        let div = document.createElement('div');
        div.innerHTML = domString;
        this.domElement = div.children[0];
        // this.domElement.addEventListener('click', this.add.bind(this))
        this.domElement.component = this;
        return this.domElement
    }
    mount(container) {
        //container是父节点 
        container.appendChild(this.renderElement())
    }

}
window.trigger = function (event, method) {
    event.target.component[method].call(event.target.component)
}
class counter extends Component {
    constructor(props) {
        super(props)
        this.state = { num: 0 }
    }

    add() {
        this.setState({ num: this.state.num + 1 })

    }
    render() {
        return (
            `
        <button onclick="trigger(event,'add')" >
        ${this.props.name}:${this.state.num}
        </button>
    `
        )

    }
}
/*
模板字符串是加不了事件的，需要根据模板字符串生成DOM结构

渲染节点实现更新~
缺点：代码冗余 不能复用
所以可以把一些可以复用的逻辑抽到父类里面


事件委托，在react里面 所有的节点都会把它的事件委托给document
*/