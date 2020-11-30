const projects = () => {
  const defaultProject = {
    name: 'Default project',
    value: '1',
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
};

export default projects;