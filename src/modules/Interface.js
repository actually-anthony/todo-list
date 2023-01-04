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

  active_project.tasks.forEach((t, i) => {
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

      // add description listener to task_container
      task_container.addEventListener("click", () => {
        updateDescription(t, i);
      });

      task_list.appendChild(task_container);
    }
  });

  task_element.appendChild(task_list);
  add_checkbox_listeners(active_project, projects);

  // update descriptions here too?
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

// when you click on a task
function updateDescription(task, index) {
  const container = document.getElementById("task-desc");
  container.innerHTML = "";

  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");

  const taskName = document.createElement("input");
  taskName.setAttribute("type", "text");
  taskName.classList.add("taskNameDesc");
  taskName.setAttribute("placeholder", "What needs doing?");
  taskName.value = task.title;

  // should probably make this its own function
  const taskDescription = document.createElement("input");
  taskDescription.setAttribute("type", "text");
  taskDescription.classList.add("taskDescription");

  // probbaly have to check if there's anything in there first
  taskDescription.value = task.description;
  taskDescription.setAttribute("placeholder", "Description");

  // container.appendChild(checkBox);
  taskName.addEventListener("input", (e) => {
    // descriptionUpdateTaskTitle(e.value)
    task.title = e.target.value;

    let active_task = document.querySelectorAll(".task_title")[index];
    active_task.innerText = e.target.value;
  });

  container.appendChild(taskName);
  container.appendChild(taskDescription);
}

//
function descriptionUpdateTaskTitle(title) {
  // add a new even listener every time a description is up?
  // const title_input = document.querySelector(".taskNameDesc");
}

// when you click on a project
function resetDescription(active_project) {
  const description = document.getElementById("task-desc");
  description.innerHTML = "";

  if (active_project.tasks.length > 0) {
    description.innerText = "Click on a task to view details";
  }
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
  resetDescription,
  updateDescription,
};
