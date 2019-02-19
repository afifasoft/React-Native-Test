function a() {
	console.log('hi');
}

function b() {
	a();
}

function c() {
	b();	
}

c();


function addOne(num) {
	throw new Error('oh no, an error!');
}

function getNum() {
	return addOne(10);
}

function c1() {
	console.log(getNum() + getNum());
}

c1();


