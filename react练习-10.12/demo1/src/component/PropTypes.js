import React, { Component } from 'react'
import PropTypes from 'prop-types'

//校验属性类型
let props = {
    name: 'manoj',//字符串 必填
    age: 10,//数字 必填 而且不能小于18
    gender: 'male',//只能是男或女\
    idMarried: true,//是否已婚 这是一个布尔值
    hobby: ['eating', 'love wife'],//字符串数组
    position: { x: 100, y: 100 }//拥有x y属性的对象
}

export default class Person extends Component {
    //设置默认属性
    static defaultValue = {
        isMarried: false
    }
    static propsTypes = {
        name: PropTypes.string.isRequired,//isRequired必填
        age: PropTypes.number.isRequired,
        gender: PropTypes.oneOf(['male', 'female']),
        isMarried: PropTypes.bool,
        hobby: PropTypes.arrayOf(PropTypes.string),
        //shape 可以指定一个对象由特定的类型值组成  objectOf也可以
        position: PropTypes.shape({
            x: PropTypes.number,
            y: PropTypes.number
        }),
        age(props, propName, componentName) {
            //自定义校验规则
            if (props[propName] < 18) {
                return new Error('error')
            }
        }

    }
    render() {
        return (
            <div>
                {this.props.age}
            </div>
        )
    }
}
/* 
有属性校验，没有状态校验。因为状态是组件内部自己定义的 跟外部没有关系
props是别人给的

*/