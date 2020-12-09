// import todoList from './todo';
// import UIController from './UIController';

import { todosArr } from './todo';

const defaultProject = {
  name: 'Default',
  // value: '0',
  todo: todosArr,
};

const projects = JSON.parse(localStorage.getItem('projects'))
  ? JSON.parse(localStorage.getItem('projects')) : [defaultProject];

const projectList = () => {
  const updateProjectInLocalStorage = () => {
    localStorage.setItem('projects', JSON.stringify(projects));
  };

  const editToDofromProj = (prev, newTodo) => {
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
    updateProjectInLocalStorage();
  };

  const addProject = (project, todos = []) => {
    projects.push({ name: project, todo: todos });
    updateProjectInLocalStorage();
  };

  const updateProject = (proj, addTodo) => {
    for (let i = 0; i < projects.length; i += 1) {
      if (projects[i].name === proj) {
        projects[i].todo.push(addTodo);
        updateProjectInLocalStorage();
      }
    }
  };

  const deleteProject = (project) => {
    projects.splice(projects[project.value], 1);
    updateProjectInLocalStorage();
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
    updateProjectInLocalStorage();
  };

  return {
    deleteProject,
    addProject,
    projects,
    deleteTodoFromProj,
    updateProject,
    editToDofromProj,
    updateProjectInLocalStorage,
  };
};

export { projectList, projects };
