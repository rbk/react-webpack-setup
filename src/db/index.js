var Db = function () {};

Db.prototype.getAll = function(){

	localStorage.removeItem('todos')

	let todos = [];
	let ls = localStorage.getItem('todos');
	if (typeof(ls) != 'array') {
		ls = []
	}
	// todos = JSON.parse(ls);

	if (typeof(todos) === 'object' ) {
		// No Todos
		todos = [];
	} else {
		localStorage.setItem('todos', []);
	}
	console.log(todos)
	return todos;
}

Db.prototype.insert = function (todo) {
	let todos = Db.prototype.getAll();
	var time = new Date();
	console.log(todos)
	console.log(time)
	console.log(todo)
	todos.push({time, todo});
	localStorage.setItem('todos', todos)
	console.log('time')
}

module.exports = new Db();