import React from 'react';
import ReactDom from 'react-dom'
// import LifeCycle from './component/LifeCycle'
// import NewLifeCycle from './component/NewLifeCycle'
// import GetDerivedStatefFromProps from './component/GetDerivedStatefFromProps';
// import GetSnapShotBeforeUpdate from './component/GetSnapShotBeforeUpdate'
import OldConText from './component/OldConText'
// import Person from './component/PropTypes'

// //校验属性类型
// let props = {
//     name: 'manoj',//字符串 必填
//     age: 10,//数字 必填 而且不能小于18
//     gender: 'male',//只能是男或女\
//     idMarried: true,//是否已婚 这是一个布尔值
//     hobby: ['eating', 'love wife'],//字符串数组
//     position: { x: 100, y: 100 }//拥有x y属性的对象
// }


ReactDom.render(<OldConText/>, document.getElementById('box'))
