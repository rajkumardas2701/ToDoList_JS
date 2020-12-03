import UIController from './UIController';
import { projects } from './projects';
// import todoList from './todo';

const controller = () => {
  UIController().navbar();
  UIController().createAppBody();
  UIController().displayProjects(projects);
  UIController().addNewProjectForm();
  UIController().todos();
  UIController().addNewToDoForm();
  UIController().displayTodos();
};

controller();