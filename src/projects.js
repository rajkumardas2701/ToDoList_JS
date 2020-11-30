// import todoList from './todo';

const projectList = () => {
  const defaultProject = {
    name: 'Default',
    value: '0',
    todo: [],
  };

  const projects = [defaultProject];

  const addProject = (project) => {
    const proj = {
      name: project.name,
      value: project.value,
      todo: project.todo,
    };
    projects.push(proj);
  };

  const deleteProject = (project) => {
    projects.splice(projects[project.value], 1);
  };
  return {
    projects,
    addProject,
    deleteProject,
  };
};

// projectList();

export default projectList;