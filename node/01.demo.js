
/* 
模块化
    在node中，一个js文件就是一个模块
    在node中，每一个js文件中的js代码都是独立运行在一个函数中的，也就是说代码都是私有的，
    而不是全局作用域，所以一个模块中的变量和函数在其他模块中是无法访问的

    在node中，通过require（）函数引入外部的模块
    require（）可以传递一个文件的路径作为参数，node将会自动根据该路径来引入外部模块
    这里路径，如果使用相对路径，必须以.或者..开头

    使用require()引入模块以后，改函数会返回一个对象，这个对象代表的就是引入的模块

    我们使用require()引入外部模块时，使用的就是模块标识，我们可以通过模块标识来找到指定的模块
    模块分为两大类：
       核心模块
           -由node引擎提供的模块
           核心模块的标识就是模块的名字
       文件模块
           -由用户自己创建的模块
           -文件模块的标识就是文件的路径（绝对路径，相对路径）
             相对路径使用.或..开头




    

*/
var fs = require('fs');//这是node提供的模块，直接写名字 不用写路径
console.log('hello')
// var a=1,
// b='zengdan';
exports.a = 1;
exports.b = 'zengdan';

/*
每个模块对别的模块来说都是封闭的，所以如果希望模块里面的内容被外面引用，我们需要将内容暴露出去

export 向外部暴露变量和
*/
