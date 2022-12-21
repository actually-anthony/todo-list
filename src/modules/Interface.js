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
    task_amount.innerText = project.tasks.length;

    _.appendChild(project_name);
    _.appendChild(task_amount);

    // add number of tasks due\

    project_element.appendChild(_);
  });

  return project_element;
}

function createTaskList(project) {
  const task_list = document.createElement("div");
  task_list.classList.add("task_list");

  project.tasks.forEach((t) => {
    console.log(t.title);
    // make an element containing the task
    const task = document.createElement("div");
    task.innerText = t.title;

    task_list.appendChild(task);
    // append it to the task_element
  });

  console.log(task_list);

  return task_list;
}

function populateTaskList(project) {
  const task_element = document.getElementById("tasks");
  // clear it out by default
  task_element.innerHTML = "";

  project.tasks.forEach((t) => {
    if (!t.finished) {
      const task = document.createElement("div");
      task.innerText = t.title;

      task_element.appendChild(task);
    }

    // append it to the task_element
  });
}

export { createProjectList, createTaskList, populateTaskList };
