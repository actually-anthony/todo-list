import "./style.css";
import {
  createProjectList,
  populateTaskList,
  createTaskHeader,
  updateTaskHeader,
  activateProject,
  erase_task_input,
  resetDescription,
  updateTasksRemaining,
} from "./modules/interface";

import { add_task, update_all_project } from "./modules/project_master";
import { generateProjects, storeProjects } from "./modules/storage";

// gets default tasks
let projects = generateProjects();

const projects_element = document.getElementById("projects");
const task_elements = document.getElementById("tasks");
let activeProject = projects[0];

projects_element.appendChild(createProjectList(projects));
task_elements.appendChild(createTaskHeader(projects[0]));

populateTaskList(projects[0], projects);
updateTasksRemaining(projects);
document.querySelectorAll(".project")[0].classList.add("active");

add_project_listeners();

const task_input = document.querySelector(".task_input");
const tasks = document.querySelectorAll(".task");

task_input.addEventListener("keypress", function (e) {
  if (e.key === "Enter" && e.target.value != "") {
    let task_title = e.target.value;
    add_task(activeProject, task_title);
    populateTaskList(activeProject, projects);
    erase_task_input();
    update_all_project(projects);
    updateTasksRemaining(projects);
    storeProjects(projects);
  }
});

// TODO: move to itnerface.js
function add_project_listeners() {
  const elements = document.querySelectorAll(".project");

  elements.forEach((element, i) => {
    element.addEventListener("click", function (e) {
      activeProject = projects[i];
      update_all_project(projects);
      populateTaskList(activeProject, projects);
      updateTaskHeader(activeProject);
      storeProjects(projects);
      activateProject(e.target);
      resetDescription(activeProject);
    });
  });
}
