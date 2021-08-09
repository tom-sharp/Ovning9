console.log("--------- TODO --------");


const buttonAdd = document.querySelector("#btnAdd");
const buttonRemove = document.querySelector("#btnRemove");
const buttonUndo = document.querySelector("#btnUndo");

const todoItem1 = document.querySelector("#todo1");
const todoItem2 = document.querySelector("#todo2");
const todoItem3 = document.querySelector("#todo3");
const todoItem4 = document.querySelector("#todo4");
const todoItem5 = document.querySelector("#todo5");
const todoItem6 = document.querySelector("#todo6");
const todoItem7 = document.querySelector("#todo7");
const todoItem8 = document.querySelector("#todo8");
const todoItem9 = document.querySelector("#todo9");
const todoItem10 = document.querySelector("#todo10");

let LastAddItem = null;
buttonUndo.hidden = true;

buttonAdd.addEventListener('click', () => {
	event.preventDefault();
	let todo = document.querySelector('#inputTodo').value;
	document.querySelector('#inputTodo').value = "";
	AddTodoItem(todo);
});

buttonRemove.addEventListener('click', () => {
	event.preventDefault();
	clearCompleted();
});

buttonUndo.addEventListener('click', () => {
	event.preventDefault();
	if (LastAddItem != null) {
		item.classList.remove("todoInActive");
		item.classList.remove("todoActive");
		item.classList.add("d-none");
	}
	buttonUndo.hidden = true;
});



todoItem1.addEventListener('mouseup', function () { toggleTodoItem(todoItem1); });
todoItem2.addEventListener('mouseup', function () { toggleTodoItem(todoItem2); });
todoItem3.addEventListener('mouseup', () => { toggleTodoItem(todoItem3); });
todoItem4.addEventListener('mouseup', () => { toggleTodoItem(todoItem4); });
todoItem5.addEventListener('mouseup', () => { toggleTodoItem(todoItem5); });
todoItem6.addEventListener('mouseup', () => { toggleTodoItem(todoItem6); });
todoItem7.addEventListener('mouseup', () => { toggleTodoItem(todoItem7); });
todoItem8.addEventListener('mouseup', () => { toggleTodoItem(todoItem8); });
todoItem9.addEventListener('mouseup', () => { toggleTodoItem(todoItem9); });
todoItem10.addEventListener('mouseup', () => { toggleTodoItem(todoItem10); });

// classes 
// todoActive, todoInActive, d-none


let todolist = [];


function AddTodoItem(todothing) {
	item = getNextFreeTodo();
	if ((typeof (todothing) !== "string") || (todothing.length < 1) || (item === null)) {
		showErrMessage("Could not add todo thing, either you have to much to do, and filled up the list or you try to fill the list with nada");
		return false;
	}
	else {
		item.innerText = todothing;
		item.classList.remove("d-none");
		item.classList.remove("todoInActive");
		item.classList.add("todoActive");
		LastAddItem = item;
		console.log(buttonUndo);
		buttonUndo.hidden = false;
		console.log(buttonUndo);
		todolist.push(todothing);
		showSuccessMessage("Your work load has increased");
		console.log(todothing);
		console.log(item);
	}
	return true;
}

function getNextFreeTodo() {
	let item = document.querySelector("#todo1");
	while (item != null) {
		if (item.classList.contains("d-none")) return item;
		item = item.nextElementSibling;
	}
	return null;
}

function clearCompleted() {
	let item = document.querySelector("#todo1");
	while (item != null) {
		if (item.classList.contains("todoInActive")) {
			item.classList.remove("todoInActive");
			item.classList.add("d-none");
		}
		item = item.nextElementSibling;
	}
	buttonUndo.hidden = true;
	showSuccessMessage("ok");
}

function toggleTodoItem(item) {

	console.log(item);
	if (item.classList.contains("todoActive")) {
		item.classList.remove("todoActive");
		item.classList.add("todoInActive");
	}
	else {
		item.classList.remove("todoInActive");
		item.classList.add("todoActive");
	}
	buttonUndo.hidden = true;
	showSuccessMessage("ok");
}



function showErrMessage(message) {
	if (message) {
		document.getElementById('errormsg').textContent = message;
		document.getElementById('successmsg').textContent = "";
	}
	else {
		document.getElementById('errormsg').textContent = "";
	}
}

function showSuccessMessage(message) {
	if (message) {
		document.getElementById('successmsg').textContent = message;
		document.getElementById('errormsg').textContent = "";
	}
	else {
		document.getElementById('successmsg').textContent = "";
	}
}

