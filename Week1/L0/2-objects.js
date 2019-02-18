const o = new Object();
o.firstName = "Abdul";
o.lastName = "Atif";
o.isTeaching = true;
o.greet = function() {
	console.log("hi!");
}

const o2 = {};
o2.firstName = "Abdul";
o2["lastName"] = "Atif";
const key = "isTeaching";
o2[key] = true;
o2["greet"] = function() {
	console.log("hi!");
}


const o3 = {
	firstName : "Abdul",
	lastName : "Atif",
	isTeaching : true,
	greet	: function () {
		console.log('hi!');
	},
	
	address : {
		street : 'Main st.',
		number : 123
	}
};

console.log(o3.address);
console.log(o3.address.number);
