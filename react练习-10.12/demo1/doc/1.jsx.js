import React from 'react';
import ReactDom from 'react-dom';
/* 
jsx javascript+xml 是一种把js和html混合书写的一种语法
JSX里面如果想使用一个变量，我们需要把它放在一个大括号中{}


*/
let style = { color: 'blue' }
let name = 'manoj happy birthday'
function getName() {
    return 'love you'
}
let element = React.createElement("h1", {
    id: "mytitle",
    className: "titlename",
    style: {
        style: 'red'
    }
}, "'hello world'", React.createElement("span", null, "'hahah'"));
// console.log(element); 
// ReactDom.render(<h1 id='mytitle' className='titlename' style={style}>
//     hello {getName()}
// </h1>, document.getElementById('root'));
console.log(JSON.stringify(element));
ReactDom.render(element,
    document.getElementById('root'));

//react元素 就是一个普通的js对象，下面就可以理解为虚拟DOM
/* 
react元素就是一个简单的js对象，一个react元素和界面上的一部分DOM对应，描述了这部分DOM的结构和渲染效果；
一般我们通过jsx语法创建react元素

*/


    /* 
    {
	"type": "h1",
	"props": {
		"id": "mytitle",
		"className": "titlename",
		"style": {
			"style": "red"
		},
		"children": ["'hello world'", {
			"type": "span",
			"props": {
				"children": "'hahah'"
			},
			
		}]
	}

}
    
    
    
    */