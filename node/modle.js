/* 
在node中有一个全局对象global
全局里面的内容都是保存在global中

怎么证明模块中的代码是在一个函数中运行的？
arguments伪数组对象，函数的实参都放在这里，全局里面没有实参 没有arguments



*/

var a = 100;//把var去掉 a就是全局变量
console.log(global.a)
console.log(arguments);//存在，说明模块的代码运行在一个函数里
console.log(arguments.callee + "");//加一个字符串拼接，转化成字符串
//指向当前执行的那个函数