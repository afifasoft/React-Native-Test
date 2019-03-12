const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count')


// <li>
//	<input type="checkbox" />
//	<button>delete</button>
//	<span>text</span>
// </li>

function createTodo() {
	const li = document.createElement('li');
	li.innerHTML = '
	<input type="checkbox" />
	<button>delete</button>
	<span>text</span>
	'
}


function newTodo() {
	// get text
	// create li
	// create input
	// create button 
	// create span
	// update count
}

function deleteTodo() {
	// find the todo to delete
	// delete
	// update the count
}
