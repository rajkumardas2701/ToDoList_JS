import UIController from './UIController';
import { projects } from './projects';

const controller = () => {
  UIController().navbar();
  // UIController().proj();
  UIController().displayProjects(projects);
  // UIController().displayProjects();
  UIController().addNewProjectForm();
};

controller();