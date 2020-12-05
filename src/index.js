import UIController from './UIController';
import { projects } from './projects';
import { todosArr } from './todo';

const controller = () => {
  UIController().navbar();
  UIController().createAppBody();
  UIController().displayProjects(projects);
  UIController().addNewProjectForm();
  UIController().todos();
  UIController().addNewToDoForm();
  UIController().displayTodos(todosArr);
  UIController().getProjectTodos();
  UIController().deleteTodo();
};

controller();