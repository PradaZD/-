class Parent {
	constructor() {
		this.name = 'bba'
	}
	static b() {
		return 2
	}
	eat() {
		console.log('chifabn')
	}
}

class Child extends Parent{//要求继承父亲的私有和公有
	constructor() {
		//构造器 天生就有
		super();//Parent.call(this)
		this.age = 9;//私有属性 
	}
	static a() {//属于类上的方法
		return 1
	}
	smoking() {//原型上的方法
		console.log('hello')
	}
}
let c = new Child();
console.log(c.smoking)
/*
注意：类不是对象，属性与方法之间没有逗号 没有分号 就是没有符号
类有三种属性：私有属性 原型上的属性 静态属性或者方法（es6只支持静态方法 没有静态属性）

1.类只能new 来调用

*/