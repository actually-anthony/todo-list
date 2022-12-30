import Project from "./project";
import { load_default_projects } from "./project_generator";
import Task from "./task";

function storeProjects(projects) {
  // wipe out previous storage
  localStorage.clear();
  const serialized_projects = JSON.stringify(projects);
  localStorage.setItem("projects", serialized_projects);
}

function generateProjects() {
  // get projects
  let stored_projects = localStorage.getItem("projects");

  // make default projects and store them
  if (!stored_projects) {
    // array value of projects

    const projects = load_default_projects();

    // saves projects
    storeProjects(projects);
    return projects;
  }

  // now we have to create a new projects class based on stored_projects
  const projects = [];

  stored_projects = JSON.parse(stored_projects);

  stored_projects.forEach((project) => {
    let project_object = new Project(project.name, project.dueDate);
    project_object.tasks = addStoredTasks(project.tasks);
    projects.push(project_object);
  });

  return projects;

  // this is applicable to any project size...
}

function addStoredTasks(taskArray) {
  const tasks = [];

  taskArray.forEach((storedTask) => {
    tasks.push(
      new Task(
        storedTask.title,
        storedTask.origin_project,
        storedTask.dueDate,
        storedTask.finished,
        storedTask.description
      )
    );
  });

  return tasks;
}

export { generateProjects, storeProjects };
