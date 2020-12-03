import UIController from './UIController';
import { projects } from './projects';

const controller = () => {
  UIController().navbar();
  UIController().createAppBody();
  UIController().displayProjects(projects);
  // UIController().displayProjects();
  UIController().addNewProjectForm();
  UIController().todos();
  UIController().addNewToDoForm();
};

controller();