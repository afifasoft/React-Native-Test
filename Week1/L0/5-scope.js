add();	// Hoisted
console.log(g); // Hoisting...
h = 10;
const thisIsAConst = 50;

//thisIsAConst = 100;  // Error 
//thisIsAConst++;	// Error

let sum = 20;
//sum++;

//sum = 30;

const obj = {};
//obj = {};

obj.a = 'a';

console.log(obj.a);

var g = 50;
g = 51;

var g = 'same varibale name'; // shadowing...
console.log(g);

function add() {
	console.log('function declaration');
}
