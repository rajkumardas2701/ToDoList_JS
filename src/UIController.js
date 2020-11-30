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

    const projectSecHeader = document.createElement('div');
    projectSecHeader.setAttribute('class', 'project-header');
    projectSection.appendChild(projectSecHeader);

    const projectSecHeaderText = document.createElement('h2');
    projectSecHeader.appendChild(projectSecHeaderText);
    projectSecHeaderText.innerHTML = 'Projects';

    const projectSecHeaderBtn = document.createElement('button');
    projectSecHeader.appendChild(projectSecHeaderBtn);
    projectSecHeaderBtn.setAttribute('id', 'add-project-btn');
    projectSecHeaderBtn.innerHTML = 'Add Project';

    const projectSecBody = document.createElement('div');
    projectSection.appendChild(projectSecBody);


    for (let i = 0; i < projectList().projects.length; i += 1) {
      const project = document.createElement('li');
      project.setAttribute('class', 'project');
      project.innerHTML = `${projectList().projects[i].name}`;
      projectSecBody.appendChild(project);
    }
  };

  const projectForm = () => {
    const content = document.getElementById('content');
    // content.setAttribute('class', 'form-content');

    const newProject = document.createElement('form');
    newProject.setAttribute('class', 'new-project-form');
    content.appendChild(newProject);

    const projectattr = document.createElement('div');
    projectattr.setAttribute('class', 'project-attr');
    newProject.appendChild(projectattr);

    const projName = document.createElement('label');
    projName.setAttribute('class', 'form-label');
    projName.innerHTML = 'Project Name: ';
    projectattr.appendChild(projName);

    const projNameText = document.createElement('input');
    projNameText.setAttribute('class', 'form-input');
    projectattr.appendChild(projNameText);

    const projSubmit = document.createElement('button');
    projSubmit.setAttribute('id', 'project-submit');
    projSubmit.innerHTML = 'Submit';
    newProject.appendChild(projSubmit);
  };

  const addNewProject = () => {
    document.getElementById('add-project-btn').addEventListener('click', projectForm);
  };

  return {
    proj,
    navbar,
    addNewProject,
  };
};

export default UIController;
