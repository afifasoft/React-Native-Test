const o = {
	a : "a",
	b : "b",
	obj : {
	   key : "key"
	}
}

const o2 = o;

//o.a = "new value";

console.log(o2.a);

const o3 = Object.assign({}, o);

o3.a = "new value";

console.log(o3.a);


const o4 = Object.assign({}, o);
//o4.obj.key = "newnew value";


console.log(o4.obj.key);


// deep copy  -- No object inside object
// shallo copy -- Object inside object
function deepCopy(obj) { 
	// check if values are objects
	// if so.copy that object (deep copy)
	// else return the value
	const keys = Object.keys(obj);
	
	const newObject = {};
	
	for (let i = 0; i < keys.length; i++) {
		const key = keys[i];
		if (typeof obj[key] === 'object') {
			newObject[key] = deepCopy(obj[key])
		} else {
			newObject[key]  = obj[key]
		}
	}

	return newObject;
} 

const o5 = deepCopy(o);
o.obj.key  = "neww2 value!";
console.log(o5.obj.key)
