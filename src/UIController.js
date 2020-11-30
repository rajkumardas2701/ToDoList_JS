import projectList from './projects';

const UIController = () => {
  const navbar = () => {
    const content = document.getElementById('content');

    const nav = document.createElement('div');
    nav.setAttribute('class', 'navbar');
    content.appendChild(nav);

    const navText = document.createElement('h1');
    navText.setAttribute('id', 'nav-text');
    nav.appendChild(navText);
    navText.innerHTML = 'To-Do List App';
  };

  const proj = () => {
    const content = document.getElementById('content');

    const projectSection = document.createElement('div');
    projectSection.setAttribute('class', 'project-section');
    content.appendChild(projectSection);

    const projectSecHeader = document.createElement('h2');
    projectSection.appendChild(projectSecHeader);
    projectSecHeader.innerHTML = 'Projects';

    for (let i = 0; i < projectList().projects.length; i += 1) {
      const project = document.createElement('li');
      project.setAttribute('class', 'project');
      project.innerHTML = `${projectList().projects[i].name}`;
      projectSection.appendChild(project);
    }
  };
  return {
    proj,
    navbar,
  };
};

export default UIController;
