function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  })
}

var person = {
	name: 'ww',
	age: '25'
}


for(let key in person) {
	def(person, key, person[key])
}

console.log(person)
console.log(person.name)
console.log(person.age)