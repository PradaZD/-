import React from 'react';
import ReactDom from 'react-dom';

/* 
	元素的更新
	react元素一旦创建，就只是可读的，不能改变
	react特点：
			 会进行DOM比对。（虚拟DOM）
			 只会渲染变化的东西，不变化的东西是不会渲染的（节约性能，减少DOM操作）
			 

*/
// let clock = <div><span>时间:</span>{new Date().toLocaleTimeString()}</div>

// ReactDom.render(clock, document.getElementById('root'));
// ReactDom.render(clock,
// 	document.getElementById('root'));

//每隔一秒 创建一个新的元素，渲染到页面中去
setInterval(function () {
	let clock = <div>
		<span>时间:</span>
		{new Date().toLocaleTimeString()}
	</div>
	ReactDom.render(clock,
		document.getElementById('root'));
}, 1000)