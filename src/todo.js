const todosArr = [];
const todoList = () => {
  // const createToDo = (todo) => {
  //   const settodo = {
  //     title: todo.title,
  //     description: todo.description,
  //     dueDate: todo.date,
  //     // status: todo.state,
  //     priority: todo.priority,
  //     notes: todo.notes,
  //     // project: todo.projVal,
  //   };
  //   todos.push(settodo);
  // };

  const deleteTodoItem = (todoToDel) => {
    for (let i = 0; i < todosArr.length; i += 1) {
      if (todosArr[i].title === todoToDel) {
        todosArr.splice(i, 1);
      }
    }
  };

  // const editToDo = (todo, posi) => {
  //   todos[posi].title = todo.title;
  //   todos[posi].description = todo.description;
  //   todos[posi].dueDate = todo.date;
  //   todos[posi].status = todo.state;
  //   todos[posi].priority = todo.priority;
  //   todos[posi].project = todo.projVal;
  // };
  return {
    deleteTodoItem,
  };
};

export { todoList, todosArr };
