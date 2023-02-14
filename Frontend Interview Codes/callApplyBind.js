const person = {
	name: 'Abhideep Ghosh',
	hello: function(say) {
		console.log(`${this.name} says ${say}`);
	}
}

person.hello('hello');

const newPerson1 = {
	name: 'Abhishek Ghosh'
}

person.hello.call(newPerson1, 'hello');

const newPerson2 = {
	name: 'Arika Ghosh'
}

person.hello.apply(newPerson2,['hello']);

const newPerson3 = {
	name: 'Ghosh'
}

const newHello = person.hello.bind(newPerson3);
newHello('hello');