import "./style.css";
import { loadTasks } from "./modules/project_generator";
import { createProjectList } from "./modules/interface";

// gets default tasks
let projects = loadTasks();

const projects_element = document.getElementById("projects");

projects_element.appendChild(createProjectList(projects));
console.log("helllo");
