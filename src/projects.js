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
  const addProject = (project, todos = []) => {
    projects.push({ name: project, todo: todos });
    // console.log(projects);
  };

  const deleteProject = (project) => {
    projects.splice(projects[project.value], 1);
  };

  return {
    deleteProject,
    addProject,
    projects,
  };
};

export { projectList, projects };
