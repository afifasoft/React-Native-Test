// maps and filter 
const x = [0, 1, 2, 3];


function addOne(number) {
	return number + 1;
}

console.log( addOne(1) );
console.log( x.map( addOne ));


function isGreaterThanOne ( num ) {
	return num > 1;

}


console.log( isGreaterThanOne(100) );
console.log( isGreaterThanOne(1) );

console.log( x.filter( isGreaterThanOne) );


function add(x, y) { return x + y }

console.log( add(1, 2) );

console.log( x.reduce(add));
