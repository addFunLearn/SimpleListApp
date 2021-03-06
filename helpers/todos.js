var db = require('../models');
exports.getTodos = function (req, res) {
	// body...
	db.Todo.find()
	.then(function (todos) {
		// body...
		res.json(todos);
	})
	.catch(function(err){
		res.send(err);
	})
}

exports.createTodo = function (req, res) {
	// body...
	db.Todo.create(req.body)
	.then(function (newTodo) {
		// body...
		res.json(newTodo);
	})
	.catch(function(err){
		res.send(err);
	})
}

exports.getTodo = function(req, res){
	db.Todo.findById(req.params.todId)
	.then(function (foundTodo) {
		// body...
		res.json(foundTodo);
	})
	.catch(function (err) {
		// body...
		res.send(err);
	})
}

exports.updateTodo = function (req, res) {
	// body...
	db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
	.then(function(todo){
		res.json(todo);
	})
	.catch(function(err){
		res.send(err);
	})

}

exports.deleteTodo = function(req, res){
	db.Todo.remove({_id: req.params.todoId})
	.then(function(){
		res.json({message: 'We deleted it!'});
	})
	.catch(function(err){
		res.send(err);
	})
}

module.exports = exports;