const todoList = () => {
  const todos = [];
  const createToDo = (todo) => {
    const settodo = {
      title: todo.title,
      description: todo.description,
      dueDate: todo.date,
      status: todo.state,
      priority: todo.priority,
      project: todo.projVal,
    };
    todos.push(settodo);
  };

  const deleteToDo = (posi) => {
    todos.splice(todos[posi]);
  };

  const editToDo = (todo, posi) => {
    todos[posi].title = todo.title;
    todos[posi].description = todo.description;
    todos[posi].dueDate = todo.date;
    todos[posi].status = todo.state;
    todos[posi].priority = todo.priority;
    todos[posi].project = todo.projVal;
  };
};

export default todoList;