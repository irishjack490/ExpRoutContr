module.exports = {
  index,
  show
};

const Todo = require('../models/todo');

function index(req, res) {
  res.render('todos/index', {
    title: 'Express To-Do',
    todos: Todo.getAll()
  });
}

function show(req, res) {
  const todo = Todo.getOne(req.params.id);
  res.render('todos/show', {
    title: todo.todo,
    todo: todo,
  });
}
