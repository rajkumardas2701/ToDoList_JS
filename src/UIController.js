import { projectList } from './projects';

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
    const appBody = document.getElementById('app-body');

    const projectSection = document.createElement('div');
    projectSection.setAttribute('id', 'project-section');
    appBody.appendChild(projectSection);

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
    const formExist = document.getElementById('new-project-form');
    if (formExist) {
      document.querySelector('#new-project-form').classList.remove('hide-new-project-form');
    } else {
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

      // const changeBack = document.getElementById('project-section');
      // changeBack.querySelector('#project-section').classList.add('background-project-section');
    }

    if (document.getElementById('project-submit')) {
      document.getElementById('project-submit').addEventListener('click', (event) => {
        event.preventDefault();
        projectList().addProject(document.getElementById('form-input').value);
        displayProjects(document.getElementById('form-input').value);
        const temp = document.getElementById('new-project-form');
        temp.remove();
        // const removeBack = document.getElementById('project-section');
        // removeBack.querySelector('#project-section').classList
        // .remove('background-project-section');
      });
    }
  };

  const toDoForm = (event) => {
    event.preventDefault();
    // console.log('inside to do form');
  };

  const addNewProjectForm = () => {
    document.getElementById('add-project-btn').addEventListener('click', projectForm);
  };

  const addNewToDoForm = () => {
    document.getElementById('add-todos-btn').addEventListener('click', toDoForm);
  };

  const todos = () => {
    const appBody = document.getElementById('app-body');

    const todosSection = document.createElement('div');
    todosSection.setAttribute('id', 'todos-section');
    appBody.appendChild(todosSection);

    const todosSecHeader = document.createElement('div');
    todosSecHeader.setAttribute('class', 'todos-header');
    todosSection.appendChild(todosSecHeader);

    const todosSecHeaderText = document.createElement('h2');
    todosSecHeader.appendChild(todosSecHeaderText);
    todosSecHeaderText.innerHTML = 'To-Dos';

    const todosSecHeaderBtn = document.createElement('button');
    todosSecHeader.appendChild(todosSecHeaderBtn);
    todosSecHeaderBtn.setAttribute('id', 'add-todos-btn');
    todosSecHeaderBtn.innerHTML = 'Add Task';

    const todosSecBody = document.createElement('div');
    todosSecBody.setAttribute('id', 'todos-list');
    todosSection.appendChild(todosSecBody);
  };

  const createAppBody = () => {
    const content = document.getElementById('content');
    const appBody = document.createElement('div');
    appBody.setAttribute('id', 'app-body');
    content.appendChild(appBody);
  };

  return {
    navbar,
    proj,
    addNewProjectForm,
    displayProjects,
    todos,
    createAppBody,
    addNewToDoForm,
  };
};

export default UIController;
