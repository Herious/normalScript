function realizeNew () {
	//创建一个新对象
	let obj  = {};
	//获得构造函数
	let Con = [].shift.call(arguments);
	//链接到原型（给obj这个新生对象的原型指向它的构造函数的原型）
	obj.__proto__ = Con.prototype;
	//绑定this
	let result = Con.apply(obj,arguments);
	//确保new出来的是一个对象
	return typeof result === "object" ? result : obj
}

function Person (name,age){
	this.name = name;
	this.age = age;
	this.say = function () {
		console.log("I am " + this.name)
	}
}

Person.prototype.eat = function () {
	console.log('eat')
}

Object.prototype.run = function () {
	console.log('run')
}

//通过new创建构造实例
let person1 = new Person("Curry", 18);


//通过realize()方法创造实例
let person2 = realizeNew (Person, "Curry", 18);


// for(let key in person2) {
// 	console.log(key)
// }

// console.log(person1.__proto__ === Person.prototype)
// console.log(Person.prototype.__proto__ === Object.prototype)
// console.log(Object.prototype.__proto__)


// for(let key in a) {
// 	console.log(key)
// }


