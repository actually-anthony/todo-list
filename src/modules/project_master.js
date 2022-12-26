import {
  populateTaskList,
  erase_task_input,
  updateProjectList,
} from "./interface";
import Task from "./task";

// TODO: Adding new tasks in from the task_header - will have to call interface .js

// press enter on text_input, adds new list

// add to the project
// get current project and new task

function get_all_tasks(projects) {
  let tasks = [];

  const all_project = projects.filter((project) => {
    return project.name == "All";
  })[0];

  projects.forEach((project) => {
    if (project.name != "All") {
      tasks = tasks.concat(project.tasks);
    }
  });

  const tasks_added_to_all = all_project.tasks.filter((task) => {
    return !tasks.includes(task);
  });

  tasks = tasks.concat(tasks_added_to_all);

  return tasks;
}

function update_all_project(projects) {
  projects.forEach((project) => {
    if (project.name == "All") {
      project.tasks = get_all_tasks(projects);
    }
  });
}

function add_task(project, task) {
  const addedTask = new Task(task, project.dueDate);
  project.tasks.push(addedTask);
}

//

//

// TODO: Deleting tasks after being checked

// TODO: Adding descriptions to tasks

export { add_task, update_all_project };
