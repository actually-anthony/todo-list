// TODO: Make this into a class ?
// new interface (project_list, task_list)
// well tbh, a lot of the variables can be put at the top

import { update_all_project, finish_task } from "./project_master";
import { storeProjects } from "./storage";

function createProjectList(projects) {
  // parent element
  const project_element = document.createElement("div");
  project_element.classList.add("project_list");

  // loop through projects and append
  // TODO: replace _ with a name
  projects.forEach((project) => {
    const _ = document.createElement("div");
    _.classList.add("project");

    const project_name = document.createElement("div");
    project_name.innerText = project.name;

    const task_amount = document.createElement("div");
    task_amount.classList.add("task_amount");

    if (project.unfinished_tasks > 0) {
      task_amount.innerText = project.unfinished_tasks;
    }

    _.appendChild(project_name);
    _.appendChild(task_amount);

    // add number of tasks due\

    project_element.appendChild(_);
  });

  return project_element;
}

function updateTasksRemaining(projects) {
  // index should line up to projects
  const project_list = document.querySelectorAll(".project");

  projects.forEach((project, index) => {
    const task_amount = project_list[index].querySelector(".task_amount");
    task_amount.innerText = project.tasks.length;
  });
}

function activateProject(e) {
  // deactivate the other projects
  const projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    project.classList.remove("active");
  });

  e.classList.add("active");
}

function populateTaskList(active_project, projects) {
  const task_element = document.getElementById("tasks");
  let task_list;
  // clear it out by default

  if (document.querySelector(".task_list") == null) {
    task_list = document.createElement("div");
    task_list.classList.add("task_list");
  } else {
    task_list = document.querySelector(".task_list");
    task_list.innerHTML = "";
  }

  active_project.tasks.forEach((t) => {
    if (!t.finished) {
      const task_container = document.createElement("div");
      const task_title = document.createElement("div");
      const checkbox = document.createElement("input");

      const left_task = document.createElement("div");
      left_task.classList.add("left-side");

      task_container.classList.add("task");

      task_title.classList.add("task_title");
      task_title.innerText = t.title;

      checkbox.setAttribute("type", "checkbox");
      checkbox.classList.add("check-box");

      left_task.appendChild(checkbox);
      left_task.appendChild(task_title);
      task_container.appendChild(left_task);

      //

      task_list.appendChild(task_container);
    }
  });

  task_element.appendChild(task_list);
  add_checkbox_listeners(active_project, projects);
}

function add_checkbox_listeners(active_project, projects) {
  const check_boxes = document.querySelectorAll(".check-box");

  check_boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
      const tasks = document.querySelectorAll(".task");
      const selected_task = e.target.parentNode.parentNode;

      tasks.forEach((task, index) => {
        if (task === selected_task) {
          finish_task(active_project, projects, index);
          populateTaskList(active_project, projects);
          update_all_project(projects);
          updateTasksRemaining(projects);
          storeProjects(projects);
        }
      });
    });
  });
}

function erase_task_input() {
  const task_input = document.querySelector(".task_input");
  task_input.value = "";
}

function updateTaskHeader(project) {
  const title = document.querySelector(".title");
  title.textContent = project.name;

  const input = document.querySelector(".task_input");
  input.setAttribute("placeholder", `Add task to "${project.name}"`);
}

function createTaskHeader(project) {
  const header = document.createElement("div");
  header.classList.add("task_header");

  const title = document.createElement("div");
  title.innerText = project.name;
  title.classList.add("title");

  header.appendChild(title);

  var input = document.createElement("INPUT");
  input.setAttribute("type", "text");
  input.classList.add("task_input");
  input.setAttribute("placeholder", `Add task to "${project.name}"`);

  header.appendChild(input);

  return header;
}

export {
  createProjectList,
  populateTaskList,
  updateTaskHeader,
  createTaskHeader,
  activateProject,
  erase_task_input,
  updateTasksRemaining,
};
