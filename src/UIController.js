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
    projectSecBody.setAttribute('id', 'project-list');
    projectSection.appendChild(projectSecBody);

    const displayProjects = (projects) => {
      for (let i = 0; i < projects.length; i += 1) {
        const project = document.createElement('li');
        project.setAttribute('class', 'project');
        project.innerHTML = `${projects[i].name}`;
        projectSecBody.appendChild(project);
      }
    };
    return {
      displayProjects,
    };
  };

  const displayProjects = (projects) => {
    console.log(projects);
    const projectLi = document.getElementById('project-list');
    if (projectLi) {
      const project = document.createElement('li');
      project.setAttribute('class', 'project');
      project.innerHTML = `${projects}`;
      projectLi.appendChild(project);
    } else {
      proj().displayProjects(projects);
    }
  };

  const projectForm = () => {
    const content = document.getElementById('content');

    const newProject = document.createElement('form');
    newProject.setAttribute('id', 'new-project-form');
    content.appendChild(newProject);

    const projectattr = document.createElement('div');
    projectattr.setAttribute('class', 'project-attr');
    newProject.appendChild(projectattr);

    const projName = document.createElement('label');
    projName.setAttribute('class', 'form-label');
    projName.innerHTML = 'Project Name: ';
    projectattr.appendChild(projName);

    const projNameText = document.createElement('input');
    projNameText.setAttribute('id', 'form-input');
    projectattr.appendChild(projNameText);

    const projSubmit = document.createElement('button');
    projSubmit.setAttribute('id', 'project-submit');
    projSubmit.innerHTML = 'Submit';
    newProject.appendChild(projSubmit);

    const addNewProject = (event) => {
      event.preventDefault();
      console.log(document.getElementById('form-input').value);
      projectList().addProject(document.getElementById('form-input').value);
      displayProjects(document.getElementById('form-input').value);

      const formInput = document.getElementById('new-project-form');
      formInput.style.display = 'none';
    };

    if (document.getElementById('project-submit')) {
      document.getElementById('project-submit').addEventListener('click', addNewProject);
    }

    return {
      addNewProject,
    };
  };

  const addNewProjectForm = () => {
    document.getElementById('add-project-btn').addEventListener('click', projectForm);
  };

  return {
    proj,
    navbar,
    addNewProjectForm,
    displayProjects,
  };
};

export default UIController;
