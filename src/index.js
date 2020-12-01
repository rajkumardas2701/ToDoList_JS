import UIController from './UIController';
import projectList from './projects';

const controller = () => {
  UIController().navbar();
  // UIController().proj();
  UIController().displayProjects(projectList().projects);
  // UIController().displayProjects();
  UIController().addNewProjectForm();
};

controller();