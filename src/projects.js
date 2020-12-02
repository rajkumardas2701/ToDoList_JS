// import todoList from './todo';
// import UIController from './UIController';
const defaultProject = {
  name: 'Default',
  // value: '0',
  // todo: [],
};

const projects = [defaultProject];

const projectList = () => {
  const addProject = (project) => {
    projects.push({ name: project });
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
