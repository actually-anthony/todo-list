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

export { createProjectList };
