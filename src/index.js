import "./style.css";
import { load_default_projects, getTasks } from "./modules/project_generator";
import {
  createProjectList,
  createTaskList,
  populateTaskList,
} from "./modules/interface";

// gets default tasks
let projects = load_default_projects();

const projects_element = document.getElementById("projects");
const task_elements = document.getElementById("tasks");

projects_element.appendChild(createProjectList(projects));
task_elements.appendChild(createTaskList(projects[0]));

add_project_listeners();

function add_project_listeners() {
  const elements = document.querySelectorAll(".project");

  elements.forEach((element, i) => {
    element.addEventListener("click", function () {
      populateTaskList(projects[i]);
    });
  });
}
