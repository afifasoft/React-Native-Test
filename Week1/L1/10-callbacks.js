function doSomething(callback) {
	callback(1)

}

doSomething(console.log)


function doSomethingAsync(callback) {
	setTimeout(function () { callback(3) }, 1000);

}

doSomethingAsync(console.log);
