/* eslint-disable no-use-before-define */
import { projectList, projects } from './projects';
// import { todos } from './todo';
import { todoList, todosArr } from './todo';

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

  const deleteTodo = () => {
    let currentTodos = [];
    document.getElementById('todos-list').addEventListener('click', () => {
      if (document.getElementById('todo-delete')) {
        document.getElementById('todo-delete').addEventListener('click', (event) => {
          const todoToRemove = (event.target.parentElement.parentElement.childNodes[0].textContent).split(' ')[1];
          todoList().deleteTodoItem(todoToRemove);
          projectList().deleteTodoFromProj(todoToRemove);
          const currentproject = document.getElementById('todos-header-text').innerHTML.split(' ')[0];
          for (let i = 0; i < projects.length; i += 1) {
            if (projects[i].name === currentproject) {
              currentTodos = projects[i].todo;
            }
          }
          displayProjectTodos(currentTodos);
        });
      }
    });
  };

  const placingTodos = (todoList, todoListSec) => {
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

      const editDelete = document.createElement('div');
      editDelete.setAttribute('class', 'edit-delete');
      todoObj.appendChild(editDelete);

      const edit = document.createElement('i');
      edit.setAttribute('class', 'far fa-edit');
      edit.setAttribute('id', 'todo-edit');
      editDelete.appendChild(edit);

      const del = document.createElement('i');
      del.setAttribute('class', 'far fa-trash-alt');
      del.setAttribute('id', 'todo-delete');
      editDelete.appendChild(del);

      todoListSec.appendChild(todoObj);
    }
    deleteTodo();
    editTodos();
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
    deleteTodo();
  };

  const displayProjectTodos = (foundTodos) => {
    const temp = document.getElementById('todos-list');
    temp.remove();
    displayTodos(foundTodos);
    // deleteTodo();
    // editTodo();
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

    const editDelete = document.createElement('div');
    editDelete.setAttribute('class', 'edit-delete');
    todoObj.appendChild(editDelete);

    const edit = document.createElement('i');
    edit.setAttribute('class', 'far fa-edit');
    edit.setAttribute('id', 'todo-edit');
    editDelete.appendChild(edit);

    const del = document.createElement('i');
    del.setAttribute('class', 'far fa-trash-alt');
    del.setAttribute('id', 'todo-delete');
    editDelete.appendChild(del);

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

      const proj = document.getElementById('todos-header-text').innerHTML.split(' ')[0];
      if (proj !== 'Default') {
        projectList().updateProject(proj, settodo);
      }
      const temp = document.getElementById('to-do-form-sec');
      temp.remove();
    });
  };

  const todoEditSubmitBtn = (prevTitle) => {
    document.getElementById('todo-edit-submit').addEventListener('click', (event) => {
      event.preventDefault();
      // console.log(event);
      const tempToDo = {
        title: event.target.form[0].value,
        description: event.target.form[1].value,
        dueDate: event.target.form[2].value,
        priority: event.target.form[3].value,
        notes: event.target.form[4].value,
      };
      changeToDoInArr(prevTitle, tempToDo);
      projectList().editToDofromProj(prevTitle, tempToDo);
      // console.log(tempToDo);
      // console.log(prevTitle);
      const temp = document.getElementById('to-do-form-sec');
      temp.remove();
    });
  };

  const changeToDoInArr = (prev, newTodo) => {
    for (let i = 0; i < todosArr.length; i += 1) {
      if (todosArr[i].title === prev) {
        todosArr[i].title = newTodo.title;
        todosArr[i].description = newTodo.description;
        todosArr[i].dueDate = newTodo.dueDate;
        todosArr[i].priority = newTodo.priority;
        todosArr[i].notes = newTodo.notes;
        break;
      }
    }
    // console.log(todosArr);
    // displayProjectTodos(todosArr);
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

    // document.querySelector('#todos-section').classList.add('todo-add-border');
    todoSubmitBtn();
  };

  const addNewProjectForm = () => {
    document.getElementById('add-project-btn').addEventListener('click', projectForm);
  };

  const addNewToDoForm = () => {
    document.getElementById('add-todos-btn').addEventListener('click', toDoForm);
  };

  const editTodos = () => {
    document.getElementById('todos-list').addEventListener('click', () => {
      if (document.getElementById('todo-edit')) {
        document.getElementById('todo-edit').addEventListener('click', (event) => {
          editTodoForm(event.target.parentNode.parentNode.firstChild.innerText.split(' ')[1]);
        });
      }
    });
  };

  const editTodoForm = (editTodoItem) => {
    let toChangeTodo = {};
    for (let i = 0; i < todosArr.length; i += 1) {
      if (todosArr[i].title === editTodoItem) {
        toChangeTodo = {
          title: `${todosArr[i].title}`,
          description: `${todosArr[i].description}`,
          dueDate: `${todosArr[i].dueDate}`,
          priority: `${todosArr[i].priority}`,
          notes: `${todosArr[i].notes}`,
        };
      }
    }
    // console.log(toChangeTodo);
    editTodoFormDisplay(toChangeTodo);
  };

  const editTodoFormDisplay = (changeTodo) => {
    const appBody = document.getElementById('app-body');

    const todoFormSec = document.createElement('form');
    todoFormSec.setAttribute('id', 'to-do-form-sec');
    appBody.appendChild(todoFormSec);

    const todoHeader = document.createElement('h4');
    todoHeader.setAttribute('id', 'todo-header');
    todoHeader.innerHTML = 'Edit Task';
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
    titleText.value = `${changeTodo.title}`;
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
    descText.value = `${changeTodo.description}`;
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
    dateText.value = `${changeTodo.dueDate}`;
    dateSec.appendChild(dateText);

    const prioritySec = document.createElement('div');
    prioritySec.setAttribute('class', 'form-elements');
    todoFormSec.appendChild(prioritySec);

    const priorityLab = document.createElement('label');
    priorityLab.setAttribute('class', 'todo-form-label');
    priorityLab.innerHTML = 'Priority';
    prioritySec.appendChild(priorityLab);

    const priority = document.createElement('select');
    priority.setAttribute('id', 'priority');
    priority.value = `${changeTodo.priority}`;
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

    for (let i = 0; i < priority.options.length; i += 1) {
      if (priority.options[i].value === changeTodo.priority) {
        priority.options[i].selected = true;
      }
    }

    const notesSec = document.createElement('div');
    notesSec.setAttribute('class', 'form-elements');
    todoFormSec.appendChild(notesSec);

    const notesLab = document.createElement('label');
    notesLab.setAttribute('class', 'todo-form-label');
    notesLab.innerHTML = 'Notes';
    notesSec.appendChild(notesLab);

    const toDonotes = document.createElement('textarea');
    toDonotes.setAttribute('class', 'form-text');
    toDonotes.value = `${changeTodo.notes}`;
    notesSec.appendChild(toDonotes);

    const todoSubmit = document.createElement('button');
    todoSubmit.setAttribute('id', 'todo-edit-submit');
    todoSubmit.innerHTML = 'Submit';
    todoFormSec.appendChild(todoSubmit);
    todoEditSubmitBtn(changeTodo.title);
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
    todosSecHeaderText.setAttribute('id', 'todos-header-text');
    todosSecHeader.appendChild(todosSecHeaderText);
    todosSecHeaderText.innerHTML = 'Default To-Dos';

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
      let foundTodos = [];
      for (let i = 0; i < projects.length; i += 1) {
        if (projects[i].name === event.target.textContent) {
          foundTodos = projects[i].todo;
        }
      }
      const todosHeaderUpdate = document.getElementById('todos-header-text');
      todosHeaderUpdate.innerHTML = `${event.target.textContent} To-Dos`;
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
    deleteTodo,
    editTodos,
  };
};

export default UIController;
