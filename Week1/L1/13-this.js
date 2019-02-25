const person = {
	name: 'saeed',
	greet: function() { 
		console.log(this.name);
	}
};


person.greet();

const friend = {
	name : 'SAB'
}

friend.greet = person.greet

friend.greet();

//this.name = 'yowon';
const greet = person.greet.bind({name: 'this is a bound object'});
person.greet.call({name: 'this is call function'});
person.greet.apply({name : 'this is apply function'});
greet();



const newPerson = {
	name: 'newPerson',
	greet: () => {
		console.log('hi '+ this.name);
	}
}

newPerson.greet();
