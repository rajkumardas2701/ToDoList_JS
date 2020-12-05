import { projectList, projects } from './projects';
// import { todos } from './todo';
import { todosArr } from './todo';

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

      const todoSec = document.createElement('div');
      todoSec.setAttribute('class', 'todo-sec');
      newProject.appendChild(todoSec);

      for (let i = 0; i < todosArr.length; i += 1) {
        const todoAttr = document.createElement('div');
        todoAttr.setAttribute('class', 'todo-item');
        todoSec.appendChild(todoAttr);

        const todoLabel = document.createElement('label');
        todoLabel.setAttribute('class', 'todo-label');
        todoLabel.innerHTML = `${todosArr[i].title}`;
        todoAttr.appendChild(todoLabel);

        const todoCheckbox = document.createElement('input');
        todoCheckbox.setAttribute('type', 'checkbox');
        todoAttr.appendChild(todoCheckbox);
      }
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
        // console.log(event);
        // console.log(`${event.target.form[1].checked}`);
        const projTodos = [];
        for (let i = 0; i < todosArr.length; i += 1) {
          if (event.target.form[i + 1].checked) {
            projTodos.push(todosArr[i]);
          }
        }

        projectList().addProject(document.getElementById('form-input').value, projTodos);
        // console.log(projects);
        displayProjects(document.getElementById('form-input').value);
        const temp = document.getElementById('new-project-form');
        temp.remove();
        // const removeBack = document.getElementById('project-section');
        // removeBack.querySelector('#project-section').classList
        // .remove('background-project-section');
      });
    }
  };
  const placingTodos = (todoList, todoListSec) => {
    // const todoListSec = document.getElementById('todos-list');

    // console.log('inside placingTodos function');
    // console.log(todoList);
    for (let i = 0; i < todoList.length; i += 1) {
      const todoObj = document.createElement('div');
      todoObj.setAttribute('class', 'to-do-obj');

      const list = document.createElement('label');
      list.innerHTML = `<b>Title: </b>${todoList[i].title}`;
      todoObj.appendChild(list);

      const desc = document.createElement('label');
      desc.innerHTML = `<b>Description: </b>${todoList[i].description}`;
      todoObj.appendChild(desc);

      const date = document.createElement('label');
      date.innerHTML = `<b>Due Date: </b>${todoList[i].dueDate}`;
      todoObj.appendChild(date);

      const priority = document.createElement('label');
      priority.innerHTML = `<b>Priority: </b>${todoList[i].priority}`;
      if (todoList[i].priority === 'High') {
        priority.style.color = 'red';
      } else if (todoList[i].priority === 'Medium') {
        priority.style.color = 'orange';
      } else {
        priority.style.color = 'rgb(7, 173, 118)';
      }

      todoObj.appendChild(priority);

      const notes = document.createElement('label');
      notes.innerHTML = `<b>Note: </b>${todoList[i].notes}`;
      todoObj.appendChild(notes);
      // console.log('working till here');
      todoListSec.appendChild(todoObj);
    }
  };

  const displayTodos = (todoList) => {
    // console.log(todoList);
    const todoListSec = document.getElementById('todos-list');
    // console.log(todoListSec);
    if (todoListSec) {
      // console.log('inside default app display');
      placingTodos(todoList, todoListSec);
    } else {
      // console.log('inside new project display');
      const todoSecTemp = document.getElementById('todos-section');
      // console.log(todoSecTemp);
      const todoListSecTemp = document.createElement('div');
      todoListSecTemp.setAttribute('id', 'todos-list');
      todoSecTemp.appendChild(todoListSecTemp);
      // console.log(todoListSecTemp);
      placingTodos(todoList, todoListSecTemp);
    }
  };

  const displayProjectTodos = (foundTodos) => {
    const temp = document.getElementById('todos-list');
    temp.remove();
    // console.log(foundTodos);
    displayTodos(foundTodos);
  };

  const updateToDos = (settodo) => {
    const todoListSec = document.getElementById('todos-list');
    const todoObj = document.createElement('div');
    todoObj.setAttribute('class', 'to-do-obj');

    const list = document.createElement('label');
    list.innerHTML = `<b>Title: </b>${settodo.title}`;
    todoObj.appendChild(list);

    const desc = document.createElement('label');
    desc.innerHTML = `<b>Description: </b>${settodo.description}`;
    todoObj.appendChild(desc);

    const date = document.createElement('label');
    date.innerHTML = `<b>Due Date: </b>${settodo.dueDate}`;
    todoObj.appendChild(date);

    const priority = document.createElement('label');
    priority.innerHTML = `<b>Priority: </b>${settodo.priority}`;
    if (settodo.priority === 'High') {
      priority.style.color = 'red';
    } else if (settodo.priority === 'Medium') {
      priority.style.color = 'orange';
    } else {
      priority.style.color = 'rgb(7, 173, 118)';
    }
    todoObj.appendChild(priority);

    const notes = document.createElement('label');
    notes.innerHTML = `<b>Note: </b>${settodo.notes}`;
    todoObj.appendChild(notes);

    todoListSec.appendChild(todoObj);
  };

  const todoSubmitBtn = () => {
    document.getElementById('todo-submit').addEventListener('click', (event) => {
      event.preventDefault();
      const settodo = {
        title: event.target.form[0].value,
        description: event.target.form[1].value,
        dueDate: event.target.form[2].value,
        priority: event.target.form[3].value,
        notes: event.target.form[4].value,
      };
      todosArr.push(settodo);
      updateToDos(settodo);
      const temp = document.getElementById('to-do-form-sec');
      temp.remove();
      // document.querySelector('#todos-section').classList.add('todo-remove-border');
    });
  };

  const toDoForm = (event) => {
    event.preventDefault();
    const appBody = document.getElementById('app-body');

    const todoFormSec = document.createElement('form');
    todoFormSec.setAttribute('id', 'to-do-form-sec');
    appBody.appendChild(todoFormSec);

    const todoHeader = document.createElement('h4');
    todoHeader.setAttribute('id', 'todo-header');
    todoHeader.innerHTML = 'Create a Task';
    todoFormSec.appendChild(todoHeader);

    const titleSec = document.createElement('div');
    titleSec.setAttribute('class', 'form-elements');
    todoFormSec.appendChild(titleSec);

    const titleLab = document.createElement('label');
    titleLab.setAttribute('class', 'todo-form-label');
    titleLab.innerHTML = 'Title';
    titleSec.appendChild(titleLab);

    const titleText = document.createElement('input');
    titleText.setAttribute('class', 'form-text');
    titleSec.appendChild(titleText);


    const descSec = document.createElement('div');
    descSec.setAttribute('class', 'form-elements');
    todoFormSec.appendChild(descSec);

    const descLab = document.createElement('label');
    descLab.setAttribute('class', 'todo-form-label');
    descLab.innerHTML = 'Description';
    descSec.appendChild(descLab);

    const descText = document.createElement('textarea');
    descText.setAttribute('class', 'form-text');
    descSec.appendChild(descText);

    const dateSec = document.createElement('div');
    dateSec.setAttribute('class', 'form-elements');
    todoFormSec.appendChild(dateSec);

    const dateLab = document.createElement('label');
    dateLab.setAttribute('class', 'todo-form-label');
    dateLab.innerHTML = 'Due Date';
    dateSec.appendChild(dateLab);

    const dateText = document.createElement('input');
    dateText.setAttribute('type', 'date');
    dateText.setAttribute('class', 'form-text');
    dateSec.appendChild(dateText);

    const prioritySec = document.createElement('div');
    prioritySec.setAttribute('class', 'form-elements');
    todoFormSec.appendChild(prioritySec);

    const priorityLab = document.createElement('label');
    priorityLab.setAttribute('class', 'todo-form-label');
    priorityLab.innerHTML = 'Priority';
    prioritySec.appendChild(priorityLab);

    const priority = document.createElement('select');
    priority.setAttribute('class', 'priority');
    prioritySec.appendChild(priority);

    const priorOpt1 = document.createElement('option');
    priorOpt1.setAttribute('value', 'High');
    priority.appendChild(priorOpt1);
    priorOpt1.innerHTML = 'High';

    const priorOpt2 = document.createElement('option');
    priorOpt2.setAttribute('value', 'Medium');
    priority.appendChild(priorOpt2);
    priorOpt2.innerHTML = 'Medium';

    const priorOpt3 = document.createElement('option');
    priorOpt3.setAttribute('value', 'Low');
    priority.appendChild(priorOpt3);
    priorOpt3.innerHTML = 'Low';

    const notesSec = document.createElement('div');
    notesSec.setAttribute('class', 'form-elements');
    todoFormSec.appendChild(notesSec);

    const notesLab = document.createElement('label');
    notesLab.setAttribute('class', 'todo-form-label');
    notesLab.innerHTML = 'Notes';
    notesSec.appendChild(notesLab);

    const toDonotes = document.createElement('textarea');
    toDonotes.setAttribute('class', 'form-text');
    notesSec.appendChild(toDonotes);

    const todoSubmit = document.createElement('button');
    todoSubmit.setAttribute('id', 'todo-submit');
    todoSubmit.innerHTML = 'Submit';
    todoFormSec.appendChild(todoSubmit);

    document.querySelector('#todos-section').classList.add('todo-add-border');
    todoSubmitBtn();
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
    todosSecHeaderText.innerHTML = 'All To-Dos';

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

  const getProjectTodos = () => {
    document.getElementById('project-list').addEventListener('click', (event) => {
      // console.log(projects[0].name);
      // console.log(event.target.textContent);
      let foundTodos = [];
      for (let i = 0; i < projects.length; i += 1) {
        if (projects[i].name === event.target.textContent) {
          // console.log(`found a match at ${projects[i].name} and todos are ${projects[i].todo}}`);
          foundTodos = projects[i].todo;
        }
      }
      // console.log(foundTodos);
      displayProjectTodos(foundTodos);
    });
  };

  return {
    navbar,
    proj,
    addNewProjectForm,
    displayProjects,
    todos,
    createAppBody,
    addNewToDoForm,
    todoSubmitBtn,
    displayTodos,
    getProjectTodos,
  };
};

export default UIController;
