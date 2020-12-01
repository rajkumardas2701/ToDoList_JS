// import todoList from './todo';
// import UIController from './UIController';

const projectList = () => {
  const defaultProject = {
    name: 'Default',
    // value: '0',
    // todo: [],
  };

  const projects = [defaultProject];

  const addProject = (project) => {
    projects.push({ name: project });
    console.log(projects);
    console.log(`Testing ${project}`);
    // UIController().displayProjects(projects[projects.length - 1]);
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

export default projectList;
