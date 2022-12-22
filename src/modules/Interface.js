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

export { createProjectList, populateTaskList };
