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

function populateTaskList(project) {
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

  project.tasks.forEach((t) => {
    if (!t.finished) {
      const task = document.createElement("div");
      task.classList.add("task");
      task.innerText = t.title;

      task_list.appendChild(task);
    }

    // append it to the task_element
  });

  task_element.appendChild(task_list);
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
};
