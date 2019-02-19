// stack size --- 

function recurse() {
	console.log('recursion!');
	
	return recurse();
}

recurse();
