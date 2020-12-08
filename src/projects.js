// import todoList from './todo';
// import UIController from './UIController';

import { todosArr } from './todo';

const defaultProject = {
  name: 'Default',
  // value: '0',
  todo: todosArr,
};

const projects = [defaultProject];

const projectList = () => {
  const editToDofromProj = (prev, newTodo) => {
    // console.log('Inside edit to do from Proj');
    for (let i = 0; i < projects.length; i += 1) {
      for (let j = 0; j < projects[i].todo.length; j += 1) {
        if (projects[i].todo[j].title === prev) {
          projects[i].todo[j].title = newTodo.title;
          projects[i].todo[j].description = newTodo.description;
          projects[i].todo[j].dueDate = newTodo.dueDate;
          projects[i].todo[j].priority = newTodo.priority;
          projects[i].todo[j].notes = newTodo.notes;
        }
      }
    }
  };

  const addProject = (project, todos = []) => {
    projects.push({ name: project, todo: todos });
  };

  const updateProject = (proj, addTodo) => {
    for (let i = 0; i < projects.length; i += 1) {
      if (projects[i].name === proj) {
        projects[i].todo.push(addTodo);
      }
    }
  };

  const deleteProject = (project) => {
    projects.splice(projects[project.value], 1);
  };

  const deleteTodoFromProj = (deleteTodo) => {
    for (let i = 0; i < projects.length; i += 1) {
      for (let j = 0; j < projects[i].todo.length; j += 1) {
        if (projects[i].todo[j].title === deleteTodo) {
          projects[i].todo.splice(j, 1);
        }
      }
    }
    // console.log(projects);
  };

  return {
    deleteProject,
    addProject,
    projects,
    deleteTodoFromProj,
    updateProject,
    editToDofromProj,
  };
};

export { projectList, projects };
